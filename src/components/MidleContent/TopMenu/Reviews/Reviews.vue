
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
              <b-icon-star-fill v-for="(value, i) in value.star" :key="i" />
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

    </div>
  </div>
</template>
<script>
import reviews from "./RewItem";
export default {
  components: {
    reviews,
  },
  data() {
    return {
      review: [
        {
          name: "JimBeam",
		  data: "12:12:12",
		  star: 5,
          rev:
            "Заказал мебель для домашнего кабинета. нареканий нет, всем доволен.",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.rev {
  font-size: 30px;
  font-weight: 400;
  margin: 0.8em 0.2em;
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