import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './vuex/store';
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = App.constructor;
new Vue({
  router,
  vuetify,
  store: store,
  render: (h) => h(App),
}).$mount('#app');
