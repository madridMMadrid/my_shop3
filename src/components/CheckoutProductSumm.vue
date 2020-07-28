<template>
  <!-- <transition-group name="fade"> -->
  <li class="checkout-product">
    <img :src="getProductsInCart.image" alt class="product-image" />
    <div class="product-name">{{ getProductsInCart.name }}</div>
    <div class="inStorage">
      <div class="status yes">На складе</div>
    </div>
    <div
      class="currentSum"
    >{{ totalCurrenSumm == 0 ? getProductsInCart.price : totalCurrenSumm.total }}</div>
    <PlusMinusForCheckout
      @totalCurrentSummMore="totalSummMore"
      @totalCurrentSummLess="totalSummLess"
      :price="getProductsInCart.price"
    />
    <span class="product-price">{{ getProductsInCart.price }}</span>
    <button class="product-remove" @click="remove(index)">X</button>
  </li>
  <!-- </transition-group> -->
</template>
<script>
import { mapActions } from "vuex";

import PlusMinusForCheckout from "./MidleContent/Productitem/PlusMinusForCheckout";
export default {
  props: ["getProductsInCart", "index"],
  components: {
    PlusMinusForCheckout,
  },
  data() {
    return {
      totalCurrenSumm: 0,
    };
  },
  methods: {
    ...mapActions("products", ["removeProduct"]),
    remove(index) {
      this.removeProduct(index);
    //   this.totalCurrenSumm = this.getProductsInCart.price
    },
    totalSummMore(data) {
      console.log("++++", data);
      this.totalCurrenSumm = data;
    },
    totalSummLess(data) {
      console.log("---", data);
      this.totalCurrenSumm = data;
    },
  },
};
</script>
<style lang="scss">
</style>  