<template>
  <div class="hello">
    <input v-model.number="operand1" />
    <input v-model.number="operand2" />
    = {{ result }}
    <div>
      <button v-for="op in operations" :key="op" @click="calcualte(op)">
        {{ op }}
      </button>
    </div>
    <div class="error" v-if="error">
      {{ error }}
    </div>
    <input type="checkbox" id="checkbox" v-model="isDisplay" />
    <label for="checkbox"></label>Отобразить экранную клавиатуру привязка нажиме
    <!-- привязка нажимаемых кнопок к полям ввода не позволяет вводить цифры в несколько разрядов, цифры вводятся как символы, стирание крайней цифры не работает-->
    <div class="key-display" v-show="isDisplay">
      <button v-for="digit in digits" :key="digit" @click="operand1 = digit">
        {{ digit }}
      </button>
      <!-- выбор операндов пока не работает -->
      <div class="selectionOperand">
        <input type="radio" id="one" value="Первый операнд" v-model="picked" />
        <label for="one">Первый операнд</label>
        <input type="radio" id="two" value="Второй операнд" v-model="picked" />
        <label for="two">Второй операнд</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    operand1: 0,
    operand2: 0,
    result: 0,
    operations: ["+", "-", "/", "*", "%", "^"],
    error: "",
    digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<-"],
    isDisplay: false,
  }),
  props: {
    msg: String,
  },

  methods: {
    calcualte(op) {
      const { operand1, operand2 } = this;
      if (op === "/" && operand2 === 0) {
        this.error = "Division by zero!";
        return;
      }
      const calcOperation = {
        "+": () => operand1 + operand2,
        "-": () => operand1 - operand2,
        "/": () => operand1 / operand2,
        "*": () => operand1 * operand2,
        "%": () => operand1 % operand2,
        "^": () => Math.pow(operand1, operand2),
      };
      this.result = calcOperation[op]();
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

.error {
  padding: 20px;
  border: 1px solid red;
}
</style>