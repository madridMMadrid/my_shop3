<template>
  <div>
    <div class="free-design">
      <label class="typo__label">Параметры</label>
      <MultiCel v-for="(value, i) in 2" :key="i"/>
    </div>
  </div>
</template>
<script>

import MultiCel from './multiselect'

export default {
  components: {
    MultiCel
  }
};
</script>


<style lang="scss">

</style>