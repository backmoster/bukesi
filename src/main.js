// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',//删去
  router,
  template: '<App/>',
  components: { App }
});//.$mount("#app");这样也能成功挂载

router.push('/literature');
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})