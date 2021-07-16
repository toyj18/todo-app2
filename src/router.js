import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/taskpage",
      name: "taskpage",
      component: () => import('./components/TaskPage')
    }
    // {
    //   path: "/tutorials/:id",
    //   name: "tutorial-details",
    //   component: () => import("./components/Tutorial")
    // }
    // {
    //   path: "/add",
    //   name: "add",
    //   component: () => import("./components/AddTutorial")
    // }
  ]
});