<template>
  <div>
    <button @click="clicked">ADD NEW COST +</button>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      //   isClicked: false,
    };
  },
  methods: {
    clicked() {
      //   this.isClicked = !this.isClicked;
      this.$emit("clicked");
    },
  },
};
</script>

<style>
</style>