// CDG 的 event.create 固定使用 kubejs 命名空间。
CDGEvents.molds(() => {
    const MoldType = Java.loadClass('com.jesz.createdieselgenerators.content.molds.MoldType')
    const MoldEventJS = Java.loadClass('com.jesz.createdieselgenerators.compat.kubejs.MoldEventJS')
    const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
    const molds = {
        sword: 'Sword Mold',
        pickaxe: 'Pickaxe Mold',
        axe: 'Axe Mold',
        trapdoor: 'Trapdoor Mold',
        poop: 'Poop Mold',
        wheat: 'Wheat Mold'
    }

    Object.keys(molds).forEach(path => {
        const id = ResourceLocation.fromNamespaceAndPath('csd', path)
        if (MoldType.findById(id) === null) {
            new MoldType(id)
        }
        // CDG 用这张表生成铸模的模型和默认译名。
        MoldEventJS.addedMolds.put(id, molds[path])
    })
})
