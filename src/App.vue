<template>
  <div>
    <div id="nav" :class="{sticky:active}">
      <div id="nav-container" :class="toggleNavClass()">
        <div class="wrap_header">
          <div class="logo">
            <img src="./assets/images/logo_s.svg" alt />
          </div>
          <div class="info">
            <Info :location="locationHeader" />
          </div>
          <div class="cart">
            <Cart />
          </div>
        </div>
      </div>
    </div>
    <div class="home-page">
      <div class="l-global d-flex ai-fs jc-c">
        <div class="first-screen-background"></div>

        <div class="left-column">
          <LeftMenu />
          <FilterCollections />
          <FreeDesign />
        </div>

        <main class="l-main">
          <header class="header">
            <div class="l-container">
              <Info  :location="locationContent" />
              <TopMenu />

              <div class="l-box d-flex jc-sb ai-fs">
                <Search />
                <Cart />
              </div>

              <Services />
            </div>
            <div class="banner-slider slider">
              <router-view></router-view>
            </div>
          </header>
        </main>
      </div>
      <Footer />
    </div>
    <go-top></go-top>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GoTop from '@inotom/vue-go-top';

import LeftMenu from "./components/LeftContent/LeftMenu";
import FilterCollections from './components/LeftContent/FiltrCollections'
import FreeDesign from "./components/LeftContent/FreeDesign";

import Info from "./components/MidleContent/Info";
import Search from "./components/MidleContent/Search";
import Cart from "./components/MidleContent/Cart";
import Services from "./components/MidleContent/Services";
import TopMenu from "./components/MidleContent/TopMenu/TopMenu";

import Footer from "./components/Footer/Footer";

export default {
  data() {
    return {
      active: false,
      locationHeader: "header_bv-modal-example",
      locationContent: "content_bv-modal-example"
    };
  },
  components: {
    LeftMenu,
    FilterCollections,
    FreeDesign,
    
    Info,
    TopMenu,
    Search,
    Cart,
    Services,
    Footer,
    GoTop
  },
  methods: {
    toggleNavClass() {
      if (this.active == false) {
        return "nav";
      } else {
        return "sticky-nav";
      }
    }
  },
  mounted() {
    window.document.onscroll = () => {
      let navBar = document.getElementById("nav");
      if (window.scrollY > 100) {
        // console.log('window.scrollY ', window.scrollY )
        this.active = true;
      } else {
        this.active = false;
      }
    };
  }
};
</script>
<style lang="scss">
@import './assets/styles/globalStyle.scss';
#nav {
  transition: 500ms;
  & .wrap_header {
    display: flex;
    & .logo {
      padding: 3px;
      margin: auto;
    }
    & .info {
      display: flex;
      margin: auto;
    }
    & .cart {
      display: flex;
      margin: auto;
    }
    & .header-basket {
      margin: 0 10px;
      min-width: 200px;
      padding: 2px 0;
      & .order-button {
        position: relative;
        left: 50%;
        transform: translate(-50%);
      }
      & .header-basket-sum {
        margin-bottom: 5px;
      }
    }
  }
}

.sticky-nav {
  transition: 500ms;
  padding: 5px;
}

#nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
}

#nav.sticky {
  transition: 550ms;
  box-shadow: 0px 15px 10px -15px #111;
  z-index: 9;
  justify-content: center;
}
</style>