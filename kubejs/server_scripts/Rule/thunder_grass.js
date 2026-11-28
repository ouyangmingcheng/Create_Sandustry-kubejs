//收获雷霆草的概率掉落脚本
BlockEvents.drops('csd:thunder_grass', event => {
    const age = event.block.getProperties().get('age')
    if (String(age) !== '5') return

    if (event.level.random.nextFloat() < 0.1) {
        event.addItem(Item.of('touhou_little_maid:entity_placeholder[touhou_little_maid:recipe_id="spawn_lightning_bolt"]'))
    }
})
