//食物注册（森罗物语食物注册器）
const $FoodBuilder = Java.loadClass(
    'dev.latvian.mods.kubejs.item.FoodBuilder'
)

const $FoodWithEffectsItem = Java.loadClass(
    'com.github.ysbbbbbb.kaleidoscopecookery.item.FoodWithEffectsItem'
)

StartupEvents.registry('item', event => {
    // 海沙子面
    const seaSandNoodlesFood = new $FoodBuilder()
        .nutrition(8)
        .saturation(0.4)
        .effect(
            'kaleidoscope_cookery:vitality',
            1200 * 8,
            0,
            1.0
        )
        .effect('createsandustry:sandification',1200*3,0,1.0)
        .alwaysEdible()
        .usingConvertsTo(Item.of('minecraft:bowl'))
        .build()

    event.createCustom(
        'csd:sea_sand_noodles',
        () => new $FoodWithEffectsItem(seaSandNoodlesFood)
    )

    // 大肠
    const changFood = new $FoodBuilder()
        .nutrition(12)
        .saturation(0.6)
        .effect('minecraft:fire_resistance', 1200 * 4, 0, 1.0)
        .effect('minecraft:blindness', 20, 0, 1.0)
        .effect('minecraft:darkness', 20, 0, 1.0)
        .effect('minecraft:nausea', 60, 0, 0.3)
        .effect('poopsky:fecal_incontinence', 1200 * 1, 0, 1.0)
        .alwaysEdible()
        .usingConvertsTo(Item.of('minecraft:bowl'))
        .build()

    event.createCustom(
        'csd:chang',
        () => new $FoodWithEffectsItem(changFood)
    )

    //金汤肥牛
    const goldenSoupBeefFood = new $FoodBuilder()
        .nutrition(8)
        .saturation(0.6)
        .effect('minecraft:fire_resistance', 1200 * 3, 0, 1.0)
        .alwaysEdible()
        .usingConvertsTo(Item.of('minecraft:bowl'))
        .build()

    event.createCustom(
        'csd:golden_soup_beef',
        () =>new $FoodWithEffectsItem(goldenSoupBeefFood)
    )

    //沙包
    const sandbaoziFood = new $FoodBuilder()
        .nutrition(4)
        .saturation(0.6)
        .effect('minecraft:absorption',1200*1.5,2,1.0)
        .effect('createsandustry:sandification',200*2,0,1.0)
        .alwaysEdible()
        .build()

    event.createCustom(
        'csd:sand_baozi',
        () =>new $FoodWithEffectsItem(sandbaoziFood)
    )
    //猪油
    const lardFood = new $FoodBuilder()
        .nutrition(15)
        .saturation(1.0)
        .effect('minecraft:nausea', 1200*3, 0, 1.0)
        .effect('minecraft:blindness', 20, 0, 1.0)
        .effect('minecraft:darkness', 20, 0, 1.0)
        .alwaysEdible()
        .build()

    event.createCustom(
        'csd:lard',
        () =>new $FoodWithEffectsItem(lardFood)
    )
    //香碗
    const xiangwanFood = new $FoodBuilder()
        .nutrition(6)
        .saturation(0.6)
        .effect('minecraft:haste', 1200*3, 1, 1.0)
        .effect('kaleidoscope_cookery:warmth', 1200*1, 0, 1.0)
        .alwaysEdible()
        .build()

    event.createCustom(
        'csd:xiang_wan',
        () =>new $FoodWithEffectsItem(xiangwanFood)
    )
    //粑粑肉
    const babameatFood = new $FoodBuilder()
        .nutrition(3)
        .saturation(0.2)
        .build()

    event.createCustom(
        'csd:baba_meat_slice',
        () =>new $FoodWithEffectsItem(babameatFood)
    )
})

