import Vue from "vue";
import VueRouter from "vue-router";
import { FormPage } from "@/pages";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "FormPage",
    component: FormPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
