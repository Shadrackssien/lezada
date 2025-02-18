<script setup>
import Navbar from "../components/navbar/Navbar2.vue";
import Footer2 from "../components/Footer2.vue";

import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const title = computed(() => route.meta.title);

const backgroundImage = computed(() => route.meta.backgroundImage);
</script>
<template>
  <div>
    <!-- Navbar -->
    <div>
      <Navbar />
    </div>
    <!-- Header -->
    <div :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="max-w-[1200px] mx-auto py-18">
        <h1 class="text-5xl tracking-widest">{{ title }}</h1>
        <p class="pt-6 tracking-widest text-[#7e7e7e]">
          Home / <span class="text-[#333]">{{ title }}</span>
        </p>
      </div>
    </div>
    <!-- content -->
    <div class="flex-1">
      <slot></slot>
    </div>
    <!-- Footer -->
    <div>
      <Footer2 />
    </div>
  </div>
</template>
