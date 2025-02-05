<script setup>
import { Search, Profile, Favorite, Cart, Menu } from "../../components/icons";
import logo from "../../assets/logo.png";

import NavMenu from "./NavMenu.vue";
</script>

<template>
  <div
    class="flex items-center justify-between w-full px-3 md:px-8 lg:px-12 py-[28px] lg:py-0 border-b-2 border-b-gray-200"
  >
    <!-- Logo -->
    <div>
      <router-link to="/">
        <img :src="logo" alt="lezada logo" />
      </router-link>
    </div>

    <!-- Menu -->
    <div>
      <NavMenu />
    </div>

    <!-- Search, Account, Carts etc -->
    <div>
      <ul class="flex gap-4 md:gap-6">
        <li class="hidden lg:flex">
          <Search class="size-6 cursor-pointer" />
        </li>
        <li class="hidden lg:flex">
          <Profile class="size-6 cursor-pointer" />
        </li>
        <li>
          <Favorite class="size-6 cursor-pointer" />
        </li>
        <li>
          <Cart class="size-6 cursor-pointer" />
        </li>
        <li class="flex lg:hidden">
          <Menu class="size-6 cursor-pointer" />
        </li>
      </ul>
    </div>
  </div>
</template>
