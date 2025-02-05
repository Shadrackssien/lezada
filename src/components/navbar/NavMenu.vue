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

const handleMouseEnter = (linkName) => {
  activeDropdown.value = linkName;
};

const handleMouseLeave = () => {
  activeDropdown.value = null;
};
</script>

<template>
  <nav class="hidden lg:flex">
    <ul class="flex gap-16">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="group flex items-center gap-[2px] relative"
        @mouseenter="handleMouseEnter(link.name)"
        @mouseleave="handleMouseLeave()"
      >
        <router-link
          :to="link.route"
          class="relative py-[28px] font-semibold text-[#7e7e7e] group-hover:text-[#333] transition-colors duration-500"
        >
          <span class="relative">
            {{ link.name }}
            <span
              class="absolute left-0 bottom-0 w-full h-[1px] bg-[#333] scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left"
            ></span>
          </span>
        </router-link>
        <ArrowDown
          class="mt-1 text-[#d1d5dc] group-hover:text-[#333] transition-colors duration-500"
        />

        <!-- Dropdown Menus -->
        <!-- 1. Home Menu -->
        <div
          v-show="link.name === 'Home'"
          @mouseenter="handleMouseEnter('Home')"
          @mouseleave="handleMouseLeave()"
          :class="
            activeDropdown === 'Home'
              ? 'group-hover:opacity-100 group-hover:translate-y-0'
              : 'opacity-0 pointer-events-none'
          "
          class="absolute left-[50%] top-full bg-white shadow-lg min-w-[1200px] opacity-0 transform translate-x-[-28%] translate-y-10 scale-y-100 origin-bottom transition-all duration-500 ease-in-out"
        >
          <HomeMenu />
        </div>

        <!-- 2. Shop Menu -->
        <div
          v-show="link.name === 'Shop'"
          @mouseenter="handleMouseEnter('Shop')"
          @mouseleave="handleMouseLeave()"
          :class="
            activeDropdown === 'Shop'
              ? 'group-hover:opacity-100 group-hover:translate-y-0'
              : 'opacity-0 pointer-events-none'
          "
          class="absolute left-0 top-full bg-white shadow-lg min-w-[1120px] opacity-0 transform translate-x-[-35%] translate-y-10 scale-y-100 origin-bottom transition-all duration-500 ease-in-out"
        >
          <ShopMenu />
        </div>

        <!-- 3. Elements Menu -->
        <div
          v-show="link.name === 'Elements'"
          @mouseenter="handleMouseEnter('Elements')"
          @mouseleave="handleMouseLeave()"
          :class="
            activeDropdown === 'Elements'
              ? 'group-hover:opacity-100 group-hover:translate-y-0'
              : 'opacity-0 pointer-events-none'
          "
          class="absolute left-[50%] top-full bg-white shadow-lg min-w-[1200px] opacity-0 transform translate-x-[-50%] translate-y-10 scale-y-100 origin-bottom transition-all duration-500 ease-in-out"
        >
          <ElementsMenu />
        </div>

        <!-- 4. Pages Menu -->
        <div
          v-show="link.name === 'Pages'"
          @mouseenter="handleMouseEnter('Pages')"
          @mouseleave="handleMouseLeave()"
          :class="
            activeDropdown === 'Pages'
              ? 'group-hover:opacity-100 group-hover:translate-y-0'
              : 'opacity-0 pointer-events-none'
          "
          class="absolute left-0 top-full bg-white shadow-lg min-w-[250px] opacity-0 transform translate-y-10 scale-y-100 origin-bottom transition-all duration-500 ease-in-out"
        >
          <PagesMenu />
        </div>

        <!-- 5. Blog Menu -->
        <div
          v-show="link.name === 'Blog'"
          @mouseenter="handleMouseEnter('Blog')"
          @mouseleave="handleMouseLeave()"
          :class="
            activeDropdown === 'Blog'
              ? 'group-hover:opacity-100 group-hover:translate-y-0'
              : 'opacity-0 pointer-events-none'
          "
          class="absolute left-0 top-full bg-white shadow-lg min-w-[250px] opacity-0 transform translate-y-10 scale-y-100 origin-bottom transition-all duration-500 ease-in-out"
        >
          <BlogMenu />
        </div>
      </li>
    </ul>
  </nav>
</template>
