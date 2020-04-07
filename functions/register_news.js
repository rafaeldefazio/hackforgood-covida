exports.handler = function(context, event, callback) {
    
    const twilioClient = context.getTwilioClient();
    const SERVICE_SID = context.SYNC_SERVICE_SID || 'enter Sync Service Sid';
    const phone_number = event.UserIdentifier;
  
    const memory = JSON.parse(event.Memory);
    const news_type = memory.twilio.collected_data.cadastrar_receb_noticia.answers.option.answer;
    const first_name = memory.first_name;
      
  
  if (news_type==1){

          console.log("Receber notícias");
    
          
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
          
          
  } else if(news_type == 2){
      
 
          console.log("Responder como funciona");
          console.log(memory);
          
          msg = first_name + ", faço parte do projeto COVIDA, nós procuramos enviar para as pessoas notícias confiáveis e de extrema importância, no momento focadas no coronavírus, assim você pode estar encaminhando para família e amigos sem se preocupar se é ou não verdade, tudo direto do seu WhatsApp de forma gratuita!" +
          "\nPara fazer parte é bem simples, basta me responder essa mensagem com o número “1” ou, caso não queira, basta me enviar o número “2” que tudo bem também, você pode me chamar novamente depois caso mude de ideia!";
          redirect = "task://cadastrar_receb_noticia_yes_no";
          
          
          response_obj = {
                "actions": [
                    {
                        "say": msg
                    },
                    {
                        "redirect": redirect
                    },
                    {
                        "remember": {
                            "first_name": first_name
                        }
                    }
                    
                ]
            };
            
            
            
    
    

              callback(null, response_obj);
          
            
        
        

    } else{
          
          console.log("Cancelar Recebimento");
          
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