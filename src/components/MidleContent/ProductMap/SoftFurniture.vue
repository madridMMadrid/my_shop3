<template>
  <section class="catalog">
    <div class="l-box d-flex jc-sb ai-c">
      <a href>
        <h2 class="primary-title link-orange-ntd">Мягкая офисная мебель</h2>
      </a>
      <div class="catalog-amount">
        Всего:
        <span class="catalog-amount-number">108</span>
      </div>
    </div>
    <div class="catalog-list d-flex jc-fs ai-fs fw-w">
      <a class="collection-card" href tabindex="0" v-for="(value, index) in 4" :key="index">
        <div class="collection-card-title">Va-bank</div>
        <img class="collection-card-image" src="../../../assets/images/sofa.jpg" />
        <div class="collection-card-gallery d-flex">
          <button class="collection-card-gallery-button" tabindex="0" item-image></button>
          <button class="collection-card-gallery-button" tabindex="0" item-image></button>
        </div>
        <div class="collection-card-colors">
          <div class="collection-card-colors-slider d-flex">
            <img
              class="collection-card-colors-icon"
              src="../../../assets/images/colors-more.png"
              alt="Кожа"
              src-big
            />
          </div>
        </div>
        <div class="collection-card-cost">
          от 1 399 999
          <span class="collection-card-cost-currency">руб</span>
        </div>
      </a>
    </div>
    <div class="l-box center d-flex ai-c">
      <div class="catalog-slider-control">
        <svg class="catalog-slider-control-icon" role="button">
          <use xlink:href="sprite-manual.svg#next-icon" />
        </svg>
        <svg class="catalog-slider-control-icon" role="button">
          <use xlink:href="sprite-manual.svg#next-icon" />
        </svg>
      </div>
      <div class="l-box center d-flex ai-c showAll">
        <div class="colors" role="button">
          <span class="show-more-text link-dashed">Смотреть все</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scope lang="scss">
.showAll {
  margin-top: 15px;
  justify-content: flex-end;
}
</style>