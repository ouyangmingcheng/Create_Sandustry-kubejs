ServerEvents.recipes(event =>{
    
    event.remove({id:'createphantom:mini_phantom'})

    const create = event.recipes.create
    const incomplete = 'csd:incomplete_mini_phantom'

    create.sequenced_assembly(['createphantom:mini_phantom'],

    'create_biotech:large_cardboard_box[custom_data={CapturedEntity:{id:"minecraft:phantom"},CapturedEntityDescId:"entity.minecraft.phantom"}]',

    [
        create.deploying(incomplete,[incomplete,'minecraft:ender_eye']),
        create.deploying(incomplete,[incomplete,'minecraft:compass']),
        create.filling(incomplete,[incomplete,Fluid.of('create_biotech:teleportation', 250)])

    ])
    
    .transitionalItem(incomplete)
    .loops(1)

     create.sequenced_assembly(['createphantom:mini_phantom'],

    'create_biotech:large_cardboard_box[custom_data={CapturedEntity:{id:"occultism:possessed_phantom"},CapturedEntityDescId:"entity.occultism.possessed_phantom"}]',

    [
        create.deploying(incomplete,[incomplete,'minecraft:ender_eye']),
        create.deploying(incomplete,[incomplete,'minecraft:compass']),
        create.filling(incomplete,[incomplete,Fluid.of('create_biotech:teleportation', 250)])

    ])
    
    .transitionalItem(incomplete)
    .loops(1)

})