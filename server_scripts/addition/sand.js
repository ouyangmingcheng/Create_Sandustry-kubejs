ServerEvents.recipes(event =>{


    const C = event.recipes.create
    const Sl = event.shapeless
    const S = event.shaped
    const K = event.recipes.kaleidoscope_cookery
    const V =event.recipes.vintageimprovements

    //沙子磨砂配方
    C.sandpaper_polishing(
        
        CreateItem.of('minecraft:gold_nugget',0.20)
        ,
         'minecraft:sand'
        
    )
   //沙团->沙子
   Sl(
    'minecraft:sand',
    [
        '4x createsandustry:sand_ball'
    ]
   )
    
    event.remove({output:'create:sand_paper'})
    event.remove({output:'minecraft:sandstone'})
    //硬化沙子
    event.remove({output:'minecraft:suspicious_sand'})
    
    Sl(
        'createsandustry:hardened_sand',
        [
            'minecraft:sand',
            'minecraft:sand'
        ]
    )
    //砂纸
    Sl(
        'create:sand_paper[damage=7]',
        [
            'createsandustry:hardened_sand',
            'createsandustry:hardened_sand'
        ]
    )
    //铁砂纸
    Sl(
        'kubejs:iron_sandpaper',
        [
            'create:sand_paper',
            'create:iron_sheet'
        ]
    )
    //砂纸->纸
    C.splashing(
        [
            CreateItem.of('minecraft:paper',1),
            CreateItem.of('minecraft:gold_nugget',0.1)
        ],
        'create:sand_paper'
    )
    C.splashing(
        [
            CreateItem.of('minecraft:paper',1),
            CreateItem.of('minecraft:gold_nugget',0.35)
        ],
        'create:red_sand_paper'
    )

    //湿沙子砂带磨床
    V.polishing(
        CreateItem.of('2x minecraft:gold_nugget',0.6),
        'createsandustry:wet_sand',
        20,
        1
    )
    //沙团砂带磨床
    V.polishing(
        CreateItem.of('minecraft:gold_nugget',0.3),
        'createsandustry:sand_ball'
    )
    //砂岩
    Sl(
        'minecraft:sandstone',
        [
            'minecraft:sand',
            'minecraft:sand',
            'minecraft:sand',
            'minecraft:sand',
            'minecraft:sand',
            'minecraft:sand',
            'minecraft:sand',
            'minecraft:sand',
            'minecraft:sand'
        ]
    )
    //砂纸磨砂纸
    C.sandpaper_polishing(
        
        CreateItem.of('4x minecraft:gold_nugget',0.2)
        ,
         'create:sand_paper'
    )

    //石磨磨沙子
   // event.remove({id:'kaleidoscope_cookery:millstone/smooth_sandstone_from_sand'})
   event.remove({input:'createsandustry:wet_sand'})
    K.millstone(
        'minecraft:gold_nugget',
        'createsandustry:wet_sand'
    )

    //振动台湿沙子
    V.vibrating(
        [
            CreateItem.of('minecraft:gold_nugget',0.6),
            CreateItem.of('createsandustry:residue',0.8)
        ],
        'createsandustry:wet_sand'

    )
    //刀切砂岩
    K.chopping_board(
        [
            '2x minecraft:gold_nugget',
            '6x minecraft:sand'
        ],
        'minecraft:sandstone',
        'kaleidoscope_cookery:sandstone',
        4

    )
    //竹匾沙子
    K.bamboo_tray(
        'minecraft:sand',
        'createsandustry:wet_sand',
        'drying',
        800
    )
    K.bamboo_tray(
        'createsandustry:wet_sand',
        'minecraft:sand',
        'wetting',
        400
    )
    //海沙子面
    K.stockpot(
        'kubejs:sea_sand_noodles',
        [
            'kaleidoscope_cookery:raw_noodles',
            'kaleidoscope_cookery:raw_noodles',
            '#c:eggs',
            'kaleidoscope_cookery:lettuce'
        ],
        'kubejs:quicksand_soup_base'
    )
    K.flex_stockpot(
                'kubejs:sea_sand_noodles',
        [
            'kaleidoscope_cookery:raw_noodles',
            '#c:eggs',
            'kaleidoscope_cookery:lettuce'
        ],
        'kubejs:quicksand_soup_base'
    )
    //流沙

    C.filling(
        'quicksand:quicksand_bucket',
        ['minecraft:bucket', Fluid.of('kubejs:quicksand', 1000)]
    )

    C.emptying(
        [Fluid.of('kubejs:quicksand', 1000), 'minecraft:bucket'],
        'quicksand:quicksand_bucket'
    )

    //沙之魂
    V.centrifugation(
        [
            'minecraft:sand',
            'createsandustry:sand_soul'
        ],
        'minecraft:soul_sand',
        1000,
        128
    )
    V.vibrating(
        [
            'minecraft:sand',
            CreateItem.of('createsandustry:sand_soul',0.3)
        ],
        'minecraft:soul_sand',
        300
    )
    V.centrifugation(
        [
            'createsandustry:sand_ball',
             CreateItem.of('createsandustry:sand_soul',0.8)
        ],
        'createsandustry:living_sand',
        1000,
        128
    )
    //沙包
    K.steamer(
        'kubejs:sand_baozi',
        'createsandustry:sand_ball'
    )
    //石化沙子->安山岩
    Sl(
        'minecraft:andesite',
        [
            'createsandustry:petrified_sand',
            'createsandustry:petrified_sand',
            'createsandustry:petrified_sand',
            'createsandustry:petrified_sand'
        ]
    )
    //砂纸->砂带
    event.remove('vintageimprovements:craft/grinder_belt')
    S(
        'vintageimprovements:grinder_belt',
        [
            'AAA',
            'A A',
            'AAA'
        ],
        {
            A: 'create:sand_paper[unbreakable={}]'
        }
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


