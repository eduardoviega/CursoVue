<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
		<h3>Eduardo Viega</h3>
		<p>Sou Analista de Testes de Software na Leigado, no momento estou cursando Engenharia de Software na UTFPR-DV e sou Técnico em Informática para a Internet pelo IFSC.</p> 
		<p>Tenho conhecimento sobre as linguagens Java, C, HTML, CSS, JavaScript e Python, com prototipação pelo Figma e possuo um nível intermediário de Inglês.</p>
		<button v-quando:click="efeito">Alterar Estilo</button>
	</div>
</template>

<script>
export default {
	directives: {
		'quando': {
			bind(el, binding){
				el.onclick = function(e) {
					let nome = document.querySelector('h3')
					const textos = document.querySelectorAll('p')
					
					if (!binding.value) {
						nome.style.backgroundColor = 'blue'
						nome.style.color = 'white'
	
						textos.forEach(texto => {
							texto.style.backgroundColor = 'lightblue'
						});
					} else {
						nome.style.backgroundColor = 'white'
						nome.style.color = '#2c3e50'
	
						textos.forEach(texto => {
							texto.style.backgroundColor = 'white'
						});
					}
					binding.value = !binding.value
				}
			}
		}
	},
	data() {
		return {
			efeito: false,
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
