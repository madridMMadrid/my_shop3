<template>
  <div>

    <nav class="header-optional-menu d-flex jc-sb ai-c">
      <router-link
        v-for="(item, index) in services"
        :key="index"
        :to="item.url"
        tag="a"
        class="header-optional-menu-item d-flex ai-c"
        active-class="-is-active"
      >
        <img class="header-optional-menu-icon" src="images/desing-project-icon.png" />
        <div class="header-optional-menu-title">{{ item.text }}</div>
      </router-link>
    </nav>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("menu", {
      services: "service"
    })
  }
};
</script>