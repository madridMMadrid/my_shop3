<template>
  <div class="l-container">
    <div class="tab-content d-flex ai-c fw-w product-list">
      <div class="product-card" v-for="(product, index) in products" :key="index + 1">
        <!-- <div class="product-card-title"> -->
        <router-link class="product-card-title" to="/product-details">
          <h2 class="product-name" @click="addCurrentProduct(product)">{{ product.name }}</h2>
        </router-link>
        <!-- </div> -->
        <img class="product-card-image" :src="product.image" alt />
        <div class="product-card-scale">
          <div class="product-card-scale-size">90 см</div>
          <div class="product-card-scale-size">60 см</div>
          <div class="product-card-scale-size">90 см</div>
        </div>
        <div class="product-card-info">
          <div class="product-card-info-text green product-key">Код товара</div>
          <div class="product-card-info-text green product-id">ID</div>
          <div class="product-card-info-text black">Срок доставки</div>
        </div>
        <div class="product-card-actions">
          <svg class="primary-icon product-card-icon" role="button">
            <use xlink:href="sprite-manual.svg#compare-icon" />
          </svg>
        </div>
        <div class="product-card-buy d-flex jc-sb">
          <div class="product-card-buy-price">
            <span class="product-card-buy-price-text">{{ product.price }}</span>
            <sup class="product-card-buy-price-currency">руб</sup>
          </div>

          <PlusMinus @backSumm="onSumm" />

          <button
            class="product-card-buy-button button-global button-primary-green"
            btnColor="btn btn-large btn-sucess"
            @click="addProductToCart(product)"
          >
            <b-icon icon="cart-dash"></b-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import btn from "./Btn";
import PlusMinus from "./PlusMubus";

export default {
  props: ["products"],
  data() {
    return {
      summaUnique: 0,
      exist: false
    };
  },

  components: {
    btn,
    PlusMinus,
  },
  computed: {
    ...mapGetters("products", ["getProductsInCart"]),
  },
  methods: {
    ...mapActions("products", ["addProduct", "currentProduct"]),

    addProductToCart(product) {
      let payload = { key1: this.summaUnique, key2: product };
      this.addProduct(payload);
      this.existToCart(product.id);
    },
    addCurrentProduct(product) {
      this.currentProduct(product);
    },
    onSumm(data) {
      this.summaUnique = data;
    },
    existToCart(id) {
      console.log(id)
      let exist = this.getProductsInCart.some((o) => o.id === id);
    },
  },
};
</script>

<style scoped>
.test {
  color: red;
}
.listOfProducts {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
}

.product {
  width: 300px;
  background-color: #fff;
  list-style: none;
  box-sizing: border-box;
  padding: 1em;
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
}

.product-name {
  font-size: 1.2em;
  font-weight: normal;
}

.product-name:hover {
  cursor: pointer;
  text-decoration: underline;
}

.product-price {
  width: 100%;
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;
}
</style>

