<template>
  <listOfProducts :products="getNotebooks"/>
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
      'getNotebooks',
    ]),
  },
};
</script>

<style>
</style>

