CreateTooltipEvents.register(event => {
    event.add('kubejs:iron_sandpaper', 'STANDARD_CREATE')
    event.addWithKey(
        'kubejs:plant_downgrade_smithing_template',
        'STANDARD_CREATE',
        'item.kubejs.plant_downgrade_smithing_template'
    )
    event.addWithKey(
        'kubejs:plant_upgrade_smithing_template',
        'STANDARD_CREATE',
        'item.kubejs.plant_upgrade_smithing_template'
    )
})
