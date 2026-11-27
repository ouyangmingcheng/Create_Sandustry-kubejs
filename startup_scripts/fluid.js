
StartupEvents.registry('fluid', event => {
    event.create('molten_gold', 'thick')
        .type(type => {
            type.descriptionId('fluid_type.kubejs.molten_gold')
                .temperature(1300)
                .lightLevel(12)
        })
        .stillTexture('kubejs:block/molten_gold_still')
        .flowingTexture('kubejs:block/molten_gold_flow')
        .tint(0xFFFFB000)

    event.create('quicksand', 'thick')
        .type(type => {
            type.descriptionId('fluid_type.kubejs.quicksand')

        })
        .stillTexture('kubejs:block/quicksand')
        .flowingTexture('kubejs:block/quicksand')
        .tint(0xFFDACFA3)
        .noBucket()
        .noBlock()
})

