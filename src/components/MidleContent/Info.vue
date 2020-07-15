<template>
  <div>
    <div class="header-info d-flex jc-sb">
      <div class="header-info-element d-flex ai-c">
        <svg class="primary-icon icon-green">
          <use xlink:href="../sprite-manual.svg#phone-icon" />
        </svg>
        <a class="header-info-phone" href="tel:+74951209759" tabindex="0">+7 (495) 120-97-59</a>
      </div>
      <div class="header-info-element d-flex ai-c">
        <svg class="primary-icon icon-green">
          <use xlink:href="../sprite-manual.svg#clock-icon" />
        </svg>
        <div class="header-info-text">Круглосуточно, без выходных</div>
      </div>
      <div class="header-actions d-flex">
        <div class="header-info-element d-flex ai-c" role="button" tabindex="0">
          <svg class="primary-icon header-actions-icon">
            <use xlink:href="../sprite-manual.svg#favorite-icon" />
          </svg>
          <div class="header-actions-count">0</div>
        </div>
        <div class="header-info-element d-flex ai-c" role="button" tabindex="0">
          <svg class="primary-icon header-actions-icon">
            <use xlink:href="../sprite-manual.svg#compare-icon" />
          </svg>
          <div class="header-actions-count">0</div>
        </div>
      </div>
      <div class="header-info-element d-flex ai-c">
        <svg class="primary-icon icon-green">
          <use xlink:href="../sprite-manual.svg#location-icon" />
        </svg>
        <div class="header-info-text">Ваш город:</div>
        <div class="header-info-country" role="button" tabindex="0">Москва</div>
      </div>
      <div class="header-actions d-flex">
        <button class="button-global button_small button-primary-green call-button" tabindex="0">
          Заказать
          звонок
        </button>
        <button
          class="button-global button_small button-optional-green email-button"
          tabindex="0"
        >Написать нам</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>