import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'
import "./assets/scss/global.scss";
import "./assets/scss/vars.scss";

Vue.config.productionTip = false;

Vue.use(VModal)

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
