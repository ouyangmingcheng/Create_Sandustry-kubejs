//森罗汤底注册
StartupEvents.postInit(() => {
    const SoupBaseManager = Java.loadClass(
        'com.github.ysbbbbbb.kaleidoscopecookery.crafting.soupbase.SoupBaseManager'
    )

    const ResourceLocation = Java.loadClass(
        'net.minecraft.resources.ResourceLocation'
    )

    // 熔融金汤底
    const moltenGoldBucket = Item.of('csd:molten_gold_bucket').item

    SoupBaseManager.registerFluidSoupBase(
        ResourceLocation.parse('csd:molten_gold_soup_base'),
        moltenGoldBucket,
        -20480
    )


    // 粪液汤底
    const urineBucket = Item.of('poopsky:urine_bucket').item

    SoupBaseManager.registerFluidSoupBase(
        ResourceLocation.parse('poopsky:urine_soup_base'),
        urineBucket,
        -1182798393
    )


    // 流沙汤底
    const quicksandBucket = Item.of('quicksand:quicksand_bucket').item
    const quicksandFluid = Fluid.getType(ResourceLocation.parse('csd:quicksand'))

    SoupBaseManager.registerFluidSoupBase(
        ResourceLocation.parse('csd:quicksand_soup_base'),
        quicksandBucket,
        quicksandFluid,
        -2437213 
    )

})
