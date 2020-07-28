<template>
  <div>
    <div class="product-card-buy-count d-flex ai-c">
      <div class="product-card-buy-count-controls">
        <div class="less" @click="lessCaunt()"></div>
        <input class="product-card-buy-count-input" v-model="summa" value="summa" />
        <div class="more" @click="moreCaunt()"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: ['price'],
  data() {
    return {
      summa: 1,
      totalSum: this.price
    };
  },
  methods: {
    moreCaunt() {
      this.summa += 1;
      this.totalSum += this.price
      console.log(this.price);
      this.$emit("backSumm", {
        sum: this.summa,
      });
      this.$emit("totalCurrentSummMore", {
        total: this.totalSum,
      });
    },
    lessCaunt() {
      if (this.summa <= 1) {
        return;
      }
      this.summa -= 1;
      this.totalSum -= this.price
      this.$emit("backSumm", {
        sum: this.summa,
      });
      this.$emit("totalCurrentSummLess", {
        total: this.totalSum,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.product-card-buy-count-controls {
  display: flex;
  & .more,
  .less {
    height: auto;
    align-items: stretch;
    justify-content: center;
    position: relative;
    &:before {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
  }
  & .more {
      &:before {
        content: '+';
      }
  }
  & .less {
      &:before {
        content: '-';
      }
  }
}
.box {
  display: flex;
  align-items: stretch;
  & div {
    background: #888;
  }
}
</style>