// 玩家破坏沙子时，把本次实际产生的掉落物直接放进玩家背包。
const SAND_BLOCKS = [
    'minecraft:sand',
    'minecraft:red_sand'
]

function collectSandDrops(event) {
    const player = event.player

    // 只处理真实玩家破坏；机器、爆炸等非玩家来源仍保持原版掉落。
    if (!player || player.isFake()) return

    const drops = event.items

    // 使用副本放入背包，避免改动事件仍持有的原始物品数据。
    for (let i = 0; i < drops.size(); i++) {
        const stack = drops.get(i)
        if (!stack.isEmpty()) player.give(stack.copy())
    }

    // 清空原掉落列表，避免同一批物品再次掉落到地面。
    // 背包已满时，player.give 会把放不下的部分正常掉在玩家脚边。
    event.itemEntities.clear()
}

SAND_BLOCKS.forEach(id => BlockEvents.drops(id, collectSandDrops))
