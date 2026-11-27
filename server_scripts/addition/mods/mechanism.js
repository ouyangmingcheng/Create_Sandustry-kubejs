
ServerEvents.recipes(event =>{

    const C = event.recipes.create
    const Sl = event.shapeless
    const K = event.recipes.kaleidoscope_cookery
    const V =event.recipes.vintageimprovements
    //废物构件
    C.sequenced_assembly(

        [
            CreateItem.of('kubejs:void_mechanism',0.6),
            CreateItem.of('create:iron_sheet',0.1),
            CreateItem.of('minecraft:green_dye',0.1),
            CreateItem.of('minecraft:tnt',0.1)
        ],
        'create:iron_sheet',
        [ 
            C.filling('kubejs:incomplete_void_mechanism',['kubejs:incomplete_void_mechanism',Fluid.of('minecraft:lava',250)]),
            C.deploying('kubejs:incomplete_void_mechanism',['kubejs:incomplete_void_mechanism','kaleidoscope_cookery:trash_can']),
            C.deploying('kubejs:incomplete_void_mechanism',['kubejs:incomplete_void_mechanism','minecraft:cactus'])
        ]
              
    )
    .transitionalItem('kubejs:incomplete_void_mechanism')
    .loops(4)
    .id('kubejs:void_mechanism')
    //污秽构件
    C.sequenced_assembly(

        [
            CreateItem.of('kubejs:ominous_mechanism',0.7),
            CreateItem.of('poopsky:poop_soup',0.1),
            CreateItem.of('poopsky:pooburger_meat',0.1),
            CreateItem.of('poopsky:poodding',0.1)
        ],
        'poopsky:ominous_filthy_ingot',
        [ 
           
            C.deploying('kubejs:incomplete_ominous_mechanism',['kubejs:incomplete_ominous_mechanism','poopsky:shit']),
            C.deploying('kubejs:incomplete_ominous_mechanism',['kubejs:incomplete_ominous_mechanism','poopsky:chili_shit']),
            C.deploying('kubejs:incomplete_ominous_mechanism',['kubejs:incomplete_ominous_mechanism','poopsky:totem_of_unpooping']),
            C.deploying('kubejs:incomplete_ominous_mechanism',['kubejs:incomplete_ominous_mechanism','poopsky:token']),
            C.deploying('kubejs:incomplete_ominous_mechanism',['kubejs:incomplete_ominous_mechanism','poopsky:maggots_chunk_loader']),
            C.filling('kubejs:incomplete_ominous_mechanism',['kubejs:incomplete_ominous_mechanism',Fluid.of('poopsky:urine',1000)])
        ]
              
    )
    .transitionalItem('kubejs:incomplete_ominous_mechanism')
    .loops(4)
    .id('kubejs:ominous_mechanism')
    //无用构件
    C.sequenced_assembly(

        [
            CreateItem.of('kubejs:useless_mechanism',1),
            CreateItem.of('create:golden_sheet',0.09),
            CreateItem.of('create:brass_sheet',0.05),
            CreateItem.of('minecraft:enchanted_golden_apple',0.04),
            CreateItem.of('minecraft:beacon',0.01),
            CreateItem.of('minecraft:sculk_shrieker',0.01),
            CreateItem.of('minecraft:netherite_scrap',0.04),
            CreateItem.of('minecraft:diamond',0.08),
            CreateItem.of('minecraft:heart_of_the_sea',0.04),
            CreateItem.of('minecraft:armadillo_scute',0.03),
            CreateItem.of('createaddition:straw',0.03),
            CreateItem.of('minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:mending":1}}]',0.04),
            CreateItem.of('minecraft:enchanted_book[stored_enchantments={levels:{"jackseconomycompat:strong_fortune":1}}]',0.01),
        ],
        'minecraft:waxed_oxidized_cut_copper_slab',
        [ 
            C.deploying('kubejs:incomplete_useless_mechanism',['kubejs:incomplete_useless_mechanism','minecraft:poisonous_potato']),
            C.deploying('kubejs:incomplete_useless_mechanism',['kubejs:incomplete_useless_mechanism','minecraft:furnace_minecart']),
            C.deploying('kubejs:incomplete_useless_mechanism',['kubejs:incomplete_useless_mechanism','minecraft:clock'])
        ]
              
    )
    .transitionalItem('kubejs:incomplete_useless_mechanism')
    .loops(2)
    .id('kubejs:useless_mechanism')
    //黄金phi
    C.sequenced_assembly(
        [
            CreateItem.of('kubejs:golden_phi',0.618),
            CreateItem.of('createaddition:electrum_wire',0.382)
        ],
        'createaddition:gold_wire',
        [
            C.deploying('kubejs:incomplete_golden_phi',['kubejs:incomplete_golden_phi','horrrs_pvz:huge_sun']),
            C.pressing('kubejs:incomplete_golden_phi','kubejs:incomplete_golden_phi'),
            C.deploying('kubejs:incomplete_golden_phi',['kubejs:incomplete_golden_phi','horrrs_pvz:huge_sun']),
            C.pressing('kubejs:incomplete_golden_phi','kubejs:incomplete_golden_phi'),
            C.deploying('kubejs:incomplete_golden_phi',['kubejs:incomplete_golden_phi','horrrs_pvz:huge_sun']),
            C.deploying('kubejs:incomplete_golden_phi',['kubejs:incomplete_golden_phi','horrrs_pvz:huge_sun']),
            C.pressing('kubejs:incomplete_golden_phi','kubejs:incomplete_golden_phi'),
            C.deploying('kubejs:incomplete_golden_phi',['kubejs:incomplete_golden_phi','horrrs_pvz:sun']),
            C.deploying('kubejs:incomplete_golden_phi',['kubejs:incomplete_golden_phi','horrrs_pvz:sun']),
            C.deploying('kubejs:incomplete_golden_phi',['kubejs:incomplete_golden_phi','horrrs_pvz:sun']),
            C.pressing('kubejs:incomplete_golden_phi','kubejs:incomplete_golden_phi'),
            C.deploying('kubejs:incomplete_golden_phi',['kubejs:incomplete_golden_phi','horrrs_pvz:sun']),
            C.deploying('kubejs:incomplete_golden_phi',['kubejs:incomplete_golden_phi','horrrs_pvz:sun']),
            C.deploying('kubejs:incomplete_golden_phi',['kubejs:incomplete_golden_phi','horrrs_pvz:sun']),
            C.deploying('kubejs:incomplete_golden_phi',['kubejs:incomplete_golden_phi','horrrs_pvz:sun']),
            C.deploying('kubejs:incomplete_golden_phi',['kubejs:incomplete_golden_phi','horrrs_pvz:sun']),
            C.pressing('kubejs:incomplete_golden_phi','kubejs:incomplete_golden_phi'),
            C.deploying('kubejs:incomplete_golden_phi',['kubejs:incomplete_golden_phi','horrrs_pvz:small_sun']),
            C.deploying('kubejs:incomplete_golden_phi',['kubejs:incomplete_golden_phi','horrrs_pvz:small_sun']),
            C.deploying('kubejs:incomplete_golden_phi',['kubejs:incomplete_golden_phi','horrrs_pvz:small_sun']),
            C.deploying('kubejs:incomplete_golden_phi',['kubejs:incomplete_golden_phi','horrrs_pvz:small_sun']),
            C.deploying('kubejs:incomplete_golden_phi',['kubejs:incomplete_golden_phi','horrrs_pvz:small_sun']),
            C.deploying('kubejs:incomplete_golden_phi',['kubejs:incomplete_golden_phi','horrrs_pvz:small_sun']),
            C.deploying('kubejs:incomplete_golden_phi',['kubejs:incomplete_golden_phi','horrrs_pvz:small_sun']),
            C.deploying('kubejs:incomplete_golden_phi',['kubejs:incomplete_golden_phi','horrrs_pvz:small_sun']),
            C.cutting('kubejs:incomplete_golden_phi','kubejs:incomplete_golden_phi')
        ]
    )
    .loops(1)
    .transitionalItem('kubejs:incomplete_golden_phi')
    .id('kubejs:golden_phi')

    C.sequenced_assembly(
        [
            CreateItem.of('kubejs:seekdeep',1)
        ],
        '#minecraft:fishes',
        [
            C.deploying('kubejs:incomplete_seekdeep',['kubejs:incomplete_seekdeep','create_biotech:asurine_alloy']),
            C.deploying('kubejs:incomplete_seekdeep',['kubejs:incomplete_seekdeep','poopsky:token']),
            C.deploying('kubejs:incomplete_seekdeep',['kubejs:incomplete_seekdeep','kaleidoscope_cookery:cooked_rice']),
        ]
    )
    .loops(1)
    .transitionalItem('kubejs:incomplete_seekdeep')
    .id('kubejs:seekdeep')
})
