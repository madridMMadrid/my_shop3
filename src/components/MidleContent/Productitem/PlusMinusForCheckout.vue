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
import { mapActions } from "vuex";

export default {
  props: ["price", "AllInfoForProduct"],
  data() {
    return {
      summa: 1,
      totalSum: this.price,
    };
  },
  watch: {
    price() {
      this.totalSum = this.price * this.summa
    }
  },
  methods: {
    ...mapActions("products", ["plusQty", "minusQty"]),

    moreCaunt() {
      this.summa += 1;
      this.totalSum += this.price;
      this.$emit("backSumm", {
        sum: this.summa,
      });
      this.$emit("totalCurrentSummMore", {
        total: this.totalSum,
      });
      this.plusQty(this.AllInfoForProduct);
    },
    lessCaunt() {
      if (this.summa <= 1) {
        return;
      }
      this.summa -= 1;
      this.totalSum -= this.price;
      this.$emit("backSumm", {
        sum: this.summa,
      });
      this.$emit("totalCurrentSummLess", {
        total: this.totalSum,
      });
      this.minusQty(this.AllInfoForProduct);
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
      content: "+";
    }
  }
  & .less {
    &:before {
      content: "-";
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