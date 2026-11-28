//流体注册
StartupEvents.registry('fluid', event => {
    event.create('csd:molten_gold', 'thick')
        .type(type => {
            type.descriptionId('fluid_type.csd.molten_gold')
                .temperature(1300)
                .lightLevel(12)
        })
        .stillTexture('csd:block/molten_gold_still')
        .flowingTexture('csd:block/molten_gold_flow')
        .tint(0xFFFFB000)

    event.create('csd:quicksand', 'thick')
        .type(type => {
            type.descriptionId('fluid_type.csd.quicksand')

        })
        .stillTexture('csd:block/quicksand')
        .flowingTexture('csd:block/quicksand')
        .tint(0xFFDACFA3)
        .noBucket()
        .noBlock()
})

