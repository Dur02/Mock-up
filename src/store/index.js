import { createStore } from 'vuex'

export default createStore({
  state: {
    load:0
  },
  mutations: {
    loading(){
      this.state.load = 1
    },
    loaded(){
      this.state.load = 0
    }
  },
  actions: {
  },
  modules: {
  }
})
