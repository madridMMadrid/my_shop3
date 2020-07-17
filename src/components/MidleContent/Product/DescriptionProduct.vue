<template>
  <div class="l-box collection-info d-flex jc-sb">
    <div class="collection-info-block">
      <div class="collection-info-characteristic d-flex jc-sb">
        <span class="collection-info-characteristic-name">Базовая комплектация</span>
        <span class="collection-info-characteristic-value">Стол рабочий</span>
      </div>
      <div class="collection-info-characteristic d-flex jc-sb">
        <span class="collection-info-characteristic-name">Материал столешницы</span>
        <span class="collection-info-characteristic-value">ЛДСП</span>
      </div>
      <div class="collection-info-characteristic d-flex jc-sb">
        <span class="collection-info-characteristic-name">Стиль мебели</span>
        <span class="collection-info-characteristic-value">Классика</span>
      </div>
      <div class="collection-info-characteristic d-flex jc-sb">
        <span class="collection-info-characteristic-name">Страна производства</span>
        <span class="collection-info-characteristic-value">Россия</span>
      </div>
      <div class="collection-info-characteristic d-flex jc-sb">
        <span class="collection-info-characteristic-name">Толщина столешницы</span>
        <span class="collection-info-characteristic-value">16 мм</span>
      </div>
    </div>
    <div class="collection-info-block">
      <div class="primary-subtitle">Выберите вариант расцветки:</div>
      <div class="select-color">
        <div class="select-color-list d-flex ai-c">
          <img
            class="select-color-image"
            src="../../../assets/images/colors-icon_brown.jpg"
            alt
            role="button"
          />
          <img
            class="select-color-image"
            src="../../../assets/images/colors-icon_white.jpg"
            alt
            role="button"
          />
          <img
            class="select-color-image"
            src="../../../assets/images/colors-icon_red.jpg"
            alt
            role="button"
          />
          <div class="colors" role="button">
            <span class="show-more-text link-dashed">
              Показать все
              цвета
            </span>
            <span class="show-more-count">(ещё 5)</span>
          </div>
        </div>
      </div>
      <div class="primary-subtitle">Выберите цвет каркаса:</div>
      <div class="choice select-frame">
        <div class="choice-selected select-frame-selected d-flex jc-sb ai-c" role="button">
          <img class="select-frame-image" src="../../../assets/images/colors-icon_brown.jpg" alt />
          <span class="choice-selected-title select-frame-title">Антрацит</span>
          <svg class="choice-selected-icon">
            <use xlink:href="sprite-manual.svg#next-icon" />
          </svg>
        </div>
        <div class="choice-list"></div>
      </div>
      <button class="button-global button-primary-green collection-info-button">
        <svg class="collection-info-button-icon">
          <use xlink:href="sprite-manual.svg#phone-icon-filled" />
        </svg>
        <span class="collection-info-button-text">Заказать по телефону</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {};
</script>