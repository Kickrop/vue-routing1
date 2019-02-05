import Vue from 'vue'
import VueRouter from 'vue-router';/*any name after import*/
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history', /*no # mode*/
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
