<template>
  <div>
    <!-- <div v-for="(item, index) in items" :key="index">
      {{ item }}
    </div> -->
    <table>
      <!-- Элемент <th> создаёт заголовок столбца — специальную ячейку, текст в которой выделяется полужирным.  -->
      <tr>
        <th>#</th>
        <th>Date</th>
        <th>Category</th>
        <th>Price</th>
      </tr>

      <!-- Элемент <td> создаёт ячейки таблицы, внутрь которых помещаются данные таблицы.  -->
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.price }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    // расиширенный вариант записи props
    items: {
      type: Array,
    },
  },
  methods: {
    doSometing() {
      console.log(this.items);
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
