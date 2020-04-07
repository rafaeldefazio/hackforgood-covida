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
  let response = { get_started: true };
  
  const new_name = event.Field_NOME_Value;
  
    let phone = event.UserIdentifier;
    let re = new RegExp("[^:]*$");
    phone = phone.match(re)[0];
    
    
    var docData = {
        first_name: new_name
    };
    

    db.collection("Usuario").doc(phone).set(docData, { merge: true }).then(function() {
        console.log("Document successfully written!");
        
        
        
        respObj = {
        "actions": [
            {
                "say": "Nome alterado com sucesso. A partir de agora, vou te chamar de " + docData.first_name + " :)"
            }
	]
    };
    
    
    
    callback(null, respObj);
    
    
    
    });
    
    
};