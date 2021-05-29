<template>
  <div :class="[$style.wrp]">
    <div
      :class="{
        [$style.active]: cur === i,
      }"
      v-for="i in amount"
      :key="i"
      @click="onClick(i)"
    >
      <button>{{ i }}</button>
    </div>
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
    &.active {
      background: #ccc;
    }
  }
}
</style>
