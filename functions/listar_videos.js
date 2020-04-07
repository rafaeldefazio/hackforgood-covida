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
    
    
    db.collection("Videos").get().then(function(querySnapshot) {
        
        let listaVideos = [];
        let menu = "Lista de vídeo:\n\n";
        
        querySnapshot.forEach(function(doc) {
            
            listaVideos.push({
                id: doc.id,
               url: doc.data().url,
               nome: doc.data().nome
            });
            
            menu += doc.id + ") " + doc.data().nome + "\n";
            
            
        });
        
        
        
        
        valores_permitidos = [];
        
        for (var i = 1; i <= listaVideos.length; i++){
            valores_permitidos.push(i.toString());
            
        }
        
     
     
        
        
     respObj = {
	"actions": [
	    {
	      "remember": {
	          "lista_videos": listaVideos,
	      }  
	    },
		{
			"collect": {
				"name": "listar_video_id",
				"questions": [
					{
						"question": {
							"say": menu
						},
						"name": "video_id",
						"type": "Twilio.NUMBER",
						"validate": {
							"allowed_values": {
								"list": valores_permitidos
							},
							"on_failure": {
								"messages": [
									{
										"say": "Por favor, insira um valor válido:"
									}
								],
								"repeat_question": true
							}
						}
					}
				],
				"on_complete": {
					"redirect": {
						"method": "POST",
						"uri": "function://send_video"
					}
					
				}
			}
		}
		
	]};
    
    callback(null, respObj);
        
        
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    
    

    
    
};