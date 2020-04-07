{
	"actions": [
		{
			"collect": {
				"name": "menu_algo",
				"questions": [
					{
						"question": {
							"say": "Eu poderia ajudar em algo a mais?\n1 – Sim\n2 – Não"
						},
						"name": "opcao_algo",
						"type": "Twilio.NUMBER",
						"validate": {
							"allowed_values": {
								"list": [
									"1",
									"2"
								]
							},
							"on_failure": {
								"messages": [
									{
										"say": "Por favor, insira um valor válido"
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
						"uri": "function://validar_algo_mais"
					}
				}
			}
		}
	]
}