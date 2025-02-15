<script setup>
import tableImage from "../assets/table.jpg";
import hoverImage from "../assets/hover-image.jpg";

const products = [
  {
    title: "Chair",
    description: "Lorem ipsum decor one",
    image: tableImage,
    hoverImage: hoverImage,
    priceBefore: "17.00",
    priceNow: "15.30",
    categories: "new",
    discount: "-10%",
  },
];
</script>

<template>
  <div class="w-full h-full z-10">
    <div class="flex gap-8">
      <div class="relative w-1/2">
        <img
          :src="products[0].image"
          :alt="products[0].title"
          class="w-full h-full object-cover transition-opacity duration-300"
          @mouseover="products[0].image = products[0].hoverImage"
          @mouseleave="products[0].image = tableImage"
        />
        <span
          v-if="products[0].discount"
          class="absolute top-6 left-6 bg-[#98d8ca] text-white text-center text-sm font-semibold py-3 size-12 rounded-full"
        >
          {{ products[0].discount }}
        </span>
        <span
          v-if="products[0].categories"
          class="absolute top-20 left-6 bg-[#c61932] text-white text-center text-sm font-semibold py-3 size-12 rounded-full"
        >
          {{ products[0].categories }}
        </span>
      </div>

      <div class="my-4 w-1/2">
        <p class="text-base text-[#333]">
          {{ products[0].description }}
        </p>
        <div class="flex gap-2 mt-2">
          <span class="text-[#aaa] font-semibold line-through"
            >${{ products[0].priceBefore }}</span
          >
          <span class="text-[#333] font-semibold"
            >${{ products[0].priceNow }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
