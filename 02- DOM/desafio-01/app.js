new Vue({
    el: '#desafio',
    data: {
        nome: 'Eduardo Viega',
        idade: 18,
        linkImagem: 'https://acopadomundo2022.com.br/img/mascote.png'
    },
    methods: {
        randomico: function(){
            return (Math.random()*1).toFixed()
        }
    }
})