// 原生饮用监听见 startup_scripts/fate_echo.js；这里负责向 FTB Quests 提交完成状态。
FTBQuestsEvents.customTask('735F089ED4CB16A2', event => {
    event.setCheckTimer(20)
    event.setMaxProgress(1)
    event.setEnableButton(false)

    event.setCheck((task, player) => {
        if (player.getPersistentData().getCompound('PlayerPersisted')
            .getBoolean('kubejs_fate_echo_complete')) {
            task.addProgress(1)
            console.info('[宿命的回响] 已向 FTB Quests 提交完成进度。')
        }
    })
    console.info('[宿命的回响] FTB 自定义任务检测已注册。')
})
