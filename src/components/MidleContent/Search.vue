<template>
  <div class="header-finder">
    <form >
      <input class="header-finder-field" type="text" placeholder="Поиск по сайту" tabindex="0" />
      <button class="button-global header-finder-button" tabindex="0" title="отменить поиск">
        <svg class="primary-icon">
          <use xlink:href="../sprite-manual.svg#finder-icon" />
        </svg>
      </button>
      <button
        class="button-global header-finder-button"
        type="submit"
        title="начать поиск"
        tabindex="0"
      >
        <svg class="primary-icon">
          <use xlink:href="../sprite-manual.svg#close-icon" />
        </svg>
      </button>
    </form>
  </div>
</template>
<script>
export default {};
</script>