<template>
  <div class="hello">
    <input v-model.number="operand1" />
    <input v-model.number="operand2" />
    = {{ result }}
    <div>
      <button @click="calcualte('+')">+</button>
      <button @click="calcualte('-')">-</button>
      <button @click="calcualte('/')">/</button>
      <button @click="calcualte('*')">*</button>
      <button @click="calcualte('%')">%</button>
      <button @click="calcualte('^')">^</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    operand1: 0,
    operand2: 0,
    result: 0,
  }),
  props: {
    msg: String,
  },

  methods: {
    calcualte(op) {
      switch (op) {
        case "+":
          this.result = this.operand1 + this.operand2;
          break;
        case "-":
          this.result = this.operand1 - this.operand2;
          break;
        case "/":
          this.result = this.operand1 / this.operand2;
          break;
        case "*":
          this.result = this.operand1 * this.operand2;
          break;
        case "%":
          this.result = this.operand1 % this.operand2;
          break;
        case "^":
          this.result = Math.pow(this.operand1, this.operand2);
          break;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
