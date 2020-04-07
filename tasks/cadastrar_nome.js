{
	"actions": [
		{
			"collect": {
				"name": "cadastrar_nome",
				"questions": [
					{
						"question": {
							"say": "Como você gostaria de ser chamado?"
						},
						"name": "first_name",
						"type": "Twilio.FIRST_NAME"
					}
				],
				"on_complete": {
					"redirect": {
						"method": "POST",
						"uri": "function://register_name"
					}
				}
			}
		},
		{
			"listen": true
		}
	]
}