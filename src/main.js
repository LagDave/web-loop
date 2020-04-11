import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import VueRouter from "vue-router";
import routes from "./utils/routes.js";
import AOS from "aos";
import "aos/dist/aos.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({ routes: routes });

new Vue({
  created() {
    AOS.init();
  },
  render: h => h(App),
  router
}).$mount("#app");
