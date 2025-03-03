<script setup>
import tableImage from "../assets/table.jpg";
import hoverImage from "../assets/hover-image.jpg";
import { Favorite, Compare, Search } from "../components/icons";
import { ref } from "vue";

const products = [
  {
    title: "Chair",
    description: "Lorem ipsum decor one",
    image: tableImage,
    hoverImage: hoverImage,
    hoverButtonDescription: "Add to Cart",
    priceBefore: "17.00",
    priceNow: "15.30",
    categories: "new",
    discount: "-10%",
  },
];

const isHovering = ref(false);

const handleMouseEnter = () => {
  isHovering.value = true;
};

const handleMouseLeave = () => {
  isHovering.value = false;
};
</script>

<template>
  <div class="w-full h-full z-10">
    <div
      class="relative group overflow-hidden"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <router-link to="/product-details" class="relative cursor-pointer">
        <img
          :src="products[0].image"
          :alt="products[0].title"
          class="w-full h-full object-cover transition-opacity duration-800"
          :class="isHovering ? 'opacity-0' : 'opacity-100'"
        />

        <img
          :src="products[0].hoverImage"
          :alt="products[0].title"
          class="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-800"
          :class="isHovering ? 'opacity-100' : 'opacity-0'"
        />

        <!-- Discount and Category Tags -->
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

        <!-- Discount and Category Tags -->
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

        <!-- Action Icons -->
        <div
          class="absolute top-6 right-6 flex flex-col gap-0.5 transition-opacity duration-500"
          :class="isHovering ? 'opacity-100' : 'opacity-0'"
        >
          <button
            class="bg-white py-3 px-4 rounded-sm shadow-md hover:bg-gray-100 transition-colors"
          >
            <Favorite />
          </button>

          <button
            class="bg-white py-3 px-4 rounded-sm shadow-md hover:bg-gray-100 transition-colors"
          >
            <Compare />
          </button>

          <button
            class="bg-white py-3 px-4 rounded-sm shadow-md hover:bg-gray-100 transition-colors"
          >
            <Search />
          </button>
        </div>
      </router-link>
      <div class="my-4 overflow-hidden">
        <!-- Description changes -->
        <div class="text-base text-[#333] transition-opacity duration-800">
          <p
            class="transition-all duration-500 transform"
            :class="
              isHovering
                ? '-translate-y-full opacity-0'
                : 'translate-y-0 opacity-100'
            "
          >
            {{ products[0].description }}
          </p>
          <button
            class="font-medium cursor-pointer text-[#c61932] transition-all duration-500 transform"
            :class="
              isHovering
                ? '-translate-y-3 opacity-100'
                : 'translate-y-full opacity-0'
            "
          >
            +
            <span
              class="tracking-wider transition-all duration-800 transform"
              >{{ products[0].hoverButtonDescription }}</span
            >
          </button>
        </div>

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
