<template>
  <div>
    <header :class="[$style.header]">My Personal Cost</header>
    <main>
      <AddNewRecordButton @clicked="isDisplay = !isDisplay" />
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
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    PaymentsList, // регистрация компонента перечня расходов
    PaymentForm, // регистрация компонента формы
    AddNewRecordButton, // регистрация компонента компонента кнопки добавления
  },
  data() {
    return {
      isDisplay: true,
      paymentsList: [],
    };
  },

  methods: {
    ...mapActions(["fetchData"]),
    onDataAdded(data) {
      this.paymentsList.push(data);
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style module>
.header {
  color: red;
}
</style>