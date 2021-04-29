import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
import firstpage from "./componets/pages/myFirstVue.vue";
import secondpage from "./componets/pages/secondVue.vue";

const routes = [{
  path: "/my-new-route",
  component: firstpage
}, {
  path: "/second-route",
  component: secondpage
}];

export default new Router({
  mode: "history",
  routes
});