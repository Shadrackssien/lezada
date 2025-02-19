<script setup>
import { Search, Close } from "../components/icons";
import PopularProducts from "../components/PopularProducts.vue";

const categories = [
  "All categories",
  "Decor",
  "Fashion",
  "Men",
  "Women",
  "Cosmetics",
  "Furniture",
  "Perfumes",
  "Wearables",
  "Jewelry",
  "Swimsuit",
];
</script>
<template>
  <div class="pr-4">
    <div class="space-y-10">
      <div class="relative">
        <input
          class="w-full text-sm tracking-wide outline-none border-b-2 py-2 border-b-gray-300 hover:border-b-black"
          type="text"
          placeholder="Search products ..."
        />
        <button class="absolute top-3 right-1">
          <Search class="text-[#7e7e7e]" />
        </button>
      </div>

      <div class="space-y-6">
        <h1 class="text-2xl tracking-wide">Categories</h1>
        <div class="relative flex flex-col gap-3">
          <div
            class="group relative cursor-pointer hover:text-[#333] transition-colors duration-400"
            v-for="(category, index) in categories"
            :key="index"
          >
            <p
              class="relative text-gray-400 group-hover:text-[#333] transition-colors duration-400"
            >
              <span class="relative">
                {{ category }}
                <span
                  class="absolute left-0 bottom-0 w-full h-[1px] bg-[#333] scale-x-0 origin-right transition-transform duration-400 group-hover:scale-x-100 group-hover:origin-left"
                ></span>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 class="text-2xl tracking-wide">Colors</h1>
        <div class="flex gap-3 mt-6">
          <div
            class="flex items-center justify-center p-[2px] border border-transparent hover:border-gray-400 rounded-full"
          >
            <button class="size-6 rounded-full bg-[#333]"></button>
          </div>
          <div
            class="flex items-center justify-center p-[2px] border border-transparent hover:border-gray-400 rounded-full"
          >
            <button class="size-6 rounded-full bg-[#1e73be]"></button>
          </div>
          <div
            class="flex items-center justify-center p-[2px] border border-transparent hover:border-gray-400 rounded-full"
          >
            <button class="size-6 rounded-full bg-[#d93]"></button>
          </div>
          <div
            class="flex items-center justify-center p-[2px] border border-transparent hover:border-gray-400 rounded-full"
          >
            <button
              class="flex items-center justify-center size-6 rounded-full bg-[#fff] border border-gray-500"
            >
              <Close class="text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      <div>
        <h1 class="text-2xl tracking-wide">Popular Products</h1>
        <div class="mt-6 space-y-4">
          <PopularProducts />
          <PopularProducts />
          <PopularProducts />
        </div>
      </div>

      <div class="">
        <h1 class="text-2xl tracking-wide mb-6">Tags</h1>
        <div class="flex flex-wrap gap-2">
          <p
            class="tracking-wide text-sm leading-3 text-gray-500"
            v-for="(category, index) in categories.slice(1, 11)"
            :key="index"
          >
            <span class="">{{ category }} /</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
