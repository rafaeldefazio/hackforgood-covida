exports.handler = function(context, event, callback) {
    
    const twilioClient = context.getTwilioClient();
    const SERVICE_SID = context.SYNC_SERVICE_SID || 'enter Sync Service Sid';
    const phone_number = event.UserIdentifier;
  
    const memory = JSON.parse(event.Memory);
    
    // Receber informações via collect e remember
    const news_type = memory.twilio.collected_data.cadastrar_receb_noticia_yes_no.answers.option.answer;
    const first_name = memory.first_name;
    
    console.log(news_type);
  
  

  
  // Árvore de decisão
  if (news_type == 1){

          console.log("Confirmar Recebimento " + news_type);

          response_obj = {
                "actions": [
                    {
                        "remember": {
                            "first_name": first_name,
                            "send_news": true, 
                        }
                    },
                    {
                        "redirect": "function://register_news_function"
                    }
                    
                ]
            };
            
            
            callback(null, response_obj);
          
          
          
          
          
  }  else{
          
          console.log("Cancelar Recebimento " + news_type);
          
          msg = "Poxa, que pena! 😟" +
            "\nMas se precisar estarei sempre aqui, caso mude de ideia basta me chamar!\nTe vejo em breve 😊";
            

        
         response_obj = {
                "actions": [
                    {
                      "say": msg  
                    },
                    {
                        "remember": {
                            "first_name": first_name,
                            "send_news": false, 
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