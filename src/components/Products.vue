<script setup>
import { ref } from "vue";
import SingleProduct from "./SingleProduct.vue";

const categories = ref(["New", "Popular", "Sale"]);

const selectedCategory = ref("New");

const handleCategoryClick = (category) => {
  selectedCategory.value = category;
};
</script>

<template>
  <div class="w-full lg:w-[1200px] lg:mx-auto pt-16">
    <div class="w-full flex flex-col gap-8">
      <div
        class="flex text-3xl md:text-5xl items-center justify-center gap-7 md:gap-10 pb-6"
      >
        <p
          v-for="(category, index) in categories"
          :key="index"
          class="cursor-pointer text-[#ccc] tracking-wider"
          :class="{ 'text-black': selectedCategory === category }"
          @click="handleCategoryClick(category)"
        >
          {{ category }}
        </p>
      </div>

      <!-- New Products -->
      <div
        v-if="selectedCategory === 'New'"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-0"
      >
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>

      <div
        v-if="selectedCategory === 'Popular'"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-0"
      >
        <div class="bg-yellow-400 h-96">1</div>
        <div class="bg-violet-400 h-96">1</div>
        <div class="bg-indigo-400 h-96">1</div>
        <div class="bg-red-400 h-96">1</div>
        <div class="bg-blue-400 h-96">1</div>
        <div class="bg-green-400 h-96">1</div>
      </div>

      <div
        v-if="selectedCategory === 'Sale'"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-0"
      >
        <div class="bg-violet-400 h-96">1</div>
        <div class="bg-indigo-400 h-96">1</div>
        <div class="bg-blue-400 h-96">1</div>
        <div class="bg-green-400 h-96">1</div>
        <div class="bg-yellow-400 h-96">1</div>
        <div class="bg-red-400 h-96">1</div>
      </div>
    </div>
  </div>
</template>
