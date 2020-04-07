{
	"actions": [
		{
			"collect": {
				"name": "menu_app",
				"questions": [
					{
						"question": {
							"say": "1 – Como se prevenir\n2 –  Doutores respondem\n3 – Possiveis sintomas\n4 - Não é nehuma dessas!"
						},
						"name": "opcoes_menu",
						"type": "Twilio.NUMBER",
						"validate": {
							"allowed_values": {
								"list": [
									"1",
									"2",
									"3",
									"4"
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
						"uri": "function://validar_perg_corona"
					}
				}
			}
		}
	]
}