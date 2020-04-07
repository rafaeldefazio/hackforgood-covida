exports.handler = function(context, event, callback) {
    

    let phone = event.UserIdentifier;
    let re = new RegExp("[^:]*$");
    phone = phone.match(re)[0];
    
    
    response = {
    	"actions": [
    		{
    			"collect": {
    				"name": "confirm_delete",
    				"questions": [
    					{
    						"question": {
    							"say": "Para confirmar a exclusão, digite seu número: *" + phone + "*. Se quiser cancelar, digite qualquer outra coisa."
    						},
    						"name": "phone",
    						"validate": {
							"allowed_values": {
								"list": [
									phone
								]
							},
							"on_failure": {
								"messages": [
									{
										"say": "Cancelando exclusão..."
									}
								],
								
								"repeat_question": false
							},
							"max_attempts": {
								"redirect": "task://collect_fallback",
								"num_attempts": 1
							}
    					}
    					}
    				],
    				"on_complete": {
    					"redirect": {
    						"method": "POST",
    						"uri": "function://delete_data_function"
    					}
    				}
    			}
    		}
    	]
    }

    
    
    callback(null, response);
    
    
};