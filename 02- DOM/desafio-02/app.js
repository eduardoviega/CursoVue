new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibir: function() {
            alert('aaaaAAAAAAAAAA!!!!!!!!!!!!!')
        },
        guardaData: function(event) {
            this.valor = event.target.value
        }
    }
})