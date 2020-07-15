<template>
  <div>
    <div class="l-container">
      <h1>Product list</h1>
      <div class="catalog-list d-flex jc-fs ai-fs fw-w">
        <a class="collection-card" href tabindex="0">
          <div class="collection-card-title">Мебель для персонала Эконом</div>
          <img class="collection-card-image" src="../assets/../assets/images/ekonom-furniture.jpg" />
          <div class="collection-card-gallery d-flex">
            <button class="collection-card-gallery-button" tabindex="0" item-image></button>
            <button class="collection-card-gallery-button" tabindex="0" item-image></button>
          </div>
          <div class="collection-card-colors">
            <div class="collection-card-colors-slider d-flex">
              <img
                class="collection-card-colors-icon"
                src="../assets/images/colors-icon_brown.jpg"
                alt="ОРЕХ"
                src-big
              />
            </div>
          </div>
          <div class="collection-card-cost">
            от 3 926
            <span class="collection-card-cost-currency">руб</span>
          </div>
        </a>
        <a class="collection-card" href tabindex="0">
          <div class="collection-card-title">Мебель для персонала Эконом</div>
          <img class="collection-card-image" src="../assets/images/ekonom-furniture.jpg" />
          <div class="collection-card-gallery d-flex">
            <button class="collection-card-gallery-button" tabindex="0" item-image></button>
          </div>
          <div class="collection-card-colors">
            <div class="collection-card-colors-slider d-flex">
              <img
								v-for="(item, index) in 10"
                :key="index"
                class="collection-card-colors-icon"
                src="../assets/images/colors-icon_brown.jpg"
                alt="ОРЕХ"
                src-big
              />
            </div>
            <div class="collection-card-colors-control">
              <svg
                class="collection-card-colors-control-icon icon-prev is-not-active"
                role="button"
              >
                <use xlink:href="../sprite-manual.svg#next-icon" />
              </svg>
              <svg class="collection-card-colors-control-icon icon-next" role="button">
                <use xlink:href="../sprite-manual.svg#next-icon" />
              </svg>
            </div>
          </div>
          <div class="collection-card-cost">
            от 3 926
            <span class="collection-card-cost-currency">руб</span>
          </div>
        </a>
        <a class="collection-card" href tabindex="0">
          <div class="collection-card-title">Мебель для персонала Эконом</div>
          <img class="collection-card-image" src="../assets/images/ekonom-furniture.jpg" />
          <div class="collection-card-gallery d-flex">
            <button
							v-for="(item, index) in 4"
              :key="index" 
							class="collection-card-gallery-button" 
							tabindex="0" 
							item-image></button>
          </div>
          <div class="collection-card-colors">
            <div class="collection-card-colors-slider d-flex" >
              <img
								v-for="(item, index) in 4"
                :key="index"
                class="collection-card-colors-icon"
                src="../assets/images/colors-icon_brown.jpg"
                alt="ОРЕХ"
                src-big
              />
            </div>
          </div>
          <div class="collection-card-cost">
            от 3 926
            <span class="collection-card-cost-currency">руб</span>
          </div>
        </a>
        <a class="collection-card" href tabindex="0">
          <div class="collection-card-title">Мебель для персонала Эконом</div>
          <img class="collection-card-image" src="../assets/images/ekonom-furniture.jpg" />
          <div class="collection-card-gallery d-flex">
            <button 
								v-for="(item, index) in 8"
                :key="index" 
								class="collection-card-gallery-button" 
								tabindex="0" 
								item-image></button>
          </div>
          <div class="collection-card-colors">
            <div class="collection-card-colors-slider d-flex">
              <img
							v-for="(item, index) in 3"
                :key="index"
                class="collection-card-colors-icon"
                src="../assets/images/colors-icon_brown.jpg"
                alt="ОРЕХ"
                src-big
              />
            </div>
          </div>
          <div class="collection-card-cost">
            от 3 926
            <span class="collection-card-cost-currency">руб</span>
          </div>
        </a>
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