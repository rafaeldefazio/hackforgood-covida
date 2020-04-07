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
    
    // Recebe parâmetros via remember
    const first_name = memory.first_name || null;
    const send_news_option = memory.send_news;
    
    // Recupera número de celular
    let phone = event.UserIdentifier;
    let re = new RegExp("[^:]*$");
    phone = phone.match(re)[0];
    
    
    // Escreve
    var docData = {
        send_news: send_news_option,
    };
    

    db.collection("Usuario").doc(phone).set(docData, { merge: true }).then(function() {
        console.log("Document successfully written!");
        
        if (docData.send_news === true){
            msg =  "Legal, " + first_name + " :)! Eu já te adicionei nos meus contatos e agora somos amigos, vou te enviar as notícias direto na nossa conversa.";
        } else {
            msg =  "Você não receberá nossas atualizações diárias! Se mudar de ideia, pode mudar essa configuração :)";
        }
    
    
    
        respObj = {
        "actions": [
            {
                "say": msg
            },
            {
                "redirect": "function://greeting"
            }
	    ]
            };
            
            
            
            callback(null, respObj);
            
            
            
    });
    


    
    
    
    

    
    
    
};