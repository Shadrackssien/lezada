<script setup>
import flashsale from "../assets/flashsale.jpg";
</script>

<template>
  <div class="lg:w-[1200px] lg:mx-auto py-16 md:py-20">
    <div class="flex flex-col items-center justify-center gap-10">
      <div class="px-4 md:px-8 lg:px-0">
        <img :src="flashsale" alt="flashsale pic" />
      </div>
      <div class="flex text-xl lg:text-base gap-6 text-[#7e7e7e]">
        <p>#summer</p>
        <p>#shelf</p>
        <p>#sale</p>
      </div>
      <div class="">
        <p
          class="w-4/5 lg:w-3/5 mx-auto text-2xl md:text-[40px] font-[400px] text-center text-[#333]"
        >
          Up To 40% Off Final Sale Items. Caught in the moment!
        </p>
      </div>
      <button
        class="inline-block text-xs font-medium tracking-wider uppercase text-white bg-[#333] px-12 py-3 border border-gray-800 hover:bg-transparent hover:text-black transition-all duration-300"
      >
        SHOP NOW
      </button>
    </div>
  </div>
</template>
