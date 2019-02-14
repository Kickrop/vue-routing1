import Vue from 'vue'
import VueRouter from 'vue-router';/*any name after import*/
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history', /*no # mode*/
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash};
    }
    return {x: 0, y: 700};
  }
});

router.beforeEach((to, from, next) => {
  console.log('global befireeach');
  next();
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
