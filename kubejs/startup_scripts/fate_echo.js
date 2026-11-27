// 宿命的回响：先确认移动厕所出生点，再核验长岛冰茶确实被喝完。
// 当前森罗核心库的 Post 事件位于 finishUsingItem 的 HEAD，早于药效与物品消耗。
const $FateEchoDrinkFinished = Java.loadClass(
    'com.bmt.kaleidoscope_lib.api.event.DrinkCocktailEvent$Post'
)
const $FateEchoServerPlayer = Java.loadClass('net.minecraft.server.level.ServerPlayer')
const $FateEchoFakePlayer = Java.loadClass('net.neoforged.neoforge.common.util.FakePlayer')
const $FateEchoRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')

function fateEchoIsToilet(level, pos) {
    return String($FateEchoRegistries.BLOCK.getKey(level.getBlockState(pos).getBlock())) ===
        'poopsky:portable_toilet'
}

function fateEchoNotRecorded(reason) {
    console.info('[宿命的回响] 本次未记录：' + reason)
}

function fateEchoFindLevel(server, dimension) {
    // KubeJS 为 getLevel 额外暴露 ResourceLocation 重载；ResourceKey 参数会发生歧义。
    // 遍历已加载的服务端维度，避免调用这个重载方法。
    const levels = server.getAllLevels().iterator()
    while (levels.hasNext()) {
        const level = levels.next()
        // KubeJS 将原版 dimension() 重命名为 getDimensionKey()。
        // ResourceKey 没有重写 Object.equals()，Rhino 不暴露继承的 equals 方法。
        if (String(level.getDimensionKey()) === dimension) return level
    }
    return null
}

function fateEchoCheckDrink(event) {
    if (event.level().isClientSide()) return

    const player = event.entity()
    if (!(player instanceof $FateEchoServerPlayer) || player instanceof $FateEchoFakePlayer) return

    const stack = event.stack()
    if (String($FateEchoRegistries.ITEM.getKey(stack.getItem())) !==
        'kaleidoscope_world_liquor:long_island_iced_tea') return

    if (player.getPersistentData().getCompound('PlayerPersisted')
        .getBoolean('kubejs_fate_echo_complete')) {
        console.info('[宿命的回响] 已有任务达成记录，等待 FTB 任务检测。')
        return
    }

    // 饮用之前，当前出生点必须已经设在一个有效的移动厕所上。
    const server = player.getServer()
    const respawnPos = player.getRespawnPosition()
    if (!server || !respawnPos) return fateEchoNotRecorded('没有可用的个人出生点')

    const targetPos = respawnPos.immutable()
    const targetDimension = String(player.getRespawnDimension())
    const targetLevel = fateEchoFindLevel(server, targetDimension)
    if (!targetLevel) return fateEchoNotRecorded('出生点维度不可用')
    if (!fateEchoIsToilet(targetLevel, targetPos)) {
        return fateEchoNotRecorded('当前出生点方块不是移动厕所')
    }

    // 饮用事件位于物品消耗之前；以使用统计增长确认真的喝完，防止取消饮用误判。
    // 返程交由原模组处理，任务不额外要求离开厕所或在某个 tick 到达固定坐标。
    const drinkItem = stack.getItem()
    const usedBefore = player.stats.getItemsUsed(drinkItem)
    console.info('[宿命的回响] 已确认移动厕所出生点，下一 tick 核验是否喝完。')

    server.scheduleInTicks(1, () => {
        try {
            if (player.isRemoved() || !player.isAlive()) {
                return fateEchoNotRecorded('玩家已死亡或离开')
            }

            // 其他监听器可能取消饮用；实际饮用统计必须增长，不能只靠右键尝试。
            if (player.stats.getItemsUsed(drinkItem) <= usedBefore) {
                return fateEchoNotRecorded('饮用统计没有增长，未确认实际喝完')
            }

            // PlayerPersisted 随玩家存档保存，并在死亡重建玩家时保留。
            // 此版本 Rhino 的 try 块内 const 会误报重复声明，局部变量使用 let。
            let data = player.getPersistentData()
            let persisted = data.getCompound('PlayerPersisted')
            persisted.putBoolean('kubejs_fate_echo_complete', true)
            data.put('PlayerPersisted', persisted)
            console.info('[宿命的回响] 已确认移动厕所出生点且喝完长岛冰茶，等待任务检测。')
        } catch (error) {
            console.error('[宿命的回响] 饮用完成核验失败：' + error)
        }
    })
}

NativeEvents.onEvent($FateEchoDrinkFinished, event => {
    // 可选任务发生脚本错误时应保留日志，不能让异常冒泡到玩家 tick 导致崩溃。
    try {
        fateEchoCheckDrink(event)
    } catch (error) {
        console.error('[宿命的回响] 饮用检测失败：' + error)
    }
})
