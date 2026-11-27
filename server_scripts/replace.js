ServerEvents.recipes(event => {
    event.remove({output:'create:dough'})
    event.replaceInput(
        {},
        'create:dough',
        'kaleidoscope_cookery:raw_dough'
    )
    event.replaceInput(
        {},
        'kaleidoscope_cookery:flour',
        'create:wheat_flour'
    )
    event.replaceOutput(
        {},
        'kaleidoscope_cookery:flour',
        'create:wheat_flour'
    )
})
