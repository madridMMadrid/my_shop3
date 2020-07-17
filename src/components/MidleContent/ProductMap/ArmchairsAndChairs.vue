<template>
  <section class="catalog">
    <div class="l-box d-flex jc-sb ai-c">
      <a href>
        <h2 class="primary-title link-orange-ntd">Кресла и стулья</h2>
      </a>
      <div class="catalog-amount">
        Всего:
        <span class="catalog-amount-number">108</span>
      </div>
    </div>
    <div class="tabs catalog-tabs">
      <div class="tabs-header catalog-tabs-header">
        <div
          class="tabs-header-item catalog-tabs-header-item tabs-el is-active"
          role="button"
          tabindex="0"
        >Для персонала</div>
        <div
          class="tabs-header-item catalog-tabs-header-item tabs-el"
          role="button"
          tabindex="0"
        >Для руководителя</div>
        <div
          class="tabs-header-item catalog-tabs-header-item tabs-el"
          role="button"
          tabindex="0"
        >Для посетителя</div>
        <div
          class="tabs-header-item catalog-tabs-header-item tabs-el"
          role="button"
          tabindex="0"
        >Ортопедические кресла</div>
      </div>
      <div class="tabs-content tabs-cont catalog-list jc-fs ai-fs fw-w is-show">
        <a class="collection-card" href tabindex="0"  v-for="(value, index) in 4" :key="index">
          <div class="collection-card-title">CHAIRMAN 696 black</div>
          <img class="collection-card-image" src="../../../assets/images/сhair.jpg" />
          <div class="collection-card-gallery d-flex">
            <button class="collection-card-gallery-button" tabindex="0" item-image></button>
            <button class="collection-card-gallery-button" tabindex="0" item-image></button>
          </div>
          <div class="collection-card-colors">
            <div class="collection-card-colors-slider d-flex">
              <img
                class="collection-card-colors-icon"
                src="../../../assets/images/colors-icon_red.jpg"
                alt="Бордо"
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
   
    </div>
    <div class="l-box center d-flex ai-c showAll">
      <div class="colors" role="button">
        <span class="show-more-text link-dashed">Смотреть все</span>
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