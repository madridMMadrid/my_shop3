<template>
  <div>
    <nav class="l-box header-menu">
      <router-link
        v-for="(item, index) in menuListTop"
        :key="index"
        :to="item.url"
        tag="a"
        class="link-orange header-menu-item"
        active-class="-is-active"
      >{{ item.text }}</router-link>
    </nav>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("menu", {
      menuListTop: "topMenu"
    })
  }
};
</script>