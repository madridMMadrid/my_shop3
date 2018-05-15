import Vue from 'vue';
import App from './App.vue';

import {store} from './store';
import {router} from './routes.js';

import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:8888/back/'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
