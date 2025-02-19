<script setup>
import { Star } from "../components/icons";
import table from "../assets/table.jpg";

const rating = 4;
const totalStars = 5;
</script>

<template>
  <div class="flex gap-4 mb-8">
    <div class="w-[115px]">
      <img class="w-full h-auto object-cover" :src="table" alt="" />
    </div>
    <div class="flex flex-col">
      <p class="tracking-widest text-gray-500 w-32">Lorem ipsum decor one</p>
      <div class="flex text-xs gap-1 mt-2">
        <span class="text-[#aaa] font-semibold line-through">$25.0</span>
        <span class="text-[#333] font-semibold">$16.87</span>
      </div>
      <div class="flex mt-3">
        <div v-for="index in totalStars" :key="index">
          <star :filled="index <= rating" color="#FFD700" />
        </div>
      </div>
    </div>
  </div>
</template>
