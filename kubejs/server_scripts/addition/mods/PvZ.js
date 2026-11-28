ServerEvents.recipes(event =>{

    const C = event.recipes.create
    const Sl = event.shapeless
    const S = event.shaped
    const D = event.recipes.createdieselgenerators
    const K = event.recipes.kaleidoscope_cookery
    const V =event.recipes.vintageimprovements

    C.mixing(
        'horrrs_pvz:chla_gem',
        [
            Fluid.of('createdieselgenerators:ethanol',100),
            'createaddition:biomass',
            'minecraft:emerald'
        ]
    )
    //阳光锭
    event.remove({id:'horrrs_pvz:sun_ingot_recipe'})
    S(
        'horrrs_pvz:sun_ingot',
        [
            'AAA',
            'ABB',
            'BB '
        ],
        {
            A: 'horrrs_pvz:sunshine_gem',
            B: 'minecraft:iron_ingot'
        }
    ).id('csd:kjs/horrrs_pvz_sun_ingot')
    //双发豌豆射手->豌豆射手
    event.recipes.minecraft.smithing_transform(
        'horrrs_pvz:peashooter_card',
        'csd:plant_downgrade_smithing_template',
        'horrrs_pvz:double_pea_shooter_card',
        'csd:poop_ingot'
    )
    //空白卡
    event.remove({id:'horrrs_pvz:plant_card_recipe'})
    event.recipes.minecraft.smithing_transform(
        'horrrs_pvz:plant_card',
        'csd:plant_downgrade_smithing_template',
        'horrrs_pvz:peashooter_card',
        'csd:poop_ingot'
    )
})
