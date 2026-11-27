ServerEvents.recipes(event =>{

    const C = event.recipes.create
    const D = event.recipes.createdieselgenerators
    const Sl = event.shapeless
    const S = event.shaped
    const K = event.recipes.kaleidoscope_cookery
    const V =event.recipes.vintageimprovements
    //火把
    K.chopping_board(
        [
            'minecraft:stick',
            'minecraft:charcoal'
        ],
        'minecraft:torch',
        'kaleidoscope_cookery:torch',
        1
    )
    C.cutting(
        [
            'minecraft:stick',
            CreateItem.of('minecraft:charcoal',0.8)
        ],
        'minecraft:torch'
    )
    event.remove({output:'minecraft:torch'})
    Sl(
        'minecraft:torch',
        [
            'minecraft:stick',
            '#minecraft:coals'
        ]

    )
    //石头磨碎石
    C.crushing(
       [ CreateItem.of('poopsky:spall',0.2),
        'minecraft:cobblestone'],
        'minecraft:stone'
    )
    //铁粒
    event.remove({id:'create:splashing/gravel'})
    C.splashing(
        [
            CreateItem.of('minecraft:flint',0.12),
            CreateItem.of('minecraft:iron_nugget',0.01)
        ],
        'minecraft:gravel'
    )
    V.polishing(
        [ 
            'minecraft:iron_nugget',
            CreateItem.of('4x minecraft:iron_nugget',0.5)
        ],
        [
            'kubejs:iron_sandpaper'    
        ],
        20,
        1

    )
    //
    //强运
    const $PotionFluidHandler = Java.loadClass(
         'com.simibubi.create.content.fluids.potion.PotionFluidHandler'
    )
    const $Potions = Java.loadClass('net.minecraft.world.item.alchemy.Potions')
    // 幸运猫罐头：金胡萝卜 -> 1000 mB 幸运药水
    event.remove({ id: 'laowu:luck_cat_can_mixing' })
    event.remove({ id: 'laowu:golden_luck_cat_can_mixing' })

    C.mixing(
        'laowu:luck_cat_can',
        [
            'laowu:cat_can',
            $PotionFluidHandler.potionIngredient($Potions.LUCK, 1000)
        ]
    ).heated().id('laowu:luck_cat_can_mixing')

    C.mixing(
        'laowu:golden_luck_cat_can',
        [
            'laowu:golden_cat_can',
            $PotionFluidHandler.potionIngredient($Potions.LUCK, 1000)
        ]
    ).heated().id('laowu:golden_luck_cat_can_mixing')
 
    C.mixing(
        [
            'create:pulp',
            CreateItem.of('minecraft:enchanted_book[stored_enchantments={levels:{"jackseconomycompat:strong_fortune":1}}]',0.01),
            
        ],
        [
            Fluid.of('minecraft:water',250),
            // 必须用带 DataComponent 过滤的 SizedFluidIngredient，否则会退化成无药水内容的 create:potion。
            $PotionFluidHandler.potionIngredient($Potions.LUCK, 250),
            'minecraft:book'
        ]
    )
    //书->纸浆
    C.mixing(
        [
            'create:pulp'
        ],
        [
            'minecraft:book',
            Fluid.of('minecraft:water',250)
        ]
        
    )
    //书->皮革+纸
    C.cutting(
        [
            'minecraft:leather',
            '2x minecraft:paper'
        ],
        'minecraft:book'
    )
    //兔子脚
    C.mixing(
        [
            CreateItem.of('minecraft:rabbit_foot',1),
            //$PotionFluidHandler.potionIngredient($Potions.SWIFTNESS, 250)
        ],
        [
            $PotionFluidHandler.potionIngredient($Potions.LEAPING, 250),
            $PotionFluidHandler.potionIngredient($Potions.LUCK, 250)
        ]
    ).heatRequirement
    //皮革->兔子皮
    C.cutting(
        'minecraft:rabbit_hide',
        'minecraft:leather'
    )
    event.stonecutting(
        'minecraft:rabbit_hide',
        'minecraft:leather'
    )
    C.deploying(
        'minecraft:clock',
        [
            'create:golden_sheet',
            'minecraft:redstone'
        ]
    )

    V.centrifugation(
        [
            'minecraft:redstone',
            'minecraft:stone',
            CreateItem.of('horrrs_pvz:double_pea_shooter_card',0.1)
        ],
        [
            'minecraft:repeater'
        ],
        100,
        256
    )
    //动力矿车
    V.curving(
        'minecraft:minecart',
        [
            'create:iron_sheet'
        ],
        100,
        4
    )
    //红辣椒 + 秘制辣椒油 -> 龙息辣椒
    event.custom({
        type: 'laowu:infiltrating',
        heat_requirement: 'heated',
        ingredients: [
            { tag: 'c:crops/chilipepper' },
            {
                type: 'neoforge:single',
                amount: 1000,
                fluid: 'kaleidoscope_grilling:secret_chili_oil'
            }
        ],
        processing_time: 100,
        results: [
            { id: 'poopsky:dragon_breath_chili' }
        ]
    }).id('kubejs:dragon_breath_chili_infiltrating')
    event.remove({id: 'poopsky:sieve/cactus'})
    event.custom({
        type: 'laowu:infiltrating',
        heat_requirement: 'heated',
        ingredients: [
            { item: 'minecraft:cactus' },
            {
                type: 'neoforge:single',
                amount: 1000,
                fluid: 'kaleidoscope_grilling:premium_chili_oil'
            }
        ],
        processing_time: 100,
        results: [
            { id: 'poopsky:king_of_dragon_fruit' }
        ]
    }).id('kubejs:king_of_dragon_fruit_infiltrating')
    //冰箱
    event.remove({id:'kaleidoscope_chinesefood:freezer'})
    S(
        'kaleidoscope_chinesefood:freezer',
        [
            'ACA',
            'ABA',
            'ABA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: '#c:chests',
            C: 'createcraftedbeginning:breeze_cooler'
        }
    )
    //熬猪油
    K.stockpot(
        'kubejs:lard',
        [
            'minecraft:porkchop',
            'minecraft:porkchop',
            'minecraft:porkchop',
            'minecraft:porkchop',
            'minecraft:porkchop',
            'minecraft:porkchop',
            'minecraft:porkchop',
            'minecraft:porkchop',
            'minecraft:porkchop',
        ],
        'minecraft:water',
        120,
        'minecraft:flower_pot',
        'kaleidoscope_cookery:stockpot/default_cooking',
        'kaleidoscope_cookery:stockpot/oil_finished',
        0xFFF9E3BE,
        0xFFF9E3BE
    )

    // 猪油 -> 32 油，返还花盆
    event.shapeless(
        '32x kaleidoscope_cookery:oil',
        ['kubejs:lard']
    )
        .replaceIngredient({ item: 'kubejs:lard' }, 'minecraft:flower_pot')
        .id('kubejs:lard_to_oil')

    //方解石
    event.custom({
        type: 'laowu:infiltrating',
        heat_requirement: 'heated',
        ingredients: [
            { item: 'minecraft:stone' },
            {
                type: 'neoforge:single',
                amount: 1000,
                fluid: 'minecraft:milk'
            }
        ],
        processing_time: 100,
        results: [
            { id: 'create:limestone'}
        ]
    })
    //竹匾腐肉
    K.bamboo_tray(
        'minecraft:rotten_flesh',
        '#c:foods/raw_meat',
        'wetting'
    )
    K.bamboo_tray(
        'minecraft:rotten_flesh',
        '#c:raw_fishes',
        'wetting'
    )

    //冲压机
    event.remove({id:'vintageimprovements:craft/curving_press'})
    S(
        'vintageimprovements:curving_press',
        [
            "A",
            "B",
            "C"
        ],
        {
            A: 'create:shaft',
            B: 'create:andesite_casing',
            C: 'minecraft:iron_ingot'
        }
    )
    //动力冲压机
    S(
        'create:mechanical_press',
        [
            "BAB",
            "BBB",
            "BBB"
        ],
        {
            A: 'vintageimprovements:curving_press',
            B: 'minecraft:iron_ingot',
        }
    )
    //木棍->木板
    S(
        'minecraft:oak_planks',
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'minecraft:stick'
        }
    )

    //闪电磨烈焰粉
    C.crushing(
        [
            'minecraft:gunpowder',
            CreateItem.of('minecraft:blaze_powder',0.2)
        ],
        'touhou_little_maid:entity_placeholder[touhou_little_maid:recipe_id="spawn_lightning_bolt"]'
    )
    .id('kubejs:blaze_powder_from_lightning_bolt')
    //粑粑肉制作
    D.compression_molding(
        'kubejs:bar_of_baba_meat',
        'createdieselgenerators:bar',
        [
            '#c:foods/raw_pork',
            'kaleidoscope_grilling:sweet_potato_powder',
            '#c:eggs'
        ]
    )
    .id('kubejs:bar_of_baba_meat')
    K.steamer(
        '2x kubejs:baba_meat_slice',
        'kubejs:bar_of_baba_meat'
    )
    .id('kubejs:baba_meat_slice')
    K.flex_stockpot(
        'kubejs:xiang_wan',
        [
            'horrrs_pvz:pea_seedling',
            'kubejs:baba_meat_slice'
        ],
        'water'
    )
    .id('kubejs:flex_xiang_wan')
    K.stockpot(
        'kubejs:xiang_wan',
        [
            'horrrs_pvz:pea_seedling',
            'horrrs_pvz:pea_seedling',
            'horrrs_pvz:pea_seedling',
            'kubejs:baba_meat_slice',
            'kubejs:baba_meat_slice',
        ],
        'water'
    )
    .id('kubejs:xiang_wan')
    //充能紫水晶
    //珍珠->末影珍珠
    C.mixing(
        CreateItem.of('minecraft:ender_pearl',0.5),
        [
            'kubejs:pearl',
            Fluid.of('create_biotech:teleportation',1000)
        ]
    ).heatRequirement('heated')
    //火箭土豆
    C.deploying(
        'createsandustry:potato_rocket',
        [
            'minecraft:baked_potato',
            'supplementaries:bomb'
        ]
    )
    
})







