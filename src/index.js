import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'swiper/dist/css/swiper.css';
import 'animate.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';

Vue.use(BootstrapVue);
Vue.use(VueAwesomeSwiper);

const app = new Vue({
  router,
  store,
  render: h => h(App)
})
app.$mount('#app');