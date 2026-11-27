ServerEvents.recipes(e =>{
    //钱币堆
    e.remove({output:'jackseconomy:penny_stack'})
    e.remove({output:'jackseconomy:nickel_stack'})
    e.remove({output:'jackseconomy:dime_stack'})
    e.remove({output:'jackseconomy:quarter_stack'})
    e.remove({output:'jackseconomy:dollar_bill_stack'})
    e.remove({output:'jackseconomy:five_dollar_bill_stack'})
    e.remove({output:'jackseconomy:ten_dollar_bill_stack'})
    e.remove({output:'jackseconomy:twenty_dollar_bill_stack'})
    e.remove({output:'jackseconomy:fifty_dollar_bill_stack'})
    e.remove({output:'jackseconomy:hundred_dollar_bill_stack'})
    e.remove({output:'jackseconomy:thousand_dollar_bill_stack'})

    //
    e.remove({id:'vintageimprovements:curving/diamond'})
    //poopsky
    e.remove({id:'poopsky:mossy_cobblestone_from_compacting'})
    e.remove({id:'poopsky:sand_from_smelting_roundworm_block'})
})
//工具
ServerEvents.recipes(event => {
    const materials = [
        'wooden',
        'stone',
        'iron',
        'golden',
        'diamond',
        'netherite',
        'brass',
        'experience',
        'spall',
        'zinc',
        'copper'
    ]

    const tools = [
        'shovel',
        'pickaxe',
        'axe',
        'sword',
        'hoe'
    ]

    const mods = [
        'minecraft',
        'create_sa',
        'laowu',
        'poopsky'
    ]

    materials.forEach(material => {
        tools.forEach(tool => {
            mods.forEach(mod =>{
                const itemId = `${mod}:${material}_${tool}`
                if (Item.exists(itemId)) {
                    event.remove({
                        output: itemId
                    })
                }
            })
        })
    })
})
