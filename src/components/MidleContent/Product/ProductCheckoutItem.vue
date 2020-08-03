// TEST !!!
<template id="buy-box">
  <div class="row">
    <img :src="buy_data.img" />
    <h4>{{buy_data.title}}</h4>
    <p>$ {{buy_data.price}}</p>
    <div class="qty-minus" v-on:click="minusQty(buy_data)">-</div>
    <div class="qty">{{buy_data.qty}}</div>
    <div class="qty-plus" v-on:click="plusQty(buy_data)">+</div>
    <div class="del" v-on:click="removeItem(buy_data)">Remove</div>
    <div class="totalprice">{{buy_data.total}}</div>
  </div>
</template>
<script>
export default {
  props: ["buy_data", "buyitems"],
  methods: {
    removeItem(buy_data) {
      var index = this.$parent.buyitems.indexOf(buy_data);
      this.$parent.buyitems.splice(index, 1);
      if (buy_data.id == "beer") {
        beerClick = 0;
      } else if (buy_data.id == "eco-bag") {
        ecoClick = 0;
      } else {
        paperClick = 0;
      }
    },
    plusQty(buy_data) {
      buy_data.qty += 1;
      buy_data.total = buy_data.qty * buy_data.price;
    },
    minusQty(buy_data) {
      buy_data.qty -= 1;
      if (buy_data.qty < 0) {
        buy_data.qty = 0;
      }
      buy_data.total = buy_data.qty * buy_data.price;
    },
  },
};
</script>