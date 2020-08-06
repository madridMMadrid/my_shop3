<template>
  <div class="l-container">
    <h1>{{ currentProduct.name }}</h1>
    <b-row class="my-1">
      <b-col sm="8">
        <ProductSlider :productCartPosition="vertical" />
      </b-col>
      <b-col sm="4">
        <div class>
          <!-- <div class="product-image">
            <img :src="currentProduct.image" alt />
            <stars :rate="rated(currentProduct.stars)" :totalReviews="currentProduct.totalReviews" />
          </div>-->
          <div class="product_functions">
            <span class="product-price">{{ productSum == 0 ? currentProduct.price : productSum}}</span>
            <PlusMinusForProduct
              @More="More"
              @Less="Less"
              :currentProduct="currentProduct"
              :price="currentProduct.price"
              :qty="currentProduct.qty"
            />

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
import PlusMinusForProduct from "./PlusMinusForProduct";

export default {
  data() {
    return {
      vertical: {
        vertical: false,
        bigImg: 12,
        miniImg: 12,
        totalCurrenSumm: 1,
        summaUnique: 1,
      },
      productSum: 0,
      productQty: 1,
    };
  },
  components: {
    btn,
    stars,
    modal,
    ProductSlider,
    PlusMinusForProduct,
  },

  computed: {
    ...mapGetters("products", {
      currentProduct: "getCurrentProduct",
    }),
  },

  methods: {
    ...mapActions("products", ["addProduct", "showOrHiddenModal"]),
    addProductToCart(product) {
      let payload = { qty: this.productQty, prod: product };
      this.addProduct(payload);
    },
    rated(rate) {
      return `${rate * 20}%`;
    },
    openModal() {
      this.showOrHiddenModal();
    },

    More(data) {
      console.log(data);
      this.productQty = data._qty;
      this.productSum = data._sum;
    },
    Less(data) {
      this.productQty = data._qty;
      this.productSum = data._sum;
    },
  },
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
