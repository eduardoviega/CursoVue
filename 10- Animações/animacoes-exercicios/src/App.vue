<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar Mensagem</b-button>
		
		<transition name="fade" appear>
			<b-alert variant="success" show v-if="exibir">{{ msg }}</b-alert>
		</transition>

		<transition name="slide" type="animation" appear>
			<b-alert variant="warning" show v-show="exibir">{{ msg }}</b-alert>
		</transition>

		<transition
			enter-active-class="animated bounce"
			leave-active-class="animated shake" appear>
			<b-alert variant="danger" show v-show="exibir">{{ msg }}</b-alert>
		</transition>
		
		<hr>
		<select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</select>
		<transition :name="tipoAnimacao" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
			<b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
		</transition>

		<hr>
		<b-button @click="exibir2 = !exibir2">Alternar</b-button>
		<transition
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled">
			<div v-if="exibir2" class="caixa"></div>
		</transition>

		<hr>
		<div class="mb-4">
			<b-button variant="info" @click="componenteSelecionado = 'AlertaInfo'" class="mr-2">Info</b-button>
			<b-button variant="warning" @click="componenteSelecionado = 'AlertaAdvertencia'">Advertência</b-button>
		</div>
		<transition name="slide" mode="out-in">
			<component :is="componenteSelecionado"></component>	
		</transition>

		<hr>
		<b-button @click="adicionarAluno" class="mb-4">Adicionar Aluno</b-button>
		<transition-group name="slide">
			<b-list-group v-for="(aluno, i) in alunos" :key="i">
				<b-list-group-item @click="removerAluno(i)">{{ aluno }}</b-list-group-item>
			</b-list-group>
		</transition-group>
	</div>
</template>

<script>
import AlertaAdvertencia from './AlertaAdvertencia.vue'
import AlertaInfo from './AlertaInfo.vue'
export default {
	components: { AlertaAdvertencia, AlertaInfo },
	data(){
		return {
			alunos: ['Roberto', 'Julia', 'Teresa', 'Paulo'],
			msg: 'Uma mensagem de informação para o usuário!',
			exibir: true,
			exibir2: true,
			tipoAnimacao: 'slide',
			larguraBase: 0,
			componenteSelecionado: 'AlertaInfo'
		}
	},
	methods: {
		adicionarAluno(){
			const s = Math.random().toString(36).substring(2)
			this.alunos.push(s)
		},
		removerAluno(indice){
			this.alunos.splice(indice, 1)
		},
		animar(el,done,negativo){
			let rodada = 1
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase + 
					(negativo ? -rodada * 10 : rodada * 10)
				el.style.width = `${novaLargura}px`
				rodada++
				if(rodada > 30){
					clearInterval(temporizador)
					done()	
				}
			})
		},
		beforeEnter(el){
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done){
			this.animar(el, done, false)
		},
		// afterEnter(el){},
		// enterCancelled(){},
		beforeLeave(el){
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el, done){
			this.animar(el, done, true)
		},
		// afterLeave(el){},
		// leaveCancelled(){},
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
	font-size: 1.5rem;
}

.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background: lightgreen;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
}

@keyframes slide-in {
	from { transform: translateY(40px);}
	to { transform: translateY(0);}
}

@keyframes slide-out {
	from { transform: translateY(0);}
	to { transform: translateY(40px);}
}

.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.slide-leave-active {
	position: absolute;
	width: 100%;
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter, .slide-leave-to {
	opacity: 0;
}

.slide-move {
	transition: transform 1s;
}
</style>
