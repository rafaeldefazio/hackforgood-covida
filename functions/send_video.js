exports.handler = function(context, event, callback) {
 
    const memory = JSON.parse(event.Memory);
    const video_id = memory.twilio.collected_data.listar_video_id.answers.video_id.answer;
    const listaVideos = memory.lista_videos;
    
      /* Your code goes here */
      response = {
    	"actions": [
    		{
    			"show": {
    				"images": [
    					{
    						"url": listaVideos[video_id-1].url
    					}
    				],
    				"body": ""
    			}
    		},
    		{
    		    "say": "Enviando vídeo..."
    		},
    		{
    		    "redirect": "task://algo_mais"
    		}
    	]
    }
    

  callback(null, response);
};