import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

//adding vue router
import VueRouter from 'vue-router'
import Routes from './routes.js';
import { store } from './store/store.js';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
//   default mode is "hash"
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')
