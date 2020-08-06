<template>
  <div>
    <div class="product-card-buy-count d-flex ai-c">
      <input class="product-card-buy-count-input" v-model="summa" value="summa" />
      <div class="product-card-buy-count-controls">
        <div class="more" @click="moreCaunt()">+</div>
        <div class="less" @click="lessCaunt()">-</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      summa: 1
    };
  },
  methods: {
    moreCaunt() {
      this.summa += 1;
      this.$emit("backSumm", this.summa);
    },
    lessCaunt() {
      if (this.summa <= 1) {
        return;
      }
      this.summa -= 1;
      this.$emit("backSumm", this.summa);
    }
  }
};
</script>