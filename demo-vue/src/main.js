import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design'
import VueRouter from 'vue-router'
// import Routers from './router.js'
import 'view-design/dist/styles/iview.css'
import LuckDraw from 'vue-luck-draw'
Vue.config.productionTip = false;
Vue.use(ViewUI);
Vue.use(VueRouter);
Vue.use(LuckDraw);
// const RouterConfig = {
//   routes: Routers
// };
// const router = new VueRouter(RouterConfig);

new Vue({
  el:"#app",
  // router:router,
  render: h => h(App),
}).$mount('#app');
