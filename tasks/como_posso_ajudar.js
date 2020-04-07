{
	"actions": [
		{
			"say": "É a Maravida aqui de novo!\n\nComo posso te ajudar hoje? Me envie o número da sua opção como sempre:"
		},
		{
			"remember": {
				"send_news": true
			}
		},
		{
			"collect": {
				"name": "como_ajudar",
				"questions": [
					{
						"question": {
							"say": "1 – Tenho uma dúvida sobre o coronavírus\n2 – Não quero mais receber mensagens"
						},
						"name": "opcao_como_ajudar",
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
						"uri": "function://validar_como_ajudar"
					}
				}
			}
		}
	]
}