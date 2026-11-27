ServerEvents.recipes(event => {
    // 嗨棒只保留橙色材料 + 飞天茅台 + 金色材料。
    event.remove({ id: 'kaleidoscope_world_liquor:shaker/highball' })
    event.remove({ id: 'kaleidoscope_world_liquor:shaker/highball1' })

    event.custom({
        type: 'kaleidoscope_tavern:shaker',
        ingredients: [
            { tag: 'kaleidoscope_tavern:cocktail_ingredient_orange' },
            { item: 'kaleidoscope_world_liquor:maotai' },
            { tag: 'kaleidoscope_tavern:cocktail_ingredient_gold' }
        ],
        result: {
            id: 'kaleidoscope_world_liquor:highball',
            count: 1
        }
    }).id('kaleidoscope_world_liquor:shaker/highball1')

    // 飞天茅台额外加入末地石粉末和羽毛；酒桶满批为每种原料 16 个。
    event.remove({ id: 'kaleidoscope_world_liquor:barrel/maotai' })
    event.custom({
        type: 'kaleidoscope_tavern:barrel',
        carrier: {
            item: 'kaleidoscope_tavern:empty_bottle'
        },
        fluid: 'minecraft:water',
        ingredients: [
            { item: 'minecraft:wheat' },
            { item: 'kaleidoscope_cookery:rice_panicle' },
            { item: 'aeronautics:end_stone_powder' },
            { item: 'minecraft:feather' }
        ],
        result: {
            id: 'kaleidoscope_world_liquor:maotai'
        },
        unit_time: 2400
    }).id('kaleidoscope_world_liquor:barrel/maotai')

    // 长岛冰茶只使用可乐、冰红茶和格瓦斯，通过 KubeJS Kaleidoscope 接口注册。
    event.remove({ id: 'kaleidoscope_world_liquor:shaker/long_island_iced_tea' })
    event.remove({ id: 'kaleidoscope_world_liquor:shaker/long_island_iced_tea1' })
    event.recipes.kaleidoscope_tavern.shaker(
        'kaleidoscope_world_liquor:long_island_iced_tea',
        [
            'kaleidoscope_world_liquor:cola',
            'smc:ice_tea',
            'kaleidoscope_world_liquor:kwas_chlebowy'
        ]
    ).id('kaleidoscope_world_liquor:shaker/long_island_iced_tea')
})
