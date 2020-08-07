<template>
  <div>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h1>Список товаров</h1>
            <select v-model="selectCategory">
              <option value="0">Все категории</option>
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
              >{{ category.category }}</option>
            </select>

            <select v-model="selectBrand">
              <option value="0">Все бренды</option>
              <option v-for="brand in brands" :key="brand.id" :value="brand.brand">{{ brand.brand }}</option>
            </select>

            <label>Фильтр по цене</label>
            <input v-model.number="minPrice" type="number" />
            <input v-model.number="maxPrice" type="number" />

            <input v-model.trim="inputSearch" type="text" placeholder="Поиск по названию товара" />

            <select v-model="selectSort">
              <option v-for="rule in sortRules" :key="rule.key" :value="rule.key">{{ rule.title }}</option>
            </select>

            <button @click="clear" class="primary small">Сбросить фильтры</button>
            <div class="tab-content d-flex ai-c fw-w product-list">
              <div class="product-card" v-for="product in filteredProducts" :product="product" :key="product.good_id">
                <div class="product-card-title">Стол приставной</div>
                <img class="product-card-image" src="@/assets/images/product-table_brown_c.jpg" />
                <div class="product-card-scale">
                  <div class="product-card-scale-size">90 см</div>
                  <div class="product-card-scale-size">60 см</div>
                  <div class="product-card-scale-size">90 см</div>
                </div>
                <div class="product-card-info">
                  <div
                    class="product-card-info-text green product-key"
                  >Код товара {{ product.good }}</div>
                  <div class="product-card-info-text green product-id">ID {{ product.good_id }}</div>
                  <div class="product-card-info-text green product-id">Бренд {{ product.brand }}</div>
                  <div class="product-card-info-text green product-id">Рейтинг {{ product.rating }}</div>
                  <div class="product-card-info-text black">Срок доставки</div>
                </div>
                <div class="product-card-actions">
                  <svg class="primary-icon product-card-icon" role="button">
                    <use xlink:href="sprite-manual.svg#compare-icon" />
                  </svg>
                </div>
                <div class="product-card-buy d-flex jc-sb">
                  <div class="product-card-buy-price">
                    <span class="product-card-buy-price-text">{{ product.price }}</span>
                    <sup class="product-card-buy-price-currency">руб</sup>
                  </div>
                  <div class="product-card-buy-count d-flex ai-c">
                    <input class="product-card-buy-count-input"  />
                    <div class="product-card-buy-count-controls">
                      <div class="more" @click="moreCaunt()">+</div>
                      <div class="less" @click="lessCaunt()">-</div>
                    </div>
                  </div>
                  <button class="product-card-buy-button button-global button-primary-yellow">
                    <b-icon icon="cart-dash"></b-icon>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      products: [
        {
          good_id: "12",
          good: "Пуфик ASUS",
          category_id: "3",
          brand: "Asus",
          price: "2000",
          rating: "8",
          photo: "asus_video.jpg",
        },
        {
          good_id: "13",
          good: "Пуфик GIGABYTE GT-740",
          category_id: "3",
          brand: "Gigabyte",
          price: "6000",
          rating: "9",
          photo: "gigabyte_video_gt740.jpg",
        },
        {
          good_id: "10",
          good: "Стулья Lenovo A5000",
          category_id: "2",
          brand: "Lenovo",
          price: "11000",
          rating: "3",
          photo: "lenovo_a5000.jpg",
        },
        {
          good_id: "9",
          good: "Стулья Asus Zenfone Laser",
          category_id: "2",
          brand: "Asus",
          price: "12000",
          rating: "6",
          photo: "asus_zenfone_laser.jpg",
        },
        {
          good_id: "14",
          good: "Пуфик GIGABYTE GTX-960",
          category_id: "3",
          brand: "Gigabyte",
          price: "14000",
          rating: "10",
          photo: "gigabyte_video_gtx960.jpg",
        },
        {
          good_id: "4",
          good: "Стол Lenovo G5030",
          category_id: "1",
          brand: "Lenovo",
          price: "16000",
          rating: "7",
          photo: "lenovo_g5030.jpg",
        },
        {
          good_id: "11",
          good: "Стулья Lenovo P90",
          category_id: "2",
          brand: "Lenovo",
          price: "16000",
          rating: "5",
          photo: "lenovo_p90.jpg",
        },
        {
          good_id: "3",
          good: "Стол Lenovo IdeaPad",
          category_id: "1",
          brand: "Lenovo",
          price: "17000",
          rating: "5",
          photo: "lenovo_idea_pad.jpg",
        },
        {
          good_id: "7",
          good: "Стулья Samsung Galaxy A5",
          category_id: "2",
          brand: "Samsung",
          price: "17000",
          rating: "8",
          photo: "samsung_galaxy_a5.jpg",
        },
        {
          good_id: "5",
          good: "Стол Acer Aspire",
          category_id: "1",
          brand: "Acer",
          price: "21000",
          rating: "8",
          photo: "acer_aspire.jpg",
        },
        {
          good_id: "6",
          good: "Стулья Samsung Galaxy A7",
          category_id: "2",
          brand: "Samsung",
          price: "30000",
          rating: "9",
          photo: "samsung_galaxy_a7.jpg",
        },
        {
          good_id: "8",
          good: "Стулья Apple iPhone SE",
          category_id: "2",
          brand: "Apple",
          price: "38000",
          rating: "10",
          photo: "apple_iphone_se.jpg",
        },
        {
          good_id: "1",
          good: "Стол Apple MacBook Air",
          category_id: "1",
          brand: "Apple",
          price: "60000",
          rating: "8",
          photo: "apple_macbook_air.jpg",
        },
        {
          good_id: "2",
          good: "Стол Apple MacBook Pro",
          category_id: "1",
          brand: "Apple",
          price: "70000",
          rating: "9",
          photo: "apple_macbook_pro.jpg",
        },
      ],
      categories: [
        { id: 1, category: "Столы" },
        { id: 2, category: "Стулья" },
        { id: 3, category: "Пуфики" },
      ],
      brands: [
        {
          id: "1",
          brand: "Apple",
        },
        {
          id: "2",
          brand: "Samsung",
        },
        {
          id: "3",
          brand: "Acer",
        },
        {
          id: "4",
          brand: "Lenovo",
        },
        {
          id: "5",
          brand: "Asus",
        },
        {
          id: "6",
          brand: "Gigabyte",
        },
      ],
      sortRules: [
        { key: "good_id:asc", title: "По порядку" },
        { key: "rating:desc", title: "По рейтингу" },
        { key: "price:asc", title: "По цене, сначала дешевые" },
        { key: "price:desc", title: "По цене, сначала дорогие" },
      ],
      inputSearch: "",
      selectCategory: 0,
      selectBrand: 0,
      minPrice: 0,
      maxPrice: 100000,
      selectSort: "good_id:asc",
    };
  },
  computed: {
    filteredProducts: function () {
      // Фильтруем товары
      var filtered = this.products
        // По категории
        .filter((product) => {
          return (
            this.selectCategory == 0 ||
            product.category_id == this.selectCategory
          );
        })

        // По брендам
        .filter((product) => {
          return this.selectBrand == 0 || product.brand == this.selectBrand;
        })

        // По ценам
        .filter((product) => {
          return (
            Number(product.price) >= this.minPrice &&
            Number(product.price) <= this.maxPrice
          );
        })

        // По полю поиска
        .filter((product) => {
          return (
            this.inputSearch == "" ||
            product.good
              .toLowerCase()
              .indexOf(this.inputSearch.toLowerCase()) !== -1
          );
        });

      // Сортируем
      var sorted = _.sortBy(filtered, (product) => {
        return Number(product[this.sortKey]);
      });

      // При необходимости сортируем в обратном направлении
      if (this.sortDir === "desc") {
        sorted = sorted.reverse();
      }

      return sorted;
    },
    sortKey: function () {
      return this.selectSort.split(":")[0];
    },
    sortDir: function () {
      return this.selectSort.split(":")[1];
    },
  },
  mounted: function () {
    // axios
    //     .get('/scripts/catalog.php?needs_data=brands')
    //     .then(response => {
    //         this.products = response.data.data.goods;
    //         this.brands = response.data.data.brands;
    //         this.minPrice = this.getMinPrice();
    //         this.maxPrice = this.getMaxPrice();
    //     });
  },
  methods: {
    getMinPrice: function () {
      return Number(_.minBy(this.products, "price").price);
    },
    getMaxPrice: function () {
      return Number(_.maxBy(this.products, "price").price);
    },
    clear: function () {
      this.inputSearch = "";
      this.selectCategory = 0;
      this.selectBrand = 0;
      this.minPrice = this.getMinPrice();
      this.maxPrice = this.getMaxPrice();
      this.selectSort = "good_id:asc";
    },
  },
};
</script>
<style lang="scss" scaped>
.product-card {
    flex: 0 0 23%;
}
.product-card-buy {
  &-count {
    margin: 0;
    &-controls {
      & .more,
      .less {
        height: 15px;
        width: 25px;
        background: #c5c4c4;
        line-height: 0.9;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Chrome/Safari/Opera */
        -khtml-user-select: none; /* Konqueror */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;
        &:hover {
          cursor: pointer;
          box-shadow: 0 0 40px rgba(0, 0, 0, 0.1) inset;
        }
      }
    }
  }
  &-price {
    display: flex;
    &-currency {
      line-height: inherit;
      top: 0;
    }
  }
  &.jc-sb {
    align-items: center;
  }
}

.raz {
  all: unset;
  -moz-appearance: textfield;
  width: 3em;
  text-align: center;
}
.raz::-webkit-inner-spin-button {
  display: none;
}
</style>