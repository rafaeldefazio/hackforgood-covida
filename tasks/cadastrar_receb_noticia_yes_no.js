{
	"actions": [
		{
			"collect": {
				"name": "cadastrar_receb_noticia_yes_no",
				"questions": [
					{
						"question": {
							"say": "O que você deseja?\n1 - Quero começar a receber informações e notícias\n2 - Não quero, obrigado(a)!"
						},
						"name": "option",
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
						"uri": "function://register_news_yes_no"
					}
				}
			}
		}
	]
}