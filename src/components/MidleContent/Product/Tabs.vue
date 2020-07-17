<template>
  <div class="my-tabs-content">
    <b-tabs content-class="mt-3">
      <b-tab title="Элементы комплектации" active>
        <div>
          <div class="tabs-header item-tabs-content-element product-menu d-flex ai-fs">
            <div class="tabs-header-item product-menu-element is-active" role="button">
              <div class="product-menu-name">Все</div>
            </div>
            <div class="tabs-header-item product-menu-element d-flex fd-c jc-c ai-c" role="button">
              <svg class="product-menu-icon">
                <use xlink:href="sprite-manual.svg#furniture-table-icon" />
              </svg>
              <div class="product-menu-name">Столы</div>
            </div>
          </div>
        </div>
      </b-tab>
      <b-tab title="Second">
        <p>I'm the second tab</p>
      </b-tab>
      <b-tab title="three">
        <p>I'm a disabled tab!</p>
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.my-tabs-content {
  .tab-content {
    margin: 0 !important;
    padding: 20px;
    border: 1px solid #ebe8e5;
    border-top: 0;
  }
  .nav-tabs {
    & .nav-item {
      display: flex;
      align-self: flex-end;
      &:not(:first-child) {
        margin-left: 5px;
      }
    }
    & .nav-link {
      background-color: #f9f8f3;
      font-size: 14px;
      color: #8f8c89;
      font-weight: 600;
      border-bottom: 1px solid #ebe8e5;
      padding: 5px 16px;
      &.active {
        border-bottom: 1px solid transparent;
        padding: 8px 16px;
        background: white;
      }
    }
  }
}
</style>