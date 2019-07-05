import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    "userLogin": sessionStorage.getItem('userLogin') ? JSON.parse(sessionStorage.getItem('userLogin')) : null
  },
  mutations: {
    
  },
  actions: {

  }
})
