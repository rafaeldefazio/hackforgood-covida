const firebase = require('firebase');
require("firebase/firestore");


const firebaseConfig = {
// configuração firebase
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log('Initialized Firebase app');    
}
  
 
const db = firebase.firestore();




exports.handler = function(context, event, callback) {
    

 
  const memory = JSON.parse(event.Memory);
  let phone = event.UserIdentifier;
  let re = new RegExp("[^:]*$");
  phone = phone.match(re)[0];
  
  var docRef = db.collection("Usuario").doc(phone);
  greeting = get_greeting();

   
    
    docRef.get().then(function(doc) {
        
        
        
            
            // Se recebimento de notícias estiver ligado
            
            if (doc.data().send_news === true){
                redirect = "task://como_posso_ajudar";
                
                
                
                response_obj = {
            "actions": [
                {
                  "say":  "Olá, " + doc.data().first_name +", tudo bem? " + greeting  
                },
            	{
            	    "redirect": redirect
            	},
            	{
            	    "remember": {
            	        "first_name": doc.data().first_name
            	    }
            	}
            ]
            };
            
            
            
            callback(null, response_obj);
                
                
                
            // Se recebimento de notícias estiver desligado
            
            } else if (doc.data().send_news === false){
                redirect = "task://como_posso_ajudar_2";
                
                
                response_obj = {
                "actions": [
                    {
                      "say":  "Olá, " + doc.data().first_name +", tudo bem? " + greeting  
                    },
                	{
                	    "redirect": redirect
                	},
                	{
                	    "remember": {
                	        "first_name": doc.data().first_name
                	    }
                	}
                ]
                };
                
                
                
                callback(null, response_obj);
                
            // Se ainda não definido
            } else{
                
                redirect = "task://cadastrar_receb_noticia";
                
                
                
                response_obj = {
                "actions": [
                    {
                      "say":  "Olá, " + doc.data().first_name +", tudo bem? " + greeting  
                    },
                	{
                		"say": "Me chamo Maravida, sou uma atendente automática e quero te ajudar a receber informações e notícias verdadeiras direto no seu WhatsApp. Legal, né?"
                	},
                	{
                	    "redirect": redirect
                	},
                	{
                	    "remember": {
                	        "first_name": doc.data().first_name
                	    }
                	}
                ]
                };
                
                
                
                callback(null, response_obj);
                
            }
            
            
            
            
            
            
    }).catch(function(error) {
        
        
          response_obj = {
            "actions": [
            	{
            		"say": "Olá, tudo bem? " + greeting
            	},
            	{
            	  "say": "Me chamo Maravida, sou uma atendente automática e quero te ajudar a receber informações e notícias verdadeiras direto no seu WhatsApp. Legal, né?"  
            	},
            	{
            	    "redirect": "task://cadastrar_nome"
            	
            	},
            ]
            };
            
            
            callback(null, response_obj);






    });
    

    


    
    
    
    
  
};


function get_greeting(){
    var today = new Date()
    var horario_brasilia = -3
    var curHr = today.getHours() + horario_brasilia
    
    if (curHr < 5) {
      frase = 'Boa noite!'
    } else if (curHr < 12) {
        frase = 'Bom dia!'
    }else if (curHr < 18) {
       frase = 'Boa tarde!'
    } else {
       frase = 'Boa noite!'
    }
    
    
    return frase;
}