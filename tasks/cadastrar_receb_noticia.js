{
	"actions": [
		{
			"say": "Agora fala para mim... você me procurou para receber essas notícias e informações no seu WhatsApp?!"
		},
		{
			"say": "Me responda sempre com o número que você escolher, assim eu entendo o que quer dizer:"
		},
		{
			"collect": {
				"name": "cadastrar_receb_noticia",
				"questions": [
					{
						"question": {
							"say": "1 - Quero começar a receber informações e notícias\n2 - Não entendi como funciona\n3 - Não quero, obrigado(a)!"
						},
						"name": "option",
						"type": "Twilio.NUMBER",
						"validate": {
							"allowed_values": {
								"list": [
									"1",
									"2",
									"3"
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
						"uri": "function://register_news"
					}
				}
			}
		}
	]
}