import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 路由数组 - 存放所有路由
const routerList = [];
function importAll(routerArr) {
  // 该函数用于将所有分区路由中的路由添加到路由数组
  routerArr.keys().forEach((key) => {
    console.log(key);
    routerList.push(routerArr(key).default);
  });
}
// eslint-disable-next-line no-undef
importAll(require.context(".", true, /\.routes\.js/));

const routes = [...routerList];

const router = new VueRouter({
  routes,
});

export default router;
