import Vue from 'vue';
import App from './App.vue';

import { store } from './store';
import router from './router';
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
    // import VueCarousel from '@chenfengyuan/vue-carousel';
Vue.use(BootstrapVueIcons)


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