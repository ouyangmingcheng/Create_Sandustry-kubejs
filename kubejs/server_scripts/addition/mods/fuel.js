
ServerEvents.recipes(event => {
    const D = event.recipes.createdieselgenerators
    const C = event.recipes.create
    const V = event.recipes.vintageimprovements
    event.custom({
        type: 'createaddition:liquid_burning',
        burn_time: 240,
        ingredients: [
            {
                type: 'neoforge:single',
                amount: 1000, 
                fluid: 'kaleidoscope_grilling:premium_chili_oil'
            }
        ],
        results: [],
        superheated: true
    }).id('csd:liquid_burning/premium_chili_oil_superheated')

    //生物乙醇
    event.remove({id:'createaddition:mixing/bioethanol'})
    C.mixing(
        Fluid.of('createaddition:bioethanol',300),
        [
            Fluid.of('createdieselgenerators:biodiesel',200),
            Fluid.of('createdieselgenerators:ethanol',100)
        ]
    )
})