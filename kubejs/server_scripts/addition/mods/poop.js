ServerEvents.recipes(event =>{

    const C = event.recipes.create
    const Sl = event.shapeless
    const S = event.shaped
    const D = event.recipes.createdieselgenerators
    const K = event.recipes.kaleidoscope_cookery
    const V =event.recipes.vintageimprovements

    //菜板切屎
    K.chopping_board(
        '4x createsandustry:mysterious_lump',
        'poopsky:poop',
        'kaleidoscope_cookery:poop',
        3
    )
    //九转大肠
    K.pot(
        'csd:chang',
        [
            'poopsky:poop',
            'poopsky:poop',
            'minecraft:porkchop',
            'minecraft:porkchop'
        ],
        'minecraft:bowl',
        200,
        9

    )
        K.flex_pot(
        'csd:chang',
        [
            'poopsky:poop',
            'minecraft:porkchop'
        ],
        'minecraft:bowl',
        200,
        9

    )
    //粪便汤
    K.stockpot(
        'poopsky:poop_soup',
        [
            'poopsky:maggots_seeds',
            'poopsky:poop',
            'poopsky:poop'
        ],
        'poopsky:urine_soup_base',
        60,
        'minecraft:bowl',
        'poopsky:block/urine_liquid_flowing',
        'poopsky:block/urine_liquid_maggots',
        -1182798393

    )
    C.filling(
        'poopsky:poop_soup',
        ['minecraft:bowl',Fluid.of('poopsky:urine',2000)]
    )
    //马桶
    event.remove({output:'poopsky:flush_toilet'})
    event.remove({output:'poopsky:golden_flush_toilet'})
    S(
        'poopsky:flush_toilet',
        [
            ' A ',
            'BCB'
        ],
        {
            A: 'minecraft:quartz_slab',
            B: 'minecraft:quartz_block',
            C: 'csd:poop_hydraulic_engine'
        }
    ).id('csd:kjs/poopsky_flush_toilet')
    S(
        'poopsky:golden_flush_toilet',
        [
            ' A ',
            'BCB'
        ],
        {
            A: 'supplementaries:gold_trapdoor',
            B: 'minecraft:gold_block',
            C: 'csd:ominous_mechanism'
        }
    ).id('csd:kjs/poopsky_golden_flush_toilet')
    //马桶车
    event.remove({id:'poopsky:flush_toilet_cart'})
    event.remove({id:'poopsky:golden_flush_toilet_cart'})
    S(
        'poopsky:flush_toilet_cart',
        [
            'BCB'
        ],
        {
            C: 'poopsky:flush_toilet',
            B: 'offroad:small_tire'
        }
    ).id('csd:kjs/poopsky_flush_toilet_cart')
    S(
        'poopsky:golden_flush_toilet_cart',
        [
            'BCB'
        ],
        {
            C: 'poopsky:golden_flush_toilet',
            B: 'offroad:small_tire'
        }
    ).id('csd:kjs/poopsky_golden_flush_toilet_cart')
    //天使方块<->天屎方块
    Sl(
        'angelus:angel_block',
        'poopsky:poopsky_block'
    ).id('csd:kjs/angelus_angel_block')
    Sl(
        'poopsky:poopsky_block',
        'angelus:angel_block'
    ).id('csd:kjs/poopsky_poopsky_block')
    //代币
    event.remove({id:'poopsky:token'})
    C.sequenced_assembly(

        [
            CreateItem.of('poopsky:token',1),
        ],
        'minecraft:nautilus_shell',
        [ 
           
            C.deploying('csd:incomplete_token',['csd:incomplete_token','poopsky:roundworm']),
            C.deploying('csd:incomplete_token',['csd:incomplete_token','jackseconomy:dollar_bill']),
            C.deploying('csd:incomplete_token',['csd:incomplete_token','minecraft:emerald']),
        ]
              
    )
    .transitionalItem('csd:incomplete_token')
    .loops(4)
    .id('csd:token')
    //温床的诅咒
    event.remove({id:'poopsky:seedbed_curse'})
    const $PotionFluidHandler = Java.loadClass(
        'com.simibubi.create.content.fluids.potion.PotionFluidHandler'
        )
    const fecalIncontinenceII = $PotionFluidHandler.getFluidFromPotionItem(
        Item.of(
            'minecraft:potion[minecraft:potion_contents={potion:"poopsky:strong_fecal_incontinence_potion"}]'
        )
    ).copyWithAmount(88)

    V.pressurizing(
        'poopsky:seedbed_curse',
        [
            '4x poopsky:poop_ball',
            '8x poopsky:chili_poop',
            '16x poopsky:poop',
            '8x poopsky:folium_sennae'
        ]
    )
        .secondaryFluidOutput(fecalIncontinenceII)
        .heatRequirement('heated')
    //粪便铸造
    D.casting(
        'poopsky:poop',
        'csd:poop',
        Fluid.of('poopsky:urine',888)
    )
    .heatRequirement('heated')
    //彩虹厕所
    event.remove({id:'poopsky:hard_toilet_from_rainbow'})
    C.sequenced_assembly(
        [
            CreateItem.of('poopsky:hard_toilet[poopsky:toilet_type="rainbow"]',0.3),
            CreateItem.of('poopsky:hard_toilet[poopsky:toilet_type="red_concrete"]',0.1),
            CreateItem.of('poopsky:hard_toilet[poopsky:toilet_type="orange_concrete"]',0.1),
            CreateItem.of('poopsky:hard_toilet[poopsky:toilet_type="yellow_concrete"]',0.1),
            CreateItem.of('poopsky:hard_toilet[poopsky:toilet_type="green_concrete"]',0.1),
            CreateItem.of('poopsky:hard_toilet[poopsky:toilet_type="cyan_concrete"]',0.1),
            CreateItem.of('poopsky:hard_toilet[poopsky:toilet_type="cyan_concrete"]',0.1),
            CreateItem.of('poopsky:hard_toilet[poopsky:toilet_type="purple_concrete"]',0.1)
        ],
        'poopsky:hard_toilet[poopsky:toilet_type="white_concrete"]',
        [
            C.deploying('csd:incomplete_rainbow_toilet',['csd:incomplete_rainbow_toilet','poopsky:fly[poopsky:fly_type="red"]']),
            C.deploying('csd:incomplete_rainbow_toilet',['csd:incomplete_rainbow_toilet','poopsky:fly[poopsky:fly_type="orange"]']),
            C.deploying('csd:incomplete_rainbow_toilet',['csd:incomplete_rainbow_toilet','poopsky:fly[poopsky:fly_type="yellow"]']),
            C.deploying('csd:incomplete_rainbow_toilet',['csd:incomplete_rainbow_toilet','poopsky:fly[poopsky:fly_type="green"]']),
            C.deploying('csd:incomplete_rainbow_toilet',['csd:incomplete_rainbow_toilet','poopsky:fly[poopsky:fly_type="cyan"]']),
            C.deploying('csd:incomplete_rainbow_toilet',['csd:incomplete_rainbow_toilet','poopsky:fly[poopsky:fly_type="blue"]']),
            C.deploying('csd:incomplete_rainbow_toilet',['csd:incomplete_rainbow_toilet','poopsky:fly[poopsky:fly_type="purple"]'])
        ]
    )
    .loops(1)
    .transitionalItem('csd:incomplete_rainbow_toilet')
    .id('csd:rainbow_toilet')
    //粪便锭
    S(
        'csd:poop_ingot',
        [
            'AAA',
            'ABB',
            'BB '
        ],
        {
            A: 'poopsky:poop',
            B: 'minecraft:copper_ingot'
        }
    ).id('csd:kjs/csd_poop_ingot')
    //水力引擎->粪力引擎
    Sl(
        'csd:poop_hydraulic_engine',
        [
            'create_sa:hydraulic_engine',
            'csd:poop_ingot',
            'csd:poop_ingot',
            'csd:poop_ingot'
        ]
    ).id('csd:kjs/csd_poop_hydraulic_engine')
    //繁育箱
    event.remove({id:'poopsky:breeding_chest'})
    S(
        'poopsky:breeding_chest',
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: 'poopsky:cut_poop_block',
            B: 'csd:poop_hydraulic_engine',
            C: 'minecraft:barrel'
        }
    ).id('csd:kjs/poopsky_breeding_chest')
    //苍蝇桶
    event.remove({id:'poopsky:fly_barrel'})
    C.mechanical_crafting(
        'poopsky:fly_barrel',
        [
            'A',
            'B',
            'B',
            'C',
            'D'
        ],
        {
            A: 'poopsky:maggots_block',
            B: 'poopsky:poop_block',
            C: 'csd:poop_hydraulic_engine',
            D: 'minecraft:barrel'
        }
    )
})
