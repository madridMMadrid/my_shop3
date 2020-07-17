<template>
  <div class="tab-content d-flex ai-c fw-w product-list">
    <div class="product-card" v-for="(value, i) in 1" :key="i">
      <div class="product-card-title">Стол приставной</div>
      <img class="product-card-image" src="../../../assets/images/product-table_brown.jpg" />
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
          <span class="product-card-buy-price-text">3926</span>
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
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      summa: 0
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    product() {
      return this.$store.getters["products/item"](this.id);
    },
    ...mapGetters("products", {
      products: "items"
    }),
    ...mapGetters("cart", {
      inCart: "products"
    })
  },
  methods: {
    moreCaunt() {
      this.summa += 1;
    },
    lessCaunt() {
      if (this.summa <= 0) {
        return;
      }
      this.summa -= 1;
    },
    ...mapActions("cart", {
      addToCart: "add",
      removeCart: "remove"
    })
  }
};
</script>
<style lang="scss" scaped>
.product-card-buy {
  &-count {
    padding-left: 20px;
    margin: 0;
    &-controls {
      & .more,
      .less {
        height: 15px;
        width: 25px;
        background: #c5c4c4;
        line-height: 0.9;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Chrome/Safari/Opera */
        -khtml-user-select: none; /* Konqueror */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;
        &:hover {
          cursor: pointer;
          box-shadow: 0 0 40px rgba(0, 0, 0, 0.1) inset;
        }
      }
    }
  }
  &-price {
    display: flex;
    &-currency {
      line-height: inherit;
      top: 0;
    }
  }
  &.jc-sb {
    align-items: center;
  }
}

.raz {
  all: unset;
  -moz-appearance: textfield;
  width: 3em;
  text-align: center;
}
.raz::-webkit-inner-spin-button {
  display: none;
}
</style>