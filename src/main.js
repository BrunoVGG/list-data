import Vue from 'vue'
import VueRouter from "vue-router";
import Vuex from "vuex";
import axios from "axios";
import App from './App.vue'
import routes from "./routes/routes";
import store from "./store/";
import VueTextareaAutosize from 'vue-textarea-autosize'
import "vue-loading-overlay/dist/vue-loading.css";

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueTextareaAutosize)

window.axios = axios;

Vue.config.productionTip = false;

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: "active"
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
