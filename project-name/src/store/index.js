import Vue from 'vue'
import Vuex from 'vuex'

// 전역변수 import
import state from './states'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})


