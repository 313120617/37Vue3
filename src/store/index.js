import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sex:'',
        hobby:[],
        txt:''
    },
    mutations: {
        doClick1(state,sex){
          state.sex=sex;
        },
        doClick2(state,hobby){
          state.hobby=hobby;
          },
        doClick3(state,txt){
          state.txt=txt;
        }
    },
    actions: {
    },
    modules: {
    }


})
