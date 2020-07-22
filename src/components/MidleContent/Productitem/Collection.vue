<template>
  <listOfProducts :products="getFurniture"/>
</template>

<script>
import { mapGetters } from 'vuex';
import listOfProducts from './ListOfProducts';

export default {
  components: {
    listOfProducts,
  },

  computed: {
    ...mapGetters("products", [
      'getFurniture',
    ]),
  },
};
</script>

<style>
</style>