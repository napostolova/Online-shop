import Vue from 'vue'
import Vuex from 'vuex'

import { setItemInLocaleStorage } from '../utils/useLocaleStorage';
import productsModule from './products';


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
    },
    getters: {
        getUser(state) {
            return state.user;
        }
    },
    mutations: {
        setUser(state, newUser) {
            state.user = newUser
            setItemInLocaleStorage(state.user)
        }
    },
    actions: {
        async getNewUser(context, data) {
            context.commit('setUser', data)
        }
    },
    modules: {
      products:  productsModule
    }

})