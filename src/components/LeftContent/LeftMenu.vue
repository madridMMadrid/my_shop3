<template>
  <div>
    <div class="shadow-wrap">
      <router-link to="/" tag="a">
        <figure class="logo">
          <picture>
            <source srcset="images/logo.png" media="min-width: 800px" />
            <img src="../../assets/images/logo.png" alt="Prime Wood" title="Some Site" />
          </picture>
        </figure>
      </router-link>
      <div class="side-menu">
        <router-link
          v-for="(item, index) in menuList"
          :key="index"
          :to="item.url"
          tag="a"
          class="side-menu-item d-flex ai-c"
          active-class="active"
        >
          <img class="side-menu-item-icon" src="../../assets/images/furniture-staff_brown.png" />
          <div class="side-menu-item-title">{{ item.text }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("menu", {
      menuList: "items"
    })
  }
};
</script>
</script>