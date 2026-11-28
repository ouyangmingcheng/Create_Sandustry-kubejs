//黄金锅铲的铲子标签和锅铲标签
ServerEvents.tags('item', event => {
    event.add('create:upright_on_belt', 'quicksand:quicksand_bucket')
    event.add('kaleidoscope_cookery:kitchen_shovel', 'csd:golden_kitchen_shovel')
    event.add('kaleidoscope_cookery:kitchen_shovels', 'csd:golden_kitchen_shovel')
    event.add('minecraft:shovels', 'csd:golden_kitchen_shovel')
})
//辣椒油的燃料标签
ServerEvents.tags('fluid', event => {
    event.add('c:plantoil', 'kaleidoscope_grilling:canola_oil')
    event.add('c:plantoil', 'kaleidoscope_grilling:flowing_canola_oil')
    event.add('c:plantoil', 'kaleidoscope_grilling:secret_chili_oil')
    event.add('c:plantoil', 'kaleidoscope_grilling:flowing_secret_chili_oil')
})
