exports.handler = function(context, event, callback) {
    
    const memory = JSON.parse(event.Memory);
  
    //Decisão menu
    //1 – Como se prevenir\n2 –  Doutores respondem\n3 – Sobre a equipe\n4 - Não é nehuma dessas!
    const resp = memory.twilio.collected_data.menu_algo.answers.opcao_algo.answer;
    respObj = {}
        
    if(resp == 2){
        respObj = {
            "actions": [
                {
                    "say": "Tudo bem! Qualquer coisa é só chamar 😉"
                }
            ]};
    }else{
         respObj = {
            "actions": [
                {
                    "redirect": "task://perguntas_corona"
                }
            ]};
    }
   

    
    callback(null, respObj);


    
    
    
};