import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from './components/Form.vue'
import Tabla from './components/Tabla.vue'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        /* { path: '/', component: Binding }, */
        { path: '/', redirect: '/form' },
        { path: '/form', component: Form },
       { path: '/personas', component: Tabla },
      
    ]
})