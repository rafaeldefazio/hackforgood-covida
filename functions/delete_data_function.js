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
    
    
    const twilioClient = context.getTwilioClient();
   
 
    const memory = JSON.parse(event.Memory);
    
    const phone = memory.twilio.collected_data.confirm_delete.answers.phone.answer;
    
    console.log(event);
    
    
    db.collection('Usuario').doc(phone).delete().then(function() {
        
    response = {
    	"actions": [
    		{
    		    "say": "Seus dados foram excluídos com sucesso. Se precisar de qualquer coisa, só chamar!"
    		},
    	]
    }
    
    callback(null, response);
    
    
    
    
    }).catch(function(error) {
        console.error("Error removing document: ", error);
        
        
        response = {
    	"actions": [
    		{
    		    "say": "Ocorreu um erro ao excluir seus dados."
    		},
    	]
    }
    
    callback(null, response);
    
    });

    
    
    
    
};