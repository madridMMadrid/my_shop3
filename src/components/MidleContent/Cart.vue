<template>
  <div class="header-basket is-not-empty">
    <div class>
      <p class="header-basket-text">Ваша корзина пуста</p>
      <a class="header-basket-price" href="#">
        <span class="header-basket-price-count">{{ lengthCart }}</span>
        <span class="header-basket-price-text">товар</span>
      </a>
      <p class="header-basket-sum">
        на 5 000
        <sup class="header-basket-currency">руб</sup>
      </p>
      <button
        class="button-global button_small button-orange order-button"
        tabindex="0"
      >Оформить заказ</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("cart", {
      lengthCart: "cnt"
    })
  }
};
</script>