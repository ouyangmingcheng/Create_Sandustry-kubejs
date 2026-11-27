ServerEvents.tags('item', event => {
    event.add('create:upright_on_belt', 'quicksand:quicksand_bucket')
    event.add('kaleidoscope_cookery:kitchen_shovel', 'kubejs:golden_kitchen_shovel')
    event.add('kaleidoscope_cookery:kitchen_shovels', 'kubejs:golden_kitchen_shovel')
    event.add('minecraft:shovels', 'kubejs:golden_kitchen_shovel')
})

ServerEvents.tags('fluid', event => {
    event.add('c:plantoil', 'kaleidoscope_grilling:canola_oil')
    event.add('c:plantoil', 'kaleidoscope_grilling:flowing_canola_oil')
    event.add('c:plantoil', 'kaleidoscope_grilling:secret_chili_oil')
    event.add('c:plantoil', 'kaleidoscope_grilling:flowing_secret_chili_oil')
})
