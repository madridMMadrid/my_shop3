import Vue from 'vue';
import App from './App.vue';

import { store } from './store';
import router from './router';
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import rate from 'vue-rate'
import 'vue-rate/dist/vue-rate.css'

import VueDadata from 'vue-dadata'
Vue.use(VueDadata)

import VueLodash from 'vue-lodash'
import lodash from 'lodash'
Vue.use(VueLodash, { name: 'custom' , lodash: lodash })

import ProductZoomer from 'vue-product-zoomer'
Vue.use(ProductZoomer)

// Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
    // import VueCarousel from '@chenfengyuan/vue-carousel';
Vue.use(BootstrapVueIcons)

Vue.use(rate)


// Vue.component(VueCarousel.name, VueCarousel);

// import VueResource from 'vue-resource';

// Vue.use(VueResource);
// Vue.http.options.root = 'http://localhost:8888/back/'

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})