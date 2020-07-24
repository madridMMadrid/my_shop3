
<template>
  <div>
    <div class="review_item">
      <div class="review_info">
        <div class="review_stars">
          <span class="review_date">20.04.2020</span>
          <div class="vote vote_small">
            <b-icon-star-fill v-for="(value, i) in 5" :key="i" />
          </div>
        </div>
        <div class="wrap autor">
          <span class="review_author">Валерий</span>
          <div></div>
        </div>
      </div>
      <div class="review_text">
        <p>Заказал мебель для домашнего кабинета. нареканий нет, всем доволен.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: ['info']
};
</script>