
import Vue from 'vue'
import Vuex from  'vuex'

Vue.use(Vuex)

const localDB = {
  "page1": [
    { "id": 1, "date": "20.03.2020", "category": "Food", "price": 169 },
    { "id": 2, "date": "21.03.2020", "category": "Navigation", "price": 50 },
    { "id": 3, "date": "22.03.2020", "category": "Sport", "price": 450 }
  ],
  "page2": [
    { "id": 4, "date": "20.03.2020", "category": "Music", "price": 821 },
    { "id": 5, "date": "21.03.2020", "category": "Fare", "price": 40 },
    { "id": 6, "date": "22.03.2020", "category": "Sport", "price": 210 }
  ],
  "page3": [
    { "id": 7, "date": "20.03.2020", "category": "Food", "price": 169 },
    { "id": 8, "date": "21.03.2020", "category": "Navigation", "price": 50 },
    { "id": 9, "date": "22.03.2020", "category": "Sport", "price": 450 }
  ],
  "page4": [
    { "id": 10, "date": "20.03.2020", "category": "Music", "price": 821 },
    { "id": 11, "date": "21.04.2021", "category": "Fare", "price": 40 },
    { "id": 12, "date": "21.05.2021", "category": "Sport", "price": 210 }
  ]
}

export default new Vuex.Store({
  // храние данных
    state: {
    paymentsList: [],
    paymentsListIDS: [],
  },
  // изменение данных внутри state
  mutations: {
      setPaymentsListData (state, payload) {
        state.paymentsList = payload;
      },
      addPaymentsListData (state, payload) {
        const newUniqRecords = payload.filter(record => {
          return state.paymentsListIDS.indexOf(record.id)<0
        });
        state.paymentsListIDS.push(...newUniqRecords.map(record => record.id));
        state.paymentsList.push(...newUniqRecords);
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
      

    fetchData({ commit }, page) {
       return  new Promise((resolve) => {
           setTimeout(() => {
            const items = localDB[`page${page}`];
            resolve(items);
           }, 2000)
           }).then(res => {
            commit('addPaymentsListData', res)
           
       })
    }
  }
})