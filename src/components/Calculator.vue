<template>
  <div class="hello">
    <input v-model.number="operand1" />
    <input v-model.number="operand2" />
    = {{ result }}
    <div>
      <button v-for="op in operations" :key="op" @click="calcualte(op)">
        {{ op }}
      </button>
      <button @click="(operand1 = 0), (operand2 = 0)">Clear</button><br />
    </div>
    <div class="error" v-if="error">
      {{ error }}
    </div>
    <input type="checkbox" id="checkbox" v-model="isDisplay" />
    <label for="checkbox">Отобразить экранную клавиатуру</label>
    <div class="key-display" v-show="isDisplay">
      <button v-for="digit in digits" :key="digit" @click="addNumber(digit)">
        {{ digit }}
      </button>
      <button @click="eraseLastDigit">&larr;</button><br />

      <div class="selectionOperand">
        <label for="radio1" class="gender-selection__sel">Операнд 1</label>
        <input
          type="radio"
          name="button_group_1"
          id="radio1"
          value="1"
          @click="(activeOperand = 1), (strOperand = '')"
        />
        <label for="radio2" class="gender-selection__sel">Операнд 2</label>
        <input
          type="radio"
          name="button_group_1"
          id="radio2"
          value="2"
          @click="(activeOperand = 2), (strOperand = '')"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    operand: 0,
    strOperand: "",
    operand1: 0,
    operand2: 0,
    result: 0,
    operations: ["+", "-", "/", "*", "%", "^"],
    error: "",
    digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    isDisplay: false,
    activeOperand: 1,
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

    addNumber(digit) {
      this.strOperand += digit;
      if (this.activeOperand === 1) {
        this.operand1 = parseInt(this.strOperand);
      } else {
        this.operand2 = parseInt(this.strOperand);
      }

      console.log(this.strOperand);
    },

    eraseLastDigit() {
      let backspacedStrOperand = "";
      backspacedStrOperand = this.strOperand.slice(0, -1);
      this.strOperand = backspacedStrOperand;
      if (this.activeOperand === 1) {
        this.operand1 = parseInt(this.strOperand);
      } else {
        this.operand2 = parseInt(this.strOperand);
      }
      console.log(this.strOperand);
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