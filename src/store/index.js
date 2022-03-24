import Vue from 'vue'
import Vuex from 'vuex'

import {
    setItemInLocaleStorage
} from '../utils/useLocaleStorage';
import productsModule from './products';


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
        notifications: []
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        showNotifications(state) {
            return state.notifications
        }
    },
    mutations: {
        setUser(state, newUser) {
            state.user = newUser
            setItemInLocaleStorage(state.user)
        },
        setNotifications(state, newNotification) {
            state.notifications.push(newNotification)
        },
        resetNotifications(state){
            state.notifications.shift()
        }

    },
    actions: {
        async getNewUser(context, data) {
            context.commit('setUser', data)
        },
      
    },
    modules: {
        products: productsModule
    }

})