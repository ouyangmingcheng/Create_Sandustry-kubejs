//基础工具铸模配方脚本

const PRESS_TOOL_MOLDS = [
    {
        mold: 'sword',
        head: 'minecraft:blade_pottery_sherd'
    },
    {
        mold: 'pickaxe',
        head: 'minecraft:miner_pottery_sherd'
    },
    {
        mold: 'axe',
        head: 'minecraft:scrape_pottery_sherd'
    }
]

const TRAPDOOR_HEAD = {
    mold: 'trapdoor',
    head: 'minecraft:iron_trapdoor'
}

const PRESS_CURVING_HEADS = PRESS_TOOL_MOLDS.concat([TRAPDOOR_HEAD])

const PRESS_TOOL_MATERIALS = [
    { namespace: 'minecraft', prefix: 'wooden', ingredient: '#minecraft:planks' },
    { namespace: 'minecraft', prefix: 'stone', ingredient: '#minecraft:stone_tool_materials' },
    { namespace: 'minecraft', prefix: 'iron', ingredient: '#c:ingots/iron' },
    { namespace: 'minecraft', prefix: 'golden', ingredient: '#c:ingots/gold' },
    { namespace: 'minecraft', prefix: 'diamond', ingredient: '#c:gems/diamond' },
]

if (Platform.isLoaded('create_sa')) {
    PRESS_TOOL_MATERIALS.push(
        {
            namespace: 'create_sa',
            prefix: 'copper',
            ingredient: '#c:ingots/copper'
        },
        {
            namespace: 'create_sa',
            prefix: 'zinc',
            ingredient: '#c:ingots/zinc'
        },
        {
            namespace: 'create_sa',
            prefix: 'brass',
            ingredient: '#c:ingots/brass'
        },
        {
            namespace: 'create_sa',
            prefix: 'experience',
            ingredients: [
                'create_sa:zinc_handle',
                'create_sa:heap_of_experience'
            ]
        }
    )
}

if (Platform.isLoaded('poopsky')) {
    PRESS_TOOL_MATERIALS.push({
        namespace: 'poopsky',
        prefix: 'spall',
        ingredient: 'poopsky:spall',
        components: {
            sword: 'minecraft:enchantments={levels:{"minecraft:looting":1}}',
            pickaxe: 'minecraft:enchantments={levels:{"minecraft:fortune":1}}',
            axe: 'minecraft:enchantments={levels:{"minecraft:silk_touch":1}}'
        }
    })
}

const TRAPDOOR_RECIPES = []

const WOOD_TRAPDOOR_TYPES = [
    'oak',
    'spruce',
    'birch',
    'jungle',
    'acacia',
    'dark_oak',
    'mangrove',
    'cherry',
    'bamboo',
    'crimson',
    'warped'
]

WOOD_TRAPDOOR_TYPES.forEach(type => {
    TRAPDOOR_RECIPES.push({
        output: 'minecraft:' + type + '_trapdoor',
        ingredient: 'minecraft:' + type + '_planks'
    })
})

TRAPDOOR_RECIPES.push({
    output: 'minecraft:iron_trapdoor',
    ingredient: '#c:ingots/iron'
})

const COPPER_TRAPDOORS = [
    { output: 'copper_trapdoor', ingredient: 'copper_block' },
    { output: 'exposed_copper_trapdoor', ingredient: 'exposed_copper' },
    { output: 'weathered_copper_trapdoor', ingredient: 'weathered_copper' },
    { output: 'oxidized_copper_trapdoor', ingredient: 'oxidized_copper' },
    { output: 'waxed_copper_trapdoor', ingredient: 'waxed_copper_block' },
    { output: 'waxed_exposed_copper_trapdoor', ingredient: 'waxed_exposed_copper' },
    { output: 'waxed_weathered_copper_trapdoor', ingredient: 'waxed_weathered_copper' },
    { output: 'waxed_oxidized_copper_trapdoor', ingredient: 'waxed_oxidized_copper' }
]

COPPER_TRAPDOORS.forEach(entry => {
    TRAPDOOR_RECIPES.push({
        output: 'minecraft:' + entry.output,
        ingredient: 'minecraft:' + entry.ingredient
    })
})

if (Platform.isLoaded('create')) {
    TRAPDOOR_RECIPES.push(
        {
            output: 'create:framed_glass_trapdoor',
            ingredient: 'create:framed_glass'
        },
        {
            output: 'create:train_trapdoor',
            ingredient: 'create:railway_casing'
        }
    )
}

if (Platform.isLoaded('poopsky')) {
    TRAPDOOR_RECIPES.push(
        {
            output: 'poopsky:ginkgo_trapdoor',
            ingredient: 'poopsky:ginkgo_planks'
        },
        {
            output: 'poopsky:poop_trapdoor',
            ingredient: 'poopsky:poop_block'
        },
        {
            output: 'poopsky:primo_trapdoor',
            ingredient: 'poopsky:primo_planks'
        }
    )
}

if (Platform.isLoaded('supplementaries')) {
    TRAPDOOR_RECIPES.push(
        {
            output: 'supplementaries:gold_trapdoor',
            ingredient: '#c:ingots/gold'
        }
    )
}

ServerEvents.tags('item', event => {
    PRESS_CURVING_HEADS.forEach(entry => {
        event.add('vintageimprovements:curving_heads', entry.head)
    })
    event.add('vintageimprovements:curving_heads', 'poopsky:golden_poop')
})

ServerEvents.recipes(event => {
    const V = event.recipes.vintageimprovements
    const D = event.recipes.createdieselgenerators
    const C = event.recipes.create

    // Blank mold
    C.cutting(
        'csd:mold',
        'vintageimprovements:cast_iron_sheet'
    ).id('csd:cutting/blank_mold')

    // Create all curving molds, including the trapdoor mold.
    PRESS_CURVING_HEADS.forEach(entry => {
        const moldId = 'csd:' + entry.mold
        const moldItem = 'createdieselgenerators:mold[createdieselgenerators:mold_type="' + moldId + '"]'

        V.curving(
            [moldItem],
            ['csd:mold'],
            100
        )
        .mode(5)
        .itemAsHead(entry.head)
        .headDamage(0)
        .id('csd:curving/' + entry.mold + '_mold')
    })

    // Sword, pickaxe and axe compression recipes.
    PRESS_TOOL_MOLDS.forEach(tool => {
        const moldId = 'csd:' + tool.mold

        PRESS_TOOL_MATERIALS.forEach(material => {
            if (material.tools && material.tools.indexOf(tool.mold) === -1) {
                return
            }

            const outputBase = material.namespace + ':' + material.prefix + '_' + tool.mold
            const component = material.components && material.components[tool.mold]
            const outputId = component ? outputBase + '[' + component + ']' : outputBase
            const ingredients = material.ingredients || [
                '#c:rods/wooden',
                material.ingredient
            ]
            const materialId = material.namespace === 'minecraft'
                ? material.prefix
                : material.namespace + '_' + material.prefix

            D.compression_molding(
                [outputId],
                moldId,
                ingredients
            ).id('csd:compression_molding/' + materialId + '_' + tool.mold)
        })
    })

    // One matching material plus the trapdoor mold makes each trapdoor.
    TRAPDOOR_RECIPES.forEach(entry => {
        const recipeKey = entry.output
            .replace(':', '_')
            .replace('_trapdoor', '')

        D.compression_molding(
            [entry.output],
            'csd:trapdoor',
            [entry.ingredient]
        ).id('csd:compression_molding/trapdoor/' + recipeKey)
    })
})
