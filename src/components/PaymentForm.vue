<template>
  <div>
    <input placeholder="Date" v-model="date" />
    <input placeholder="Category" v-model="category" />
    <input placeholder="Price" v-model="price" />
    <button @click="save">Save</button>
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
  data() {
    return {
      date: "",
      category: "",
      price: 0,
    };
  },
  methods: {
    save() {
      const { date, category, price } = this;
      this.$emit("add", { date, category, price });
    },
  },
};
</script>

<style>
</style>
