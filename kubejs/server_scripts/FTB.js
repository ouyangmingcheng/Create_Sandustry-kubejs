FTBQuestsEvents.customTask('64351CC4C5279E3E', event => {
    
    event.setCheckTimer(20); 
  
    event.setMaxProgress(1);

  
    event.setCheck((task, player) => {
        
        if (player.hasEffect('createsandustry:sandifiction')) {
            
            task.addProgress(1);
        }
    });
});

