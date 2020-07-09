import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from '@/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    ...actions,
    bindCustomersRef: firestoreAction(context => {
      return context.bindFirestoreRef('customers', db.collection('customers'))
    })
  },
  getters: { ...getters },
  mutations: { ...mutations, ...vuexfireMutations },
  state: {
    customers: []
  },
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
  strict: process.env.NODE_ENV !== 'production'
})
