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
  <div class="w-[1200px] mx-auto pt-16">
    <div class="w-full flex flex-col gap-8">
      <div class="flex text-5xl items-center justify-center gap-10 pb-6">
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
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
