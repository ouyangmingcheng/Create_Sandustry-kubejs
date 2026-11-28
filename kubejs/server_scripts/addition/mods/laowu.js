ServerEvents.recipes(event =>{

    const C = event.recipes.create
    const Sl = event.shapeless
    const K = event.recipes.kaleidoscope_cookery
    const V =event.recipes.vintageimprovements
    //吞噬猫
    event.remove({id:'laowu:devouring_cat_infiltrating'})

    //晒鱼干
    K.bamboo_tray(
        'laowu:dried_fish',
        '#c:foods/cooked_fish',
        'drying'
    )

    //哈气收集网
    event.remove({ id: 'laowu:hissing_collector' })
    event.shaped('laowu:hissing_collector', [
        'GCG',
        'GWG',
        'AAA'
    ], {
        G: 'createcraftedbeginning:aerogel_block',
        C: '#c:ingots/copper',
        W: '#minecraft:wool',
        A: 'create:andesite_alloy'
    }).id('laowu:hissing_collector')

    //航空箱
    event.replaceInput(
        { id: 'laowu:cat_carrier' },
        'minecraft:iron_ingot',
        'createcraftedbeginning:airtight_sheet'
    )

    //猫咪引擎
    event.remove({ id: 'laowu:cat_engine' })
    event.shaped('laowu:cat_engine', [
        ' B ',
        'CEC',
        'SFS'
    ], {
        B: 'create:brass_block',
        C: 'laowu:cat_sheet',
        E: 'createcraftedbeginning:airtight_engine',
        F: 'create:fluid_tank',
        S: 'minecraft:polished_blackstone_slab'
    }).id('laowu:cat_engine')

    //猫饼真空处理
    V.vacuumizing('laowu:cat_fur', ['laowu:cat_pancake'])
        .secondaryFluidOutput(Fluid.of('laowu:hissing_gas', 250))
        .heated()
        .id('csd:cat_pancake_vacuumizing')

    //基金
    event.custom({
        type: 'laowu:infiltrating',
        heat_requirement: 'superheated',
        ingredients: [
            { item: 'create:golden_sheet' },
            {
                type: 'neoforge:single',
                amount: 1000,
                fluid: 'laowu:hissing_gas'
            }
        ],
        processing_time: 100,
        results: [
            { id: 'csd:golden_cat' }
        ]
    }).id('csd:golden_cat_infiltrating')
})
