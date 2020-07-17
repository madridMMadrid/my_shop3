<template>
  <div class="l-box small-filters dropdown-button" role="button" tabindex="0">
    <div class="small-filters-header d-flex">
      <div class="small-filters-text">Сортировать:</div>
      <div class="small-filters-button">
        <div class="small-filters-text">Сначала дешевые</div>
        <svg class="small-filters-icon">
          <use xlink:href="../sprite-manual.svg#dropdown-icon" />
        </svg>
      </div>
    </div>
    <div class="small-filters-list dropdown-list">
      <div class="small-filters-list-item is-active" role="button">Сначала дешевые</div>
      <div class="small-filters-list-item" role="button">Сначала дорогие</div>
      <div class="small-filters-list-item" role="button">По новизне</div>
      <div class="small-filters-list-item" role="button">По популярности</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>