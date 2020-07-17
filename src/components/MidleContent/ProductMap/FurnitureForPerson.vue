<template>
  <div class>
    <h1>Мебель для персонала</h1>
    <div class="catalog-list d-flex jc-fs ai-fs fw-w">
      <div class="collection-card" v-for="(product, i) in products" :key="i">
        <router-link :to="'/product/' + product.id_product">
          <div class="collection-card-title">{{ product.title }}</div>
          <img class="collection-card-image" src="../../../assets/images/ekonom-furniture.jpg" />
          <div class="collection-card-gallery d-flex">
            <button
              v-for="(item, index) in 8"
              :key="index"
              class="collection-card-gallery-button"
              tabindex="0"
              item-image
            ></button>
          </div>
          <div class="collection-card-colors">
            <div class="collection-card-colors-slider d-flex">
              <img
                v-for="(item, index) in 3"
                :key="index"
                class="collection-card-colors-icon"
                src="../../../assets/images/colors-icon_brown.jpg"
                alt="ОРЕХ"
                src-big
              />
            </div>
          </div>
          <div class="collection-card-cost">
            от {{ product.price }}
            <span class="collection-card-cost-currency">руб</span>
          </div>
        </router-link>
        <!-- <button
          class="btn btn-primary"
          @click="addToCart(product.id_product)"
          v-if="inCart.indexOf(product.id_product) === -1"
        >Add to card</button>
        <button
          class="btn btn-warning"
          @click="removeCart(product.id_product)"
          v-else
        >Remove to card</button>-->
      </div>
    </div>

    <!-- <div class="row">
        <div class="col col-sm-4" v-for="(product, i) in products" :key="i">
          <router-link tag="h3" :to="'/product/' + product.id_product">
            <a>{{ product.title }}</a>
          </router-link>
          <div class>{{ product.price }}</div>
          <button
            class="btn btn-primary"
            @click="addToCart(product.id_product)"
            v-if="inCart.indexOf(product.id_product) === -1"
          >Add to card</button>
          <button
            class="btn btn-warning"
            @click="removeCart(product.id_product)"
            v-else
          >Remove to card</button>
        </div>
    </div>-->
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  created() {
    // this.$store.dispatch('products/loadItems');
    // для реального запроса
  },
  computed: {
    ...mapGetters("products", {
      products: "items"
    }),
    ...mapGetters("cart", {
      inCart: "products"
    })
  },
  methods: {
    ...mapActions("cart", {
      addToCart: "add",
      removeCart: "remove"
    })
  }
};
</script>
<style scoped>
.row {
  padding-left: 15px;
}
</style>