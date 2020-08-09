import Vue from 'vue';
import MainTable from './components/elements/MainTable.vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.component('main-table', MainTable);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
