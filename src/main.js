import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 按需引入 vant 组件
import { Button } from "vant";

// 使用 vant 组件
Vue.use(Button);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");