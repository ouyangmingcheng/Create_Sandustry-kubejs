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
        'csd:golden_soup_beef',
        [
            'minecraft:brown_mushroom',
            '#c:crops/chilipepper',
            '#c:foods/raw_beef',
        ],
        'csd:molten_gold_soup_base',
        20*5,
        'minecraft:bowl',
        'csd:block/molten_gold_flow',
        'csd:block/molten_gold_still',
        -20480,
        -20480
    )
        K.stockpot(
        'csd:golden_soup_beef',
        [
            'minecraft:brown_mushroom',
            'kaleidoscope_cookery:green_chili',
            'kaleidoscope_cookery:red_chili',
            'minecraft:beef',
        ],
        'csd:molten_gold_soup_base',
        20*5,
        'minecraft:bowl',
        'csd:block/molten_gold_flow',
        'csd:block/molten_gold_still',
        -20480,
        -20480
    )
    //金苹果
    C.filling(
        'minecraft:golden_apple',
        ['minecraft:apple',Fluid.of('csd:molten_gold',500)]
    )
    //黄金树苗
    C.mixing(
        'createsandustry:golden_oak_sapling',
        [
            'minecraft:dead_bush',
            'createsandustry:sand_soul',
            Fluid.of('csd:molten_gold',500)
        ]
    )
    //镀金砂纸
    Sl(
        'csd:golden_sandpaper',
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
    ).id('csd:kjs/csd_golden_sandpaper')





})
