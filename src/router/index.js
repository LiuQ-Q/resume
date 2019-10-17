import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Main from '../pages/Main.vue';

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: Main
    }
  ]
});