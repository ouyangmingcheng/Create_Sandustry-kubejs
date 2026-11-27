// Create: Biotech 2.0.0-beta.3: 苍蝇躯干 + 猪灵头部随机间隔产出金蛆。
// 对齐 PoopSky FlyEntity 的 nextInt(6000) + 6000：6000～11999 游戏刻。
// 20 TPS 时约 5～10 分钟；每轮重新随机，不受 randomTickSpeed 控制。
const GOLDEN_MAGGOT_MIN_INTERVAL_TICKS = 6000
const GOLDEN_MAGGOT_MAX_INTERVAL_TICKS = 11999
const GOLDEN_MAGGOT_COUNT = 1

BionicTraitEvents.definitions(event => {
    event.register('kubejs:golden_maggot_production', {
        schema_version: 1,
        display: {
            name: { translate: 'trait.kubejs.golden_maggot_production' },
            description: {
                translate: 'trait.kubejs.golden_maggot_production.description',
                with: [
                    String(GOLDEN_MAGGOT_MIN_INTERVAL_TICKS / 20),
                    String(GOLDEN_MAGGOT_MAX_INTERVAL_TICKS / 20),
                    String(GOLDEN_MAGGOT_COUNT)
                ]
            }
        },
        scopes: ['whole_body'],
        value_kind: 'ability',
        inheritance: { type: 'presence' },
        automatic_detection: false,
        values: {
            'poopsky:fly': true,
            'minecraft:piglin': true
        },
        // 只选择两个明确绑定的模型部位，不接受任意苍蝇或猪灵组织。
        carrier: { roles: ['#fly_body', '#piglin_head'] },
        parts: {
            fly_body: {
                name: { translate: 'part.kubejs.golden_maggot.fly_body' },
                include_children: false,
                bindings: { 'poopsky:fly': ['body'] }
            },
            piglin_head: {
                name: { translate: 'part.kubejs.golden_maggot.piglin_head' },
                include_children: false,
                bindings: { 'minecraft:piglin': ['head'] }
            }
        },
        gameplay: {
            anatomy: {
                // body 将不同供体的部位作为同一组合检查；内层数组要求两者同时存在。
                group_by: 'body',
                any_of: [['#fly_body', '#piglin_head']]
            },
            production: [{
                // 新的计时 ID 使已有组合不再沿用旧的 1200 刻倒计时。
                id: 'kubejs:golden_maggot_production_random',
                item: 'kubejs:golden_maggot',
                min: GOLDEN_MAGGOT_COUNT,
                max: GOLDEN_MAGGOT_COUNT,
                min_interval_ticks: GOLDEN_MAGGOT_MIN_INTERVAL_TICKS,
                max_interval_ticks: GOLDEN_MAGGOT_MAX_INTERVAL_TICKS
            }]
        }
    })
})
