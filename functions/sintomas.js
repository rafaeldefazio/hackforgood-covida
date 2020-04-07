exports.handler = function(context, event, callback) {
 
    const memory = JSON.parse(event.Memory);

     
      /* Your code goes here */
      response = {
    	"actions": [
    	    {
    	        "say": "A BBC disponibilizou alguns informátivos para a população sobre os sintomas, da uma olhada:"
    	    },
    	    {
    	        "say": "Enviando imagem..."
    	    },
    		{
    		    
    		  //O que fazera
    		 
    			"show": {
    				"images": [
    					{
    						"url": "https://ichef.bbci.co.uk/news/410/cpsprodpb/0891/production/_111439120_sintomas_por_comparativa-covid-nc.png"
    					}
    				],
    				"body": ""
    			}
    		},
    		{
    		    "redirect":"task://algo_mais"    
    		}
    	]
    }

  
  callback(null, response);
};