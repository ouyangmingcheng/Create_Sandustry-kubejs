//基础物品注册
StartupEvents.registry('item', event =>{
    //砂纸
    event.create('csd:iron_sandpaper','create:sandpaper')
    event.create('csd:golden_sandpaper','create:sandpaper')
    //构件
    event.create('csd:void_mechanism')
    event.create('csd:incomplete_void_mechanism','create:sequenced_assembly')
    event.create('csd:useless_mechanism')
    event.create('csd:incomplete_useless_mechanism','create:sequenced_assembly')
    event.create('csd:ominous_mechanism')
    event.create('csd:incomplete_ominous_mechanism','create:sequenced_assembly')
    //序列组装中间产物
    event.create('csd:incomplete_cardboard_box','create:sequenced_assembly')
    event.create('csd:incomplete_cardboard_box_captured','create:sequenced_assembly')
    event.create("csd:incomplete_mini_phantom","create:sequenced_assembly")
    event.create("csd:incomplete_warp_stone","create:sequenced_assembly")
    event.create("csd:incomplete_token","create:sequenced_assembly")
    event.create("csd:incomplete_rainbow_toilet","create:sequenced_assembly")
    //普通物品
    event.create("csd:bar_of_baba_meat")
    event.create("csd:charged_amethyst_shard")
    event.create("csd:pearl")
    event.create('csd:mold')
    event.create("csd:poop_ingot")
    event.create("csd:golden_maggot")
    event.create("csd:poop_hydraulic_engine")
    event.create("csd:golden_egg")
    event.create("csd:golden_cat")
    //序列组装（完整）
    event.create("csd:golden_phi")
    event.create("csd:incomplete_golden_phi","create:sequenced_assembly")
    event.create("csd:seekdeep")
    event.create("csd:incomplete_seekdeep","create:sequenced_assembly")
    
    //锻造模板
    event.create("csd:plant_downgrade_smithing_template","smithing_template")
        .appliesTo("植物卡片")
        .addAppliesToSlotIcon("csd:item/plant_card_slot")
        .appliesToSlotDescription("放入植物卡片")
        .ingotIcon()
        .ingredients("粪便锭")
        .ingredientsSlotDescription("放入粪便锭")
    event.create("csd:plant_upgrade_smithing_template","smithing_template")
        .appliesTo("植物卡片")
        .addAppliesToSlotIcon("csd:item/plant_card_slot")
        .appliesToSlotDescription("放入植物卡片")
        .ingotIcon()
        .ingredients("阳光锭")
        .ingredientsSlotDescription("放入阳光锭")

    
    
    //黄金锅铲
    const KitchenShovelItem = Java.loadClass('com.github.ysbbbbbb.kaleidoscopecookery.item.KitchenShovelItem')
    event.createCustom('csd:golden_kitchen_shovel', () => new KitchenShovelItem())
})




