// TEST!!!
<template> 
  <div>
    <div id="product">
      <ProductCheckoutnBox v-for="(item, i) in items" :item_data="item" :key="i"></ProductCheckoutnBox>
    </div>
    <div id="cart">
      <div id="head">
        <h3>Shopping Cart</h3>
        <div id="price">Price</div>
        <div id="quantity">Quantity</div>
        <div id="total">Total</div>
      </div>
      <ProductCheckoutItem v-for="(buyitem, i) in buyitems" :key="i" :buy_data="buyitem"></ProductCheckoutItem>
      <h5 v-if="total()">Sum: $ {{total()}}</h5>
    </div>
  </div>
</template>
<script>
import ProductCheckoutItem from './ProductCheckoutItem'
import ProductCheckoutnBox from './ProductCheckoutBox'
export default {
  data: {
    items: [
      {
        img: "https://chenyiya.com/codepen/product-1.jpg",
        title: "Beer Bottle",
        price: "25",
        id: "beer",
      },
      {
        img: "https://chenyiya.com/codepen/product-2.jpg",
        title: "Eco Bag",
        price: "73",
        id: "eco-bag",
      },
      {
        img: "https://chenyiya.com/codepen/product-3.jpg",
        title: "Paper Bag",
        price: "35",
        id: "paper-bag",
      },
    ],
    buyitems: [],
  },
  methods: {
    total: function () {
      var sum = 0;
      this.buyitems.forEach(function (buyitem) {
        sum += parseInt(buyitem.total);
      });
      return sum;
    },
  },
};
</script> 
<style lang="scss" scoped>
html,
body {
  background-color: #eee;
  font-family: calibri, sans-serif;
}

#product {
  .box {
    width: 230px;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    display: inline-block;
    margin: 0 10px;
    position: relative;
    img {
      width: 230px;
    }
    i {
      width: 50px;
      height: 50px;
      background: #ed277f;
      color: #ffffff;
      border-radius: 25px;
      text-align: center;
      line-height: 50px;
      font-size: 1.4rem;
      position: absolute;
      right: 20px;
      top: 150px;
      box-shadow: 0 0 4px 2px rgba(80, 80, 80, 0.1);
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.05);
      }
    }
    h2 {
      margin-left: 20px;
    }
    p {
      margin-left: 20px;
    }
  }
}
#cart {
  margin-top: 50px;
  overflow: hidden;
  #head {
    width: 100%;
    border-bottom: 1px solid #bfbfbf;
    height: 40px;
    display: block;
    h3 {
      display: inline-block;
      line-height: 40px;
      margin: 0;
    }
    #price {
      display: inline-block;
      color: #777777;
      margin-left: 200px;
      line-height: 40px;
    }
    #quantity {
      display: inline-block;
      color: #777777;
      margin-left: 100px;
      line-height: 40px;
    }
    #total {
      display: inline-block;
      color: #777777;
      line-height: 40px;
      float: right;
    }
  }
  .row {
    width: 100%;
    border-bottom: 1px solid #bfbfbf;
    overflow: hidden;
    padding: 10px 0;
    display: block;
    float: left;
    img {
      height: 100px;
      float: left;
    }
    h4 {
      float: left;
      margin: 0;
      line-height: 100px;
      margin-left: 20px;
      width: 100px;
    }
    p {
      float: left;
      margin: 0;
      width: 80px;
      line-height: 100px;
      margin-left: 35px;
      text-align: center;
    }
    .qty-minus {
      float: left;
      width: 20px;
      line-height: 100px;
      margin-left: 60px;
      text-align: center;
      cursor: pointer;
    }
    .qty {
      float: left;
      width: 20px;
      line-height: 100px;
      margin-left: 20px;
      text-align: center;
    }
    .qty-plus {
      float: left;
      width: 20px;
      line-height: 100px;
      margin-left: 20px;
      text-align: center;
      cursor: pointer;
    }
    .del {
      float: left;
      width: 80px;
      line-height: 100px;
      margin-left: 60px;
      cursor: pointer;
      text-decoration: underline;
      color: #ed277f;
    }
    .totalprice {
      float: left;
      width: 80px;
      line-height: 100px;
      margin-left: 10px;
      text-align: right;
    }
    .row p::before,
    .box p::before,
    .totalprice::before {
      content: "$";
    }
  }
  h5 {
    font-size: 1.2rem;
    text-align: right;
  }
}
</style>
   