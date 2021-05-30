<template>
  <div :class="[$style.wrp]">
    <button @click="onClick(cur - 1)">&laquo;</button>
    <div v-for="i in amount" :key="i" @click="onClick(i)">
      <button
        :class="{
          [$style.active]: cur === i,
        }"
      >
        {{ i }}
      </button>
    </div>
    <button @click="onClick(cur + 1)">&raquo;</button>
  </div>
</template>

<script>
export default {
  props: {
    length: Number,
    n: Number,
    cur: Number,
  },
  computed: {
    amount() {
      return Math.ceil(this.length / this.n);
    },
  },
  methods: {
    onClick(p) {
      if (p < 1 || p > this.amount) {
        return;
      }
      this.$emit("paginate", p);
    },
  },
};
</script>

<style module lang="scss">
.wrp {
  display: flex;
  & > div {
    padding: 10px;
  }
}
button {
  border-radius: 5px 5px 5px 5px;
  transition: background-color 1s;
}
button:hover {
  background-color: #f1f4f7;
  color: #10945d;
  border: solid 1px #f1f4f7;
}
button.active {
  background: #10945d;
}
</style>
