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
          <div class="primary-icon header-actions-icon">
            <b-icon icon="heart" style="color: red;"></b-icon>
          </div>
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
        <b-button v-b-modal.modal-center class="button-global button_small button-primary-green call-button">Заказать звонок</b-button>
        <b-modal id="modal-center" title="BootstrapVue">
          <p class="my-4">Заказать звонок</p>
        </b-modal>
        <b-button v-b-modal.modal-center-2 class="button-global button_small button-optional-green email-button">Написать нам</b-button>
        <b-modal id="modal-center-2" title="BootstrapVue">
          <p class="my-4">Написать нам</p>
        </b-modal>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>