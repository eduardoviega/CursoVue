new Vue({
	el: '#desafio',
	data: {
		alternar: true,
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livro: {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		},
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		},
		disciplinas: [
			{codigo: 'AO24S', nome: 'Análise Orientada A Objetos'},
			{codigo: 'BD24S', nome: 'Banco De Dados 2'},
			{codigo: 'OI24S', nome: 'Oficina De Integração 1'},
			{codigo: 'PW24S', nome: 'Programação Para Web 1'},
			{codigo: 'RS24S', nome: 'Requisitos De Software'},
		]
		
	}
});
