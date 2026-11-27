ServerEvents.recipes(event => {

    const create = event.recipes.create
    const incomplete = 'kubejs:incomplete_warp_stone'
    event.remove({id:'waystones:warp_stone'})

    create.sequenced_assembly(['waystones:warp_stone'],
    'minecraft:ender_pearl',
    [
        create.filling(incomplete,[incomplete,Fluid.of('create_biotech:teleportation', 250)]),
        create.deploying(incomplete,[incomplete,'minecraft:emerald']),
        create.cutting(incomplete,incomplete)
    
    ])
    .transitionalItem(incomplete)
    .loops(1)
})