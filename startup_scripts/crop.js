StartupEvents.registry('block', event => {
    const thunderGrass = event.create('thunder_grass', 'kubejs:crop')
        .age(5, shape => shape.wheat())
        .farmersCanPlant()
        .item(item => item.texture('kubejs:item/thunder_grass_seeds'))

    for (let age = 0; age <= 5; age++) {
        thunderGrass.texture([String(age)], `kubejs:block/thunder_grass${age}`)
    }
})

