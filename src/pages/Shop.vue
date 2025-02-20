<script setup>
import { ref } from "vue";

import header from "../assets/header-one.png";
import {
  SingleProduct,
  LeftSidebar,
  ListProduct,
  ScrollTopButton,
} from "../components";
import {
  SemiGridView,
  FullGridView,
  ListView,
  Filter,
} from "../components/icons";

const views = [
  { component: SemiGridView, type: "SemiGridView" },
  { component: FullGridView, type: "FullGridView" },
  { component: ListView, type: "ListView" },
];

const selectedView = ref("FullGridView");

const handleToggle = (viewType) => {
  selectedView.value = viewType;
};
</script>
<template>
  <div>
    <div>
      <div
        class="max-w-[1200px] mx-auto text-[#7e7e7e] py-4 flex justify-between"
      >
        <div>Showing 20 of 73 result</div>
        <div class="flex items-center gap-3">
          <div class="pr-10">
            <select class="border-b-[2px] border-b-gray-300 pb-1" name="" id="">
              <option value="">Default</option>
              <option value="">Price - High to Low</option>
              <option value="">Price: Low to High</option>
            </select>
          </div>
          <div
            v-for="(view, index) in views"
            :key="index"
            class="cursor-pointer hover:text-black transition-all duration-300 ease-in-out"
            :class="{ 'text-black': selectedView === view.type }"
            @click="handleToggle(view.type)"
          >
            <component :is="view.component" class="size-6" />
          </div>

          <div class="flex items-center gap-1 pl-6">
            <Filter class="size-4" />
            <p>Filter</p>
          </div>
        </div>
      </div>
      <p class="w-full h-[1px] bg-gray-300"></p>

      <!-- Filter -->
      <div></div>

      <div class="max-w-[1200px] mx-auto pt-32 pb-40">
        <div class="flex">
          <!-- Left Sidebar -->
          <div class="w-[25%]">
            <LeftSidebar />
          </div>

          <!-- Grid Cols 3/ SemiGridView -->
          <div v-if="selectedView === views[0].type" class="w-[75%]">
            <div class="grid grid-cols-3 gap-4">
              <single-product />
              <single-product />
              <single-product />
              <single-product />
              <single-product />
              <single-product />
            </div>
          </div>

          <!-- Grid Cols 4/ fullGridView -->
          <div v-if="selectedView === views[1].type" class="w-[75%]">
            <div class="grid grid-cols-4 gap-4">
              <single-product />
              <single-product />
              <single-product />
              <single-product />
              <single-product />
              <single-product />
              <single-product />
              <single-product />
              <single-product />
              <single-product />
              <single-product />
              <single-product />
              <single-product />
              <single-product />
              <single-product />
              <single-product />
            </div>
          </div>

          <!-- List View -->
          <div v-if="selectedView === views[2].type" class="w-[75%]">
            <div class="grid grid-cols-1 gap-4">
              <ListProduct />
            </div>
          </div>
        </div>
      </div>
    </div>
    <scroll-top-button />
  </div>
</template>
