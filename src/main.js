import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

import pluginCompontent from './lib/globel_components';

Vue.config.productionTip = false;
Vue.use(pluginCompontent);
Vue.use(Mint);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
