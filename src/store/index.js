
import Vue from 'vue'
import Vuex from  'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // храние данных
    state: {
    paymentsList: [],
  },
  // изменение данных внутри state
  mutations: {
      setPaymentsListData (state, payload) {
        state.paymentsList = payload;
      }
  },
  //
  getters: {
      getPaymentsList: state => state.paymentsList,
      getPaymentsListFullPrice: state => {
        return state.paymentsList
        .reduce((res, cur) => res + cur.price, 0)
      }
  },
  // для получения данных с сервера и их первоначальной обработки функции тут асинхронные
  actions: {
    fetchData({ commit }) {
       return  new Promise((resolve) => {
           setTimeout(() => {
            const items = [];
            for(let i = 1; i < 95; i++) {
              items.push({
                serial: i,
                date: "14.05.2021",
                category: "Education",
                price: i,
              })
            }
            resolve(items)
           }, 2000)
           }).then(res => {
            commit('setPaymentsListData', res)
           
       })
    }
  }
})