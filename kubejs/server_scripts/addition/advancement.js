
BlockEvents.rightClicked(event => {
    const player = event.player
    const block = event.block
    const item = event.item

    if (!player || player.isFake()) return
    if (player.level.isClientSide()) return

    // 检查手持物品和目标菜板
    if (item.id !== 'poopsky:poop') return
    if (block.id !== 'kaleidoscope_cookery:chopping_board') return

    // 保存交互前的信息
    const pos = block.pos
    const hand = event.hand
    const beforeCount = item.count

    // 等待菜板执行原版交互逻辑
    event.server.scheduleInTicks(1, () => {
        // 确保原方块仍然是菜板
        const currentBlock = player.level.getBlock(pos)
        if (currentBlock.id !== 'kaleidoscope_cookery:chopping_board') return

        // 检查玩家对应手部的物品数量是否减少
        const afterStack = player.getItemInHand(hand)
        const afterCount = afterStack.isEmpty() ? 0 : afterStack.count

        // 没有消耗物品，说明放置未成功
        if (afterCount >= beforeCount) return

        // 成功放入屎，发放隐藏进度
        player.runCommandSilent(
            'advancement grant @s only csd:dirty_cutting_board'
        )
    })
})
