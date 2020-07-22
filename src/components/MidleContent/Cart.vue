<template>
  <div class="header-basket is-not-empty">
    <div class>
      <div v-if="!getProductsInCart.length">
        <p class="header-basket-text">Ваша корзина пуста</p>
      </div>
      <div v-else>
        <router-link to="/cart" tag="a" class="header-basket-price">
          <span class="header-basket-price-count">{{ getProductsInCart.length }}</span>
          <span class="header-basket-price-text">товар</span>
        </router-link>

        <p class="header-basket-sum">
          на {{ totalPrice() }}
          <sup class="header-basket-currency">руб</sup>
        </p>
        <router-link
          to="/checkout"
          tag="button"
          class="button-global button_small button-orange order-button"
        >Оформить заказ</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("products", ["getProductsInCart", "summ"])
  },

  methods: {
    ...mapActions("products", ["removeProduct"]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    totalPrice() {
      return this.getProductsInCart.reduce(
        (current, next) => current + next.price,
        0
      );
    },
    remove(index) {
      this.removeProduct(index);
    }
  }
  // computed: {
  //   ...mapGetters("cart", {
  //     lengthCart: "cnt"
  //     // sum: "test"
  //   })
  // }
};
</script>