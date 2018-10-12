import Vue from 'vue'
import App from './App.vue'
import './assets/gloable.css'
import './rem/rem.js'
import store from './store';
import router from './router/router';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);
Vue.config.productionTip = false;
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')