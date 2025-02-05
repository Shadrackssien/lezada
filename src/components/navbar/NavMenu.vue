<script setup>
import { ref } from "vue";
import { ArrowDown } from "../icons";
import { useRoute } from "vue-router";

import {
  HomeMenu,
  ShopMenu,
  ElementsMenu,
  PagesMenu,
  BlogMenu,
} from "../navbar";

const route = useRoute();
const activeDropdown = ref(null);

const links = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Shop",
    route: "/shop",
  },
  {
    name: "Elements",
    route: "/",
  },
  {
    name: "Pages",
    route: "/",
  },
  {
    name: "Blog",
    route: "/blog",
  },
];
</script>

<template>
  <nav class="hidden lg:flex">
    <ul class="flex gap-16">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="group flex items-center gap-[2px] relative"
        @mouseenter="activeDropdown === link.name"
        @mouseleave="activeDropdown !== link.name"
      >
        <router-link
          :to="link.route"
          class="relative py-[28px] font-semibold text-[#7e7e7e] group-hover:text-[#333] transition-colors duration-400"
        >
          <span class="relative">
            {{ link.name }}
            <span
              class="absolute left-0 bottom-0 w-full h-[1.5px] bg-[#333] scale-x-0 origin-right transition-transform duration-400 group-hover:scale-x-100 group-hover:origin-left"
            ></span>
          </span>
        </router-link>
        <ArrowDown
          class="mt-1 text-[#d1d5dc] group-hover:text-[#333] transition-colors duration-400"
        />
        <!-- Dropdown Menus -->

        <!-- 1. Home Menu -->
        <div
          v-if="link.name === 'Home'"
          class="absolute left-0 top-full bg-white shadow-lg w-[90%] opacity-0 transform translate-y-10 scale-y-100 origin-bottom transition-all duration-400 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"
        >
          <HomeMenu />
        </div>

        <!-- 2. Shop Menu -->
        <div
          v-if="link.name === 'Shop'"
          class="absolute left-0 top-full bg-white shadow-lg w-[90%] opacity-0 transform translate-y-10 scale-y-100 origin-bottom transition-all duration-400 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"
        >
          <shop-menu />
        </div>

        <!-- 3. Elements Menu -->
        <div
          v-if="link.name === 'Elements'"
          class="absolute left-0 top-full bg-white shadow-lg w-[90%] opacity-0 transform translate-y-10 scale-y-100 origin-bottom transition-all duration-400 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"
        >
          <ElementsMenu />
        </div>

        <!-- 4. Pages Menu -->
        <div
          v-if="link.name === 'Pages'"
          class="absolute left-0 top-full bg-white shadow-lg w-[90%] opacity-0 transform translate-y-10 scale-y-100 origin-bottom transition-all duration-400 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"
        >
          <PagesMenu />
        </div>

        <!-- 5. Blog Menu -->
        <div
          v-if="link.name === 'Blog'"
          class="absolute left-0 top-full bg-white shadow-lg w-[90%] opacity-0 transform translate-y-10 scale-y-100 origin-bottom transition-all duration-400 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"
        >
          <BlogMenu />
        </div>
      </li>
    </ul>
  </nav>
</template>
