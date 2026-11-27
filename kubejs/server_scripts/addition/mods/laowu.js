ServerEvents.recipes(event =>{

    const C = event.recipes.create
    const Sl = event.shapeless
    const K = event.recipes.kaleidoscope_cookery
    const V =event.recipes.vintageimprovements

    K.bamboo_tray(
        'laowu:dried_fish',
        '#c:foods/cooked_fish',
        'drying'
    )
})