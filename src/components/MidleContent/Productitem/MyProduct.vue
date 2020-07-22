<template>
  <div class="l-container">
    <b-row class="my-1">
      <b-col sm="8">
        <ProductSlider :productCartPosition="vertical" />
      </b-col>
      <b-col sm="4">
        <div class="">
          <!-- <div class="product-image">
            <img :src="currentProduct.image" alt />
            <stars :rate="rated(currentProduct.stars)" :totalReviews="currentProduct.totalReviews" />
          </div> -->
          <div class="">
            <h2 class="product-title">{{ currentProduct.name }}</h2>
            <span class="product-price">Руб. {{ currentProduct.price }}, 00</span>
            <btn
              btnColor="btn btn-large btn-sucess"
              :cartIcon="true"
              @click.native="addProductToCart(currentProduct)"
            ></btn>
          </div>
          <modal>{{ currentProduct.details }}</modal>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import btn from "./Btn";
import stars from "./Stars";
import modal from "./Modal";

import ProductSlider from "../Product/ProductSlider";

export default {
  data() {
    return {
      vertical: {
        vertical: false,
        bigImg: 12,
        miniImg: 12
      }
    };
  },
  components: {
    btn,
    stars,
    modal,
    ProductSlider
  },

  computed: {
    ...mapGetters("products", {
      currentProduct: "getCurrentProduct"
    })
  },

  methods: {
    ...mapActions("products", ["addProduct", "showOrHiddenModal"]),
    addProductToCart(product) {
      let payload = { key1: this.summaUnique, key2: product };

      this.addProduct(payload);
    },
    rated(rate) {
      return `${rate * 20}%`;
    },
    openModal() {
      this.showOrHiddenModal();
    }
  }
};
</script>

<style scoped>
.product-box {
  width: 800px;
  height: 400px;
  margin: 50px auto;
  box-sizing: border-box;
  padding: 1.5em;
  background-color: #fff;
  border-radius: 7px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.product-image {
  width: 300px;
}

.product-info {
  width: 400px;
  align-self: flex-start;
}

.product-title {
  font-weight: normal;
}

.product-price {
  font-size: 2em;
  font-weight: bolder;
}

.product-box button {
  width: 300px;
  margin: 0.3em 0;
}
</style>
