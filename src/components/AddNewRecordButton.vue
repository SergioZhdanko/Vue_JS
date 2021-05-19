<template>
  <div>
    <button class="show-btn" @click="clicked">ADD NEW COST +</button>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    clicked() {
      this.$emit("clicked");
    },
  },
};
</script>

<style>
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