import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";


Vue.use(Vuex)

const urlUsuarios ='https://60a9668c20a64100173071ea.mockapi.io/people';
export default new Vuex.Store({
    state: {
       personas:[],
    },
    actions: {
       async addPersona({ commit },alumno){try {
        await axios.post(urlUsuarios, alumno,{'content-type':'application/json'});
        commit('addPersonas',alumno)  
       } catch (error) {
           alert(error.message)
       }
            
        },     
        async getPersonas({commit}){
            try {
                const {data} =  await axios.get(urlUsuarios);
                commit('getPersonas',data)   
            } catch (error) {
                alert(error.message)
            }
          
        },     
    },
    mutations: {
        getPersonas(state,data) {
        state.personas = data
        }, 
        addPersonas(state,data){
            state.personas.push(data)
        }
    }
})