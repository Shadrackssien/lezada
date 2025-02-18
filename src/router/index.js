import { createRouter, createWebHistory } from "vue-router";
import {
  AboutUs,
  Blog,
  Checkout,
  Compare,
  ContactUs,
  FAQ,
  Home,
  Login,
  MyAccount,
  NotFound,
  OrderTracking,
  ProductDetails,
  Shop,
  ShoppingCart,
  Signup,
  Wishlist,
} from "../pages";

import headerOne from "../assets/header-one.png";
import headerTwo from "../assets/header-two.jpg";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "home",
    },
  },
  {
    path: "/about",
    name: "About Us",
    component: AboutUs,
    meta: {
      layout: "default",
      title: "About",
      backgroundImage: headerOne,
    },
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    meta: {
      layout: "default",
      title: "Blog",
      backgroundImage: headerOne,
    },
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
    meta: {
      layout: "default",
      title: "Checkout",
      backgroundImage: headerOne,
    },
  },
  {
    path: "/compare",
    name: "compare",
    component: Compare,
    meta: {
      layout: "default",
      title: "Compare",
      backgroundImage: headerOne,
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactUs,
    meta: {
      layout: "default",
      title: "Contact",
      backgroundImage: headerOne,
    },
  },
  {
    path: "/faq",
    name: "faq",
    component: FAQ,
    meta: {
      layout: "default",
      title: "F.A.Q",
      backgroundImage: headerOne,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      layout: "default",
      title: "Customer Login",
      backgroundImage: headerTwo,
    },
  },
  {
    path: "/my-account",
    name: "my account",
    component: MyAccount,
    meta: {
      layout: "default",
      title: "My Account",
      backgroundImage: headerTwo,
    },
  },
  {
    path: "/not-found",
    name: "not found",
    component: NotFound,
    meta: {
      layout: "home",
    },
  },
  {
    path: "/order-tracking",
    name: "order-tracking",
    component: OrderTracking,
    meta: {
      layout: "default",
      title: "Order Tracking",
      backgroundImage: headerTwo,
    },
  },
  {
    path: "/product-details",
    name: "product-details",
    component: ProductDetails,
    meta: {
      layout: "default",
      title: "Product Details",
      backgroundImage: headerOne,
    },
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
    meta: {
      layout: "default",
      title: "Shop",
      backgroundImage: headerOne,
    },
  },
  {
    path: "/cart",
    name: "ShoppingCart",
    component: ShoppingCart,
    meta: {
      layout: "default",
      title: "Cart",
      backgroundImage: headerTwo,
    },
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
    meta: {
      layout: "default",
      title: "Customer Register",
      backgroundImage: headerTwo,
    },
  },
  {
    path: "/wishlist",
    name: "wishlist ",
    component: Wishlist,
    meta: {
      layout: "default",
      title: "Wishlist",
      backgroundImage: headerTwo,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
