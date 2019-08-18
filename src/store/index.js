import Vue from 'vue'
import Vuex from 'vuex'
import Transcriptions from './Transcriptions/'

Vue.use(Vuex)

const modules = {
    transcriptions: Transcriptions
}

const store = new Vuex.Store({
    modules: modules
})
  
export default store