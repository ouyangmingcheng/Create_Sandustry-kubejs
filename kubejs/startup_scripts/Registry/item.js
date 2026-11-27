//基础物品注册
StartupEvents.registry('item', event =>{
    //砂纸
    event.create('iron_sandpaper','create:sandpaper')
    event.create('golden_sandpaper','create:sandpaper')
    //构件
    event.create('void_mechanism')
    event.create('incomplete_void_mechanism','create:sequenced_assembly')
    event.create('useless_mechanism')    
    event.create('incomplete_useless_mechanism','create:sequenced_assembly')   
    event.create('ominous_mechanism')   
    event.create('incomplete_ominous_mechanism','create:sequenced_assembly')
    //序列组装中间产物
    event.create('incomplete_cardboard_box','create:sequenced_assembly')
    event.create('incomplete_cardboard_box_captured','create:sequenced_assembly')
    event.create("incomplete_mini_phantom","create:sequenced_assembly")
    event.create("incomplete_warp_stone","create:sequenced_assembly")
    event.create("incomplete_token","create:sequenced_assembly")
    event.create("incomplete_rainbow_toilet","create:sequenced_assembly")
    //普通物品
    event.create("bar_of_baba_meat")
    event.create("charged_amethyst_shard")
    event.create("pearl")
    event.create('mold')
    event.create("poop_ingot")
    event.create("golden_maggot")
    event.create("poop_hydraulic_engine")
    event.create("golden_egg")
    event.create("golden_cat")
    //序列组装（完整）
    event.create("golden_phi")
    event.create("incomplete_golden_phi","create:sequenced_assembly")
    event.create("seekdeep")
    event.create("incomplete_seekdeep","create:sequenced_assembly")
    
    //锻造模板
    event.create("plant_downgrade_smithing_template","smithing_template")
        .appliesTo("植物卡片")
        .addAppliesToSlotIcon("kubejs:item/plant_card_slot")
        .appliesToSlotDescription("放入植物卡片")
        .ingotIcon()
        .ingredients("粪便锭")
        .ingredientsSlotDescription("放入粪便锭")
    event.create("plant_upgrade_smithing_template","smithing_template")
        .appliesTo("植物卡片")
        .addAppliesToSlotIcon("kubejs:item/plant_card_slot")
        .appliesToSlotDescription("放入植物卡片")
        .ingotIcon()
        .ingredients("阳光锭")
        .ingredientsSlotDescription("放入阳光锭")

    
    
    //黄金锅铲
    const KitchenShovelItem = Java.loadClass('com.github.ysbbbbbb.kaleidoscopecookery.item.KitchenShovelItem')
    event.createCustom('golden_kitchen_shovel', () => new KitchenShovelItem())
})




