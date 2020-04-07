exports.handler = function(context, event, callback) {
    
    const memory = JSON.parse(event.Memory);
  
    //Decisão menu
    //1 – Como se prevenir\n2 –  Doutores respondem\n3 – Sobre a equipe\n4 - Não é nehuma dessas!
    const resp = memory.twilio.collected_data.menu_app.answers.opcoes_menu.answer;
    var direcionar = ""
        
    if(resp == 1){
        direcionar = "function://enviar_prevenir"
    }
    if(resp == 2){
        direcionar = "function://listar_videos"
    }
    if(resp == 3){
        direcionar = "function://sintomas"
    }
    if(resp == 4){
        direcionar = "task://sem_opcao"
    }
        respObj = {
        "actions": [
            {
                "redirect": direcionar 
            }
	]
    };
    
    callback(null, respObj);


    
    
    
};