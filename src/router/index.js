import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Shop from "../pages/Shop.vue";
import Blog from "../pages/Blog.vue";
import ShoppingCart from "../pages/ShoppingCart.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/cart",
    name: "ShoppingCart",
    component: ShoppingCart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
