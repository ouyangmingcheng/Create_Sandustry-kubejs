//幸运药水配方

const $RegisterBrewingRecipesEvent = Java.loadClass(
    'net.neoforged.neoforge.event.brewing.RegisterBrewingRecipesEvent'
)

NativeEvents.onEvent($RegisterBrewingRecipesEvent, event => {
    const $Potions = Java.loadClass('net.minecraft.world.item.alchemy.Potions')

    event.getBuilder().addMix($Potions.WATER, Items.EMERALD, $Potions.LUCK)
})
