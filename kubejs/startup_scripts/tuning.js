ItemEvents.modification(event => {
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
})
