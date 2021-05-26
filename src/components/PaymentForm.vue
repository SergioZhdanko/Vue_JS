<template>
  <div>
    <div class="input-form">
      <input class="input-field" placeholder="Date" v-model="date" />
      <input class="input-field" placeholder="Category" v-model="category" />
      <input class="input-field" placeholder="Price" v-model="price" />
    </div>
    <button class="show-btn" @click="save">Save</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapState } from "vuex";
// import { mapGetters } from "vuex";
export default {
  // props: {
  //   // расиширенный вариант записи props
  //   items: {
  //     type: Array,
  //   },
  // },
  data() {
    return {
      date: "",
      category: "",
      price: 0,
    };
  },

  methods: {
    ...mapMutations(["setPaymentsListData"]),

    save() {
      const { date, category, price } = this;
      let data = this.myList;
      // this.$emit("add", { date, category, price });
      // this.setPaymentsListData([date, category, price]);
      this.setPaymentsListData([...data, { date, category, price }]);
    },
  },
  // computed: {
  //   ...mapGetters(["getPaymentsList"]),
  // },
  computed: mapState({
    myList: (state) => state.paymentList,
  }),
};
</script>

<style>
.input-form {
  display: flex;
  flex-direction: column;
}
.input-field {
  width: 25%;
  font-size: 14px;
  line-height: 26px;
  margin-top: 12px;
}
.show-btn {
  font-size: 14px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #f1f4f7;
  background: #10945d;
  border: solid 1px;
  padding: 12px 20px;
  text-decoration: none;
  display: inline-block;
  margin-top: 12px;
  -webkit-transition: background-color 1s;
  transition: background-color 1s;
  border-radius: 5px 5px 5px 5px;
}

.show-btn:hover {
  background-color: #f1f4f7;
  color: #10945d;
  border: solid 1px #f1f4f7;
}
</style>
