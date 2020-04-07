exports.handler = function(context, event, callback) {
 
    const memory = JSON.parse(event.Memory);

     
      /* Your code goes here */
      response = {
    	"actions": [
    	    {
    	        "say": "A secretaria da saúde de Paraiba disponibilizou alguns informativos para a população se prevenir, da uma olhada:"
    	    },
    	    {
    	        "say": "Enviando imagem..."
    	    },
    		{
    		  //O que fazera
    		 
    			"show": {
    				"images": [
    					{
    						"url": "https://paraiba.pb.gov.br/diretas/secretaria-de-administracao/corona-2-1.jpg"
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