<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      {{ item }}
    </div>
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
</style>
