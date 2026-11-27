ServerEvents.recipes(event =>{

    const C = event.recipes.create
    const Sl = event.shapeless
    const K = event.recipes.kaleidoscope_cookery
    const V =event.recipes.vintageimprovements
    //蜘蛛
    C.sequenced_assembly(
        [
        CreateItem.of('create_biotech:large_cardboard_box[custom_data={CapturedEntity:{id:"minecraft:spider"},CapturedEntityDescId:"entity.minecraft.spider"}]',0.7),
        CreateItem.of('minecraft:cobweb',0.1),
        CreateItem.of('minecraft:spider_eye',0.15),
        CreateItem.of('supplementaries:spider_head',0.05)
        ],
        'create_biotech:empty_large_cardboard_box',
        [
            C.deploying('kubejs:incomplete_cardboard_box',['kubejs:incomplete_cardboard_box','minecraft:red_dye']),
            C.deploying('kubejs:incomplete_cardboard_box',['kubejs:incomplete_cardboard_box','minecraft:black_dye']),
            C.deploying('kubejs:incomplete_cardboard_box',['kubejs:incomplete_cardboard_box','minecraft:string'])
        ]
    )
    .transitionalItem('kubejs:incomplete_cardboard_box')
    .loops(8)
    .id('kubejs:spider_deploying')
    //苦力怕
    C.sequenced_assembly(
        [
            CreateItem.of('create_biotech:large_cardboard_box[custom_data={CapturedEntity:{id:"minecraft:creeper"},CapturedEntityDescId:"entity.minecraft.creeper"}]',0.8),
            CreateItem.of('minecraft:tnt',0.15),
            CreateItem.of('minecraft:creeper_head',0.05)
        ],
        'create_biotech:empty_large_cardboard_box',
        [
            C.deploying('kubejs:incomplete_cardboard_box',['kubejs:incomplete_cardboard_box','minecraft:lime_dye']),
            C.deploying('kubejs:incomplete_cardboard_box',['kubejs:incomplete_cardboard_box','minecraft:gunpowder']),
            C.deploying('kubejs:incomplete_cardboard_box',['kubejs:incomplete_cardboard_box','minecraft:flint'])
        ]

    )
    .transitionalItem('kubejs:incomplete_cardboard_box')
    .loops(4)
    .id('kubejs:creeper_deploying')

    //猪灵
    C.sequenced_assembly(
        [
            CreateItem.of('create_biotech:large_cardboard_box[custom_data={CapturedEntity:{id:"minecraft:piglin"},CapturedEntityDescId:"entity.minecraft.piglin"}]',0.8),
            CreateItem.of('minecraft:piglin_head',0.05),
            CreateItem.of('minecraft:gold_ingot',0.1),
            CreateItem.of('create_biotech:large_cardboard_box[custom_data={CapturedEntity:{id:"createsandustry:qunyou"},CapturedEntityDescId:"entity.createsandustry.qunyou"}]',0.05)

        ],
        'create_biotech:empty_large_cardboard_box',
        [
            C.deploying('kubejs:incomplete_cardboard_box',['kubejs:incomplete_cardboard_box','minecraft:porkchop']),
            C.deploying('kubejs:incomplete_cardboard_box',['kubejs:incomplete_cardboard_box','minecraft:gilded_blackstone']),
            C.deploying('kubejs:incomplete_cardboard_box',['kubejs:incomplete_cardboard_box','createsandustry:sand_soul'])
        ]
    )
    .transitionalItem('kubejs:incomplete_cardboard_box')
    .loops(4)
    .id('kubejs:piglin_deploying')
    //兔子
    C.sequenced_assembly(
        [
            CreateItem.of('create_biotech:large_cardboard_box[custom_data={CapturedEntity:{id:"minecraft:rabbit"},CapturedEntityDescId:"entity.minecraft.rabbit"}]',0.8),
            CreateItem.of('minecraft:golden_carrot',0.05),
            CreateItem.of('minecraft:rabbit',0.15),

        ],
        'create_biotech:empty_large_cardboard_box',
        [
            C.deploying('kubejs:incomplete_cardboard_box',['kubejs:incomplete_cardboard_box','minecraft:rabbit_hide']),
            C.deploying('kubejs:incomplete_cardboard_box',['kubejs:incomplete_cardboard_box','minecraft:rabbit_foot']),
            C.deploying('kubejs:incomplete_cardboard_box',['kubejs:incomplete_cardboard_box','minecraft:carrot'])
        ]
    )
    .transitionalItem('kubejs:incomplete_cardboard_box')
    .loops(4)
    .id('kubejs:rabbit_deploying')
    //骷髅
    C.sequenced_assembly(
        [
            CreateItem.of('create_biotech:large_cardboard_box[custom_data={CapturedEntity:{id:"minecraft:skeleton"},CapturedEntityDescId:"entity.minecraft.skeleton"}]',0.9),
            CreateItem.of('create_biotech:large_cardboard_box[custom_data={CapturedEntity:{id:"minecraft:skeleton_horse"},CapturedEntityDescId:"entity.minecraft.skeleton_horse"}]',0.05),
            CreateItem.of('minecraft:skeleton_skull',0.05),

        ],
        'create_biotech:empty_large_cardboard_box',
        [
            C.deploying('kubejs:incomplete_cardboard_box',['kubejs:incomplete_cardboard_box','minecraft:bone']),
        ]
    )
    .transitionalItem('kubejs:incomplete_cardboard_box')
    .loops(12)
    .id('kubejs:skeleton_deploying')
})
