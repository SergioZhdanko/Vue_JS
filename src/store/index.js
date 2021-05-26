
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
            resolve(
                [
                    {
                      date: "14.05.2021",
                      category: "Education",
                      price: 123,
                    },
                    {
                      date: "11.05.2021",
                      category: "Food",
                      price: 456,
                    },
                    {
                      date: "12.05.2021",
                      category: "Fare",
                      price: 112,
                    },
                    {
                      date: "10.05.2021",
                      category: "Housing",
                      price: 101,
                    },
                    {
                        date: "23.05.2021",
                        category: "Food",
                        price: 1200,
                    },
                  ]
            )
           }, 5000)
           }).then(res => {
            commit('setPaymentsListData', res)
           
       })
    }
  }
})