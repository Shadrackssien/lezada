<script setup>
import Layout from "../layouts/Layout.vue";
import header from "../assets/header-one.png";
import LeftSidebar from "../components/LeftSidebar.vue";
import SingleProduct from "../components/SingleProduct.vue";
import {
  SemiGridView,
  FullGridView,
  ListView,
  Filter,
} from "../components/icons";
import ListProduct from "../components/ListProduct.vue";
</script>
<template>
  <div>
    <Layout title="Shop" :backgroundImage="header">
      <div>
        <div
          class="max-w-[1200px] text-[#7e7e7e] mx-auto py-4 flex justify-between"
        >
          <div>Showing 20 of 73 result</div>
          <div class="flex items-center gap-5">
            <div class="pr-6">
              <select
                class="border-b-[2px] border-b-gray-300 pb-1"
                name=""
                id=""
              >
                <option value="">Default</option>
                <option value="">Price - High to Low</option>
                <option value="">Price: Low to High</option>
              </select>
            </div>
            <div>
              <semi-grid-view class="size-5" />
            </div>
            <div>
              <full-grid-view class="size-6" />
            </div>
            <div>
              <list-view class="size-6" />
            </div>
            <div class="flex items-center gap-1 pl-6">
              <Filter class="size-4" />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <p class="w-full h-[1px] bg-gray-300"></p>

        <div class="max-w-[1200px] mx-auto pt-16 pb-40">
          <div class="flex">
            <!-- Left Sidebar -->
            <div class="w-[25%]">
              <LeftSidebar />
            </div>

            <!-- Grid Cols 3/ SemiGridView -->
            <div v-if="false" class="w-[75%]">
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
            <div v-if="false" class="w-[75%]">
              <div class="grid grid-cols-4 gap-4">
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
            <div v-if="true" class="w-[75%]">
              <div class="grid grid-cols-1 gap-4">
                <ListProduct />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>
