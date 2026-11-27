ServerEvents.recipes(event =>{

    const C = event.recipes.create
    const Sl = event.shapeless
    const K = event.recipes.kaleidoscope_cookery
    const V =event.recipes.vintageimprovements

    //金锭金块
    event.remove({output:'minecraft:gold_ingot'})
    event.remove({output:'minecraft:gold_block'})
    event.remove({output:'supplementaries:gold_trapdoor'})
    //金汤肥牛
    K.flex_stockpot(
        'kubejs:golden_soup_beef',
        [
            'minecraft:brown_mushroom',
            '#c:crops/chilipepper',
            '#c:foods/raw_beef',
        ],
        'kubejs:molten_gold_soup_base',
        20*5,
        'minecraft:bowl',
        'kubejs:block/molten_gold_flow',
        'kubejs:block/molten_gold_still',
        -20480,
        -20480
    )
        K.stockpot(
        'kubejs:golden_soup_beef',
        [
            'minecraft:brown_mushroom',
            'kaleidoscope_cookery:green_chili',
            'kaleidoscope_cookery:red_chili',
            'minecraft:beef',
        ],
        'kubejs:molten_gold_soup_base',
        20*5,
        'minecraft:bowl',
        'kubejs:block/molten_gold_flow',
        'kubejs:block/molten_gold_still',
        -20480,
        -20480
    )
    //金苹果
    C.filling(
        'minecraft:golden_apple',
        ['minecraft:apple',Fluid.of('kubejs:molten_gold',500)]
    )
    //黄金树苗
    C.mixing(
        'createsandustry:golden_oak_sapling',
        [
            'minecraft:dead_bush',
            'createsandustry:sand_soul',
            Fluid.of('kubejs:molten_gold',500)
        ]
    )
    //镀金砂纸
    Sl(
        'kubejs:golden_sandpaper',
        [
            'minecraft:gold_nugget',
            'minecraft:gold_nugget',
            'minecraft:gold_nugget',
            'minecraft:gold_nugget',
            'create:sand_paper',
            'minecraft:gold_nugget',
            'minecraft:gold_nugget',
            'minecraft:gold_nugget',
            'minecraft:gold_nugget',
        ]
    )

    //魔法脆角：最下排中间改为猫面团
    event.remove({id:'kaleidoscope_world_liquor:magic_crispy_corner'})
    event.shaped(
        'kaleidoscope_twilight:magic_crispy_corner',
        [
            'III',
            'ILI',
            'IDI'
        ],
        {
            I: 'minecraft:gold_nugget',
            L: 'minecraft:cookie',
            D: 'laowu:cat_dough'
        }
    ).id('kaleidoscope_world_liquor:magic_crispy_corner')



})
