// 让已有存档中的旧注册 ID 解析到同一个物品、方块或流体。
StartupEvents.postInit(() => {
    const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
    const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')

    const registries = [BuiltInRegistries.ITEM, BuiltInRegistries.BLOCK, BuiltInRegistries.FLUID]
    registries.forEach(registry => {
        registry.keySet().forEach(id => {
            if (id.getNamespace() === 'csd') {
                registry.addAlias(ResourceLocation.fromNamespaceAndPath('kubejs', id.getPath()), id)
            }
        })
    })
})
