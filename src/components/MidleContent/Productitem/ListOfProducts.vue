<template>
  <div class="l-container">
    <!-- <ul class="listOfProducts">
    <li v-for="(product, index) in products" :key="index" class="product">
      <img :src="product.image" alt />
      <router-link to="/product-details">
        <h2 class="product-name" @click="addCurrentProduct(product)">{{ product.name }}</h2>
      </router-link>
      <div class="product-price">
        <span>Руб {{ product.price }}, 00</span>
        <span>10 x {{ Math.round(product.price / 10) }}, 00 </span> 
        округление суммы товара
      </div>

      <btn
        btnColor="btn btn-large btn-sucess"
        :cartIcon="true"
        @click.native="addProductToCart(product)"
      ></btn>
    </li>
    </ul>-->

    <div class="tab-content d-flex ai-c fw-w product-list">
      <div class="product-card" v-for="(product, index) in products" :key="index">
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
          <div class="product-card-buy-count d-flex ai-c">
            <input class="product-card-buy-count-input" v-model="summa" value="summa" />
            <div class="product-card-buy-count-controls">
              <div class="more" @click="moreCaunt()">+</div>
              <div class="less" @click="lessCaunt()">-</div>
            </div>
          </div>
          <button
            class="product-card-buy-button button-global button-primary-green"
            btnColor="btn btn-large btn-sucess"
            @click.native="addProductToCart(product)"
          >
            <b-icon icon="cart-dash"></b-icon>
          </button>

          <!-- <button
            class="product-card-buy-button button-global button-primary-green"
            @click="addToCart(product.id_product)"
            v-if="inCart.indexOf(product.id_product) === -1"
          >
            <b-icon icon="cart-plus"></b-icon>
          </button>
          <button
            class="product-card-buy-button button-global button-primary-yellow"
            @click="removeCart(product.id_product)"
            v-else
          >
            <b-icon icon="cart-dash"></b-icon>
          </button>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import btn from "./Btn";

export default {
  props: ["products"],

  data() {
    return {
      summa: 0
    };
  },
  components: {
    btn
  },
  methods: {
    ...mapActions("products", ["addProduct", "currentProduct"]),

    addProductToCart(product) {
      this.addProduct(product);
    },
    addCurrentProduct(product) {
      this.currentProduct(product);
    },
    moreCaunt() {
      this.summa += 1;
    },
    lessCaunt() {
      if (this.summa <= 0) {
        return;
      }
      this.summa -= 1;
    }
  }
};
</script>

<style scoped>
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

