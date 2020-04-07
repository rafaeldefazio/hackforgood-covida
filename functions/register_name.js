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
    const first_name = memory.twilio.collected_data.cadastrar_nome.answers.first_name.answer;
    let phone = event.UserIdentifier;
    let re = new RegExp("[^:]*$");
    phone = phone.match(re)[0];
    
    
    var docData = {
        first_name: first_name,
    };
    

    db.collection("Usuario").doc(phone).set(docData, { merge: true }).then(function() {
        console.log("Document successfully written!");
        
        
        
        respObj = {
        "actions": [
            {
                "say": "Vou lembrar do seu nome, " + first_name + " :)"
            },
            {
                "redirect": "task://cadastrar_receb_noticia"
            },
            {
            	    "remember": {
            	        "first_name": first_name
            	    }
            	}
	]
    };
    
    callback(null, respObj);
    
    
    
    });

    
    
    
};