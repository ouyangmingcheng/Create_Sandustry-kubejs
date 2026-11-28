//作物注册
StartupEvents.registry('block', event => {
    const thunderGrass = event.create('csd:thunder_grass', 'kubejs:crop')
        .age(5, shape => shape.wheat())
        .farmersCanPlant()
        .item(item => item.texture('csd:item/thunder_grass_seeds'))

    for (let age = 0; age <= 5; age++) {
        thunderGrass.texture([String(age)], `csd:block/thunder_grass${age}`)
    }
})

