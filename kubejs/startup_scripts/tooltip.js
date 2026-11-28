//机械动力风Tooltip

CreateTooltipEvents.register(event => {
    event.add('csd:iron_sandpaper', 'STANDARD_CREATE')
    event.addWithKey(
        'csd:plant_downgrade_smithing_template',
        'STANDARD_CREATE',
        'item.csd.plant_downgrade_smithing_template'
    )
    event.addWithKey(
        'csd:plant_upgrade_smithing_template',
        'STANDARD_CREATE',
        'item.csd.plant_upgrade_smithing_template'
    )
})
