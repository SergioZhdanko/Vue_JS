<template>
  <div id="app">
    <header :class="[$style.header]">My Personal Cost</header>
    <main>
      <AddNewRecordButton @click="switchIsDisplay" />
      <PaymentForm @add="onDataAdded" v-if="isDisplay" />
      <!-- передача в пропсы компонента массива paymentsList : это мv-bind -->
      <PaymentsList :items="paymentsList" />
    </main>
  </div>
</template>

<script>
import PaymentsList from "./components/PaymentsList"; // импорт компонента перечня расходов в главное приложение
import PaymentForm from "./components/PaymentForm"; // импорт компонента формы в главное приложение
import AddNewRecordButton from "./components/AddNewRecordButton"; // импорт компонента кнопки добавления в главное приложение
export default {
  name: "App",
  components: {
    PaymentsList, // регистрация компонента перечня расходов
    PaymentForm, // регистрация компонента формы
    AddNewRecordButton, // регистрация компонента компонента кнопки добавления
  },
  data() {
    return {
      isDisplay: false,
      paymentsList: [
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
      ],
    };
  },

  methods: {
    onDataAdded(data) {
      this.paymentsList.push(data);
    },
  },
  switchIsDisplay() {
    this.isDisplay = !this.isDisplay;
  },
};
</script>

<style module>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.header {
  color: red;
}
</style>