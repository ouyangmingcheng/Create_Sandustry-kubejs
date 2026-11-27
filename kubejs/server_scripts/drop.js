// 珍珠加入钓鱼宝藏池，权重为 1，抽中时获得 1 颗。
LootJS.lootTables(event => {
    event.getLootTable('minecraft:gameplay/fishing/treasure')
        .firstPool()
        .addEntry(LootEntry.of('kubejs:pearl').withWeight(1).setCount(1))
})
