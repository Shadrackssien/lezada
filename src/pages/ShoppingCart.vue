<script setup>
import headerTwo from "../assets/header-two.jpg";

import { ScrollTopButton } from "../components";
import { ShoppingCart } from "../components/icons";
</script>

<template>
  <div class="flex items-center justify-center py-28">
    <div class="flex flex-col gap-6 items-center mt-4 justify-center">
      <ShoppingCart class="text-[#333] size-[140px]" />
      <p class="text-[#777] text-xl tracking-wider">No items found in cart</p>
      <router-link
        class="inline-block text-sm mt-1 font-medium tracking-widest uppercase text-white bg-[#333] px-10 py-3 border border-gray-800 hover:bg-transparent hover:text-black transition-all duration-300"
        to="/shop"
      >
        shop now
      </router-link>
    </div>
  </div>
  <ScrollTopButton />
</template>
