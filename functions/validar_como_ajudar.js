 
exports.handler = function(context, event, callback) {
    
    const memory = JSON.parse(event.Memory);
    const send_news = memory.send_news || false;
    
    var direcionar = "";
    //1 - Duvidas sobre corona
    //2 - Não quero receber mensagens
    
    
    const opcao = memory.twilio.collected_data.como_ajudar.answers.opcao_como_ajudar.answer
    if(opcao == 1){
        
        
        direcionar = "task://perguntas_corona"
        
        respObj = {
            "actions":[
            {
                "redirect": direcionar
            }
        ]
    };
    
    callback(null, respObj);
        
        
        
    }else{
        
         response_obj = {
                "actions": [
                    {
                        "remember": {
                            "send_news": !send_news, 
                        }
                    },
                    {
                        "redirect": "function://register_news_function"
                    }
                    
                ]
            };
            
            
            callback(null, response_obj);
        
        
    }
        
        


    
    
    
};