ServerEvents.recipes(event => {
    const D = event.recipes.createdieselgenerators
    const C = event.recipes.create
    const V = event.recipes.vintageimprovements

    // 模具
    event.remove({ id: 'createdieselgenerators:cutting/bar_mold' })
    event.remove({ id: 'createdieselgenerators:cutting/chain_mold' })
    event.remove({ id: 'createdieselgenerators:cutting/bowl_mold' })
    event.remove({ id: 'createdieselgenerators:cutting/lines_mold' })

    // 空白模具 -> 柴油动力模具
    V.turning(
        [
            'createdieselgenerators:mold[createdieselgenerators:mold_type="createdieselgenerators:chain"]'
        ],
        ['kubejs:mold'],
        100
    )
    V.turning(
        [
            'createdieselgenerators:mold[createdieselgenerators:mold_type="createdieselgenerators:bowl"]'
        ],
        ['kubejs:mold'],
        100
    )
    V.turning(
        [
            'createdieselgenerators:mold[createdieselgenerators:mold_type="createdieselgenerators:lines"]'
        ],
        ['kubejs:mold'],
        100
    )
    V.turning(
        [
            'createdieselgenerators:mold[createdieselgenerators:mold_type="createdieselgenerators:bar"]'
        ],
        ['kubejs:mold'],
        100
    )

    // 铸造
    D.casting(
        'minecraft:gold_ingot',
        'createdieselgenerators:bar',
        Fluid.of('kubejs:molten_gold', 125)
    )
    V.curving(
            'createdieselgenerators:mold[createdieselgenerators:mold_type="kubejs:poop"]',
            ['kubejs:mold'],
            100
        )
        .mode(5)
        .itemAsHead('poopsky:golden_poop')
        .headDamage(0)
        .id('kubejs:curving/golden_poop')
    
})
