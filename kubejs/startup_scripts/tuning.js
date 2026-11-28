//数值平衡调整
ItemEvents.modification(event => {
  //基础工具数值
  event.modify('minecraft:wooden_sword', item => {
    item.setMaxDamage(5)
    item.setAttackDamage(0)
  })

  event.modify('minecraft:stone_sword', item => {
    item.setMaxDamage(13)
    item.setAttackDamage(1)
  })

  event.modify('minecraft:iron_sword', item => {
    item.setMaxDamage(25)
    item.setAttackDamage(2)
  })

  event.modify('minecraft:golden_sword', item => {
    item.setMaxDamage(3)
    item.setAttackDamage(0)
  })

  event.modify('minecraft:diamond_sword', item => {
    item.setMaxDamage(156)
    item.setAttackDamage(3)
  })

  event.modify('minecraft:netherite_sword', item => {
    item.setMaxDamage(203)
    item.setAttackDamage(4)
  })

  event.modify('minecraft:wooden_axe', item => {
    item.setMaxDamage(5)
    item.setAttackDamage(2)
  })

  event.modify('minecraft:stone_axe', item => {
    item.setMaxDamage(13)
    item.setAttackDamage(4)
  })

  event.modify('minecraft:iron_axe', item => {
    item.setMaxDamage(25)
    item.setAttackDamage(5)
  })

  event.modify('minecraft:golden_axe', item => {
    item.setMaxDamage(3)
    item.setAttackDamage(3)
  })

  event.modify('minecraft:diamond_axe', item => {
    item.setMaxDamage(156)
    item.setAttackDamage(5)
  })

  event.modify('minecraft:netherite_axe', item => {
    item.setMaxDamage(203)
    item.setAttackDamage(6)
  })

  event.modify('laowu:cat_sword', item => {
    item.setMaxDamage(156)
    item.setAttackDamage(3)
  })

  event.modify('laowu:cat_axe', item => {
    item.setMaxDamage(156)
    item.setAttackDamage(5)
  })

  event.modify('poopsky:spall_sword', item => {
    item.setMaxDamage(13)
    item.setAttackDamage(1)
  })

  event.modify('poopsky:spall_axe', item => {
    item.setMaxDamage(13)
    item.setAttackDamage(3)
  })

  event.modify('poopsky:milos_sword', item => {
    item.setMaxDamage(408)
    item.setAttackDamage(4)
  })
    event.modify('createdieselgenerators:hammer', item => {
    item.setMaxDamage(128)
    item.setAttackDamage(2)
  })
  //砂纸耐久
  event.modify('csd:iron_sandpaper', item => {
    item.maxDamage = 128
  })
  event.modify('csd:golden_sandpaper', item => {
    item.maxDamage = 1
  })
  //黄金锅铲耐久
  event.modify('csd:golden_kitchen_shovel', item => {
    item.maxDamage = 128
  })
})
