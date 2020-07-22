<template>
  <div class="l-container catalog">
    <h1>Product</h1>
    <router-link :to="{name: 'products'}">Вернуться</router-link>
    <div class="alert">
      {{ product }}
      <section class="l-container collection">
        <div class="l-box d-flex jc-sb ai-c">
          <h1 class="primary-title">{{ product.title }}</h1>
          <div class="primary-price">от {{product.price}} руб</div>
        </div>
        <div class="l-box identend d-flex jc-sb ai-c">
          <div class="item-actions d-flex ai-c">
            <div class="rating d-flex ai-c">
              <div class="rating-stars" v-for="(item, index) in 5" :key="index">
                <div class="rating-star">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-star"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                    />
                  </svg>
                </div>
              </div>
              <p class="rating-reviews">
                <span class="rating-reviews-count">2</span>
                <span class="rating-reviews-text">отзыва</span>
              </p>
            </div>
            <div class="share">
              <div class="item-actions-group d-flex ai-c" role="button">
                <!-- <svg class="item-actions-icon share-icon">
                  <use xlink:href="../sprite-manual.svg#share-icon" />
                </svg>-->
                <p class="item-actions-text">Поделиться</p>
              </div>
            </div>
            <div class="favorite">
              <div class="item-actions-group d-flex ai-c" role="button">
                <!-- <svg class="item-actions-icon favorite-icon">
                  <use xlink:href="../sprite-manual.svg#favorite-icon" />
                </svg>-->
                <p class="item-actions-text">В избранное</p>
              </div>
            </div>
            <div class="compare">
              <div class="item-actions-group d-flex ai-c" role="button">
                <!-- <svg class="item-actions-icon compare-icon">
                  <use xlink:href="../sprite-manual.svg#compare-icon" />
                </svg>-->
                <p class="item-actions-text">Сравнить</p>
              </div>
            </div>
          </div>
          <div class="primary-identifier">id: {{ product.id_product }}</div>
        </div>

        <!-- <div class="l-box d-flex ai-fs jc-sb">
          <img
            class="collection-image-main"
            src="../../../assets/images/gallery-ekonom-image-main.jpg"
            alt
          />
          <div class="collection-gallery">
            <button class="collection-gallery-button prev" tabindex="0">
              <svg class="collection-gallery-button-icon">
                <use xlink:href="/sprite-manual.svg#next-icon" />
              </svg>
            </button>
            <div class="collection-gallery-slides">
              <img
                class="collection-gallery-image active"
                src="../../../assets/images/gallery-ekonom-image-main.jpg"
                alt
              />
              <img
                class="collection-gallery-image"
                src="../../../assets/images/gallery-ekonon-image01.jpg"
                alt
              />
              <img
                class="collection-gallery-image"
                src="../../../assets/images/gallery-ekonon-image01.jpg"
                alt
              />
              <img
                class="collection-gallery-image"
                src="../../../assets/images/gallery-ekonon-image01.jpg"
                alt
              />
            </div>
            <button class="collection-gallery-button next" tabindex="0">
              <svg class="collection-gallery-button-icon">
                <use xlink:href="/sprite-manual.svg#next-icon" />
              </svg>
            </button>
          </div>
        </div>-->
        <ProductSlider :productCartPosition="vertical"/>

        <DescriptionProduct />

        <div class="l-box tabs item-tabs">
          <Tabs />
          <SortProduct />
          <SortingResult />
        </div>
      </section>
      <div class="l-container sentence column">
        <div class="primary-title sentence-title">Обратите внимание</div>
        <div class="l-box d-flex jc-sb">
          <a class="sentence-block fd-c d-flex" href>
            <img
              class="sentence-image"
              src="../../../assets/images/sentence-block-column-image01.jpg"
            />
            <div class="sentence-block-right d-flex jc-c ai-c fd-c">
              <div class="sentence-block-name">Эконом</div>
            </div>
          </a>
          <a class="sentence-block fd-c d-flex" href>
            <img
              class="sentence-image"
              src="../../../assets/images/sentence-block-column-image01.jpg"
            />
            <div class="sentence-block-right d-flex jc-c ai-c fd-c">
              <div class="sentence-block-name">Кабинеты руководителей</div>
              <p class="sentence-block-price">
                от 4 882
                <sup class="sentence-block-currency">руб</sup>
              </p>
            </div>
          </a>
          <a class="sentence-block fd-c d-flex" href>
            <img
              class="sentence-image"
              src="../../../assets/images/sentence-block-column-image01.jpg"
            />
            <div class="sentence-block-right d-flex jc-c ai-c fd-c">
              <div class="sentence-block-name">Столы для переговоров</div>
              <p class="sentence-block-price">
                от 2 242
                <sup class="sentence-block-currency">руб</sup>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

import Tabs from "./Tabs";
import DescriptionProduct from "./DescriptionProduct";
import SortProduct from "./SortProduct";
import SortingResult from "./SortingResult";
import ProductSlider from "./ProductSlider";

export default {
  data() {
    return {
      prod: "products",
      vertical: {
        vertical: true,
        bigImg: 10,
        miniImg: 2
      }
    };
  },
  components: {
    Tabs,
    DescriptionProduct,
    SortProduct,
    SortingResult,
    ProductSlider
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    product() {
      return this.$store.getters[`${this.prod}/item`](this.id);
    },
    ...mapGetters("products", {
      products: "items"
    })
  }
};
</script>
<style lang="scss">
  @import "../../../assets/styles/forProduct.scss";
</style>