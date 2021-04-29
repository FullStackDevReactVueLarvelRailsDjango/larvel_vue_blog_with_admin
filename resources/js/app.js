require("./bootstrap");
import Vue from "vue";
import router from "./router";

Vue.component("mainapp", require("./componets/mainapp.vue").default);
const app = new Vue({
  el: "#app",
  router: router
});