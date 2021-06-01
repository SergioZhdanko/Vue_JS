<template>
  <div>
    <table>
      <!-- Элемент <th> создаёт заголовок столбца — специальную ячейку, текст в которой выделяется полужирным.  -->
      <tr>
        <th>#</th>
        <th>Date</th>
        <th>Category</th>
        <th>Price</th>
      </tr>

      <!-- Элемент <td> создаёт ячейки таблицы, внутрь которых помещаются данные таблицы.  -->
      <tr v-for="(item, index) in currentElements" :key="index">
        <td>{{ item.id }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.price }}</td>
      </tr>
    </table>
    <Pagination :length="12" :n="n" :cur="page" @paginate="onPaginate" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Pagination from "./Pagination";
export default {
  components: {
    Pagination,
  },
  data() {
    return {
      page: 1,
      n: 3,
    };
  },
  methods: {
    ...mapActions({
      fetchListData: "fetchData",
    }),
    doSometing() {
      console.log(this.getPaymentsListFullPrice);
    },
    onPaginate(p) {
      this.page = p;
      this.fetchListData(p);
    },
  },
  mounted() {
    this.fetchListData(this.page);
  },
  computed: {
    ...mapGetters(["getPaymentsList"], ["getPaymentsListFullPrice"]),
    currentElements() {
      const { n, page } = this;
      return this.getPaymentsList.slice(n * (page - 1), n * (page - 1) + n);
    },
  },
};
</script>

<style>
/* внешние границы таблицы серого цвета толщиной 1px */
table {
  /*border: 1px solid grey;*/
  border-collapse: collapse;
  width: 50%;
  text-align: center;
  /*background: lightgrey;*/
}

/* границы ячеек первого ряда таблицы */
th {
  border: 1px solid grey;
}
/* границы ячеек тела таблицы */
td {
  border: 1px solid grey;
}
</style>
