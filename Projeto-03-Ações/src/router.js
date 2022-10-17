import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import Portifolio from './components/portifolio/Portifolio.vue'
import Stocks from './components/stock/Stocks.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/portifolio', component: Portifolio },
        { path: '/stocks', component: Stocks },
    ]
})