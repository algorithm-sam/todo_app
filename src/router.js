import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import AppContainer from "./views/AppContainer.vue";
import FocusTodoView from "./views/Todo/FocusTodoView.vue";
import Todo from "./views/Todo/Index.vue";
import RecentCategory from "./views/Todo/RecentCategory.vue";
import TodoCalenderView from "./views/Todo/TodoCalenderView.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: AppContainer,
      children: [
        {
          path: "/",
          name: "home",
          component: Home
        },
        {
          path: "/register",
          name: "register",
          component: Register
        },
        {
          path: "/login",
          name: "login",
          component: Login
        }
      ]
    },

    {
      path: "/todo",
      name: "todo",
      component: Todo,
      children: [
        {
          path: "",
          name: "recent",
          component: RecentCategory
        },
        {
          path: "calender",
          name: "calender",
          component: TodoCalenderView
        },
        {
          path: "focus",
          name: "focus",
          component: FocusTodoView
        }
      ]
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
