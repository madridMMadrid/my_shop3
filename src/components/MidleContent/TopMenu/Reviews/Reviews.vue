
<template>
  <div class="l-container">
    <h1 class="rev">Отзывы Прайм Вуд</h1>
    <div class="wrapper">
      <h1 class="h1">Отзывы клиентов</h1>

      <div class="review_item" v-for="(value, i) in review" :key="i">
        <div class="review_info">
          <div class="review_stars">
            <span class="review_date">{{ value.data }}</span>
            <div class="vote vote_small">
              <!-- <b-icon-star-fill v-for="(value, i) in value.star" :key="i" /> -->
              <rate class="RateCustom" :length="5" :value="value.star" :readonly="true" />
            </div>
          </div>
          <div class="wrap autor">
            <span class="review_author">{{ value.name }}</span>
            <div></div>
          </div>
        </div>
        <div class="review_text">
          <p>{{ value.rev }}</p>
        </div>
      </div>
      <div class="b_ttl center">Добавить отзыв</div>
      <form id="js_reviews_form">
        <div class="review_form form_border_style">
          <div class="review-rate">
            <div class="review-rate__ttl">Ваша оценка</div>
            <div class="review-rate__stars">
              <div class="vote vote_big js-rating" data-name="rating" style="cursor: pointer;">
                <symbol id="icon-heart" class="icon" viewBox="0 0 25 25">
                  <path
                    d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z"
                  ></path>
                </symbol>
                <rate class="RateCustom" :length="5" :value="0" v-model="myRate" />

                <!-- <div>
                  <StarRating v-model="rating" :show-rating="false" :item-size="20" :fill="red" :spacing="10" />
                  <div>
                    <a href="#" @click.prevent="rating = 0">Reset Rating</a>
                  </div>
                </div>-->
              </div>
            </div>
            <label class="input_rating" style="padding-bottom: 0;"></label>
          </div>
          <div class="wrap_inputs">
            <label class="input_name">
              <input type="text" name="name" placeholder="Имя*" value required />
            </label>
            <label class="input_company">
              <input type="text" name="company" placeholder="Компания" value />
            </label>
          </div>
          <label class="input_text">
            <textarea name="text" placeholder="Ваш отзыв*" required></textarea>
          </label>
          <input type="submit" class="orange_btn_big" value="Отправить" />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { StarRating } from "vue-rate-it";
import reviews from "./RewItem";
export default {
  name: "Reviews",
  components: {
    reviews,
    StarRating,
  },
  methods: {},
  data() {
    return {
      myRate: 0,
      rating: 3,
      review: [
        {
          name: "JimBeam",
          data: "12:12:12",
          star: 3,
          rev:
            "Заказал мебель для домашнего кабинета. нареканий нет, всем доволен.",
        },
        {
          name: "Daffy Duck",
          data: "12:01:14",
          star: 4,
          rev:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro inventore aliquam labore, deserunt quod cum architecto aperiam obcaecati odit animi accusamus vitae, distinctio, molestias dolores sunt voluptatibus necessitatibus ex earum delectus nemo? Maiores cumque quam, explicabo illum distinctio veniam voluptatem ipsam. Ex quaerat vero ut ducimus quas delectus mollitia dolorem.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.b_ttl {
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 20px;
  text-align: center;
}
#js_reviews_form {
  & input[type="text"],
  textarea {
    border: 1px solid #d6d5cc;
    border-radius: 3px;
    height: 30px;
    padding: 5px 10px;
    width: 100%;
  }
  & textarea {
    height: 110px;
  }
  .review {
    &_form {
      background-color: #f3f1ef;
      border-radius: 10px;
      margin: 0 auto 30px;
      padding: 30px;
      position: relative;
      width: 530px;
      & .orange_btn_big {
        display: block;
        margin: 0 auto;
        width: 140px;
        background: #ff9e24;
        border: none;
        border-radius: 3px;
        border: none;
        color: #fff;
        cursor: pointer;
        font-weight: 700;
        padding: 10px;
        transition: all 0.2s ease;
        &:hover {
          transition: all 0.2s ease;
          background-color: #ffbf24;
        }
      }
    }
    &-rate {
      text-align: center;
      margin-bottom: 10px;
      &__ttl {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 10px;
      }
    }
  }
  .wrap_inputs {
    margin: 0 -10px;
    display: flex;
    & label {
      width: 100%;
      padding: 0 10px 15px;
    }
  }
  .input_text {
    padding-bottom: 15px;
    width: 100%;
    overflow: hidden;
    display: block;
  }
}

.b-icon.bi {
  color: #ff9e24;
  margin: 3px 1px;
}
p {
  margin: 0 !important;
}
.wrapper {
  border: 1px solid #e7e5d9;
  margin-bottom: 5px;
  padding: 15px;
  & .h1 {
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 20px;
    text-align: center;
  }
  & .review {
    &_item {
      font-size: 14px;
      margin-bottom: 30px;
    }
    &_info {
      padding-left: 0;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    &_stars {
      text-align: right;
      order: 1;
      margin-left: auto;
      margin-bottom: 0;
      align-self: flex-end;
    }
    &_date {
      color: #919191;
    }
    &_author {
      font-weight: 700;
    }
    &_text {
      background-color: #fff;
      border: 2px solid #f3f1ef;
      border-radius: 10px;
      padding: 15px;
      position: relative;
    }
    & .vote {
      font-size: 0;
      margin: 0 -2px;
      height: 20px;
      position: relative;
      width: 105px;
      &.vote_small {
      }
    }
  }
}
</style>
<style lang="scss">
.Rate__star {
  padding: 0;
  & .icon {
    margin: 2px 2px 10px;
  }
}
.RateCustom.Rate .icon {
  width: 17px;
  height: 17px;
}
.RateCustom.Rate .Rate__star.filled {
  color: #ff9e24;
}
.RateCustom.Rate .Rate__star.hover {
  // color: red;
}
.rev {
  font-size: 30px;
  font-weight: 400;
  margin: 0.8em 0.2em;
}
#js_reviews_form {
  & .vue-rate-it-rating {
    justify-content: center;
  }

  & .RateCustom.Rate .icon {
    width: 27px;
    height: 27px;
  }
  & .Rate__star {
    padding: 0;
  }
}
</style>