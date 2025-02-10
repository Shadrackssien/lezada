<script setup>
import flashsale from "../assets/flashsale.jpg";
</script>

<template>
  <div class="w-[1200px] mx-auto py-20">
    <div class="flex flex-col items-center justify-center gap-10">
      <div>
        <img :src="flashsale" alt="flashsale pic" />
      </div>
      <div class="flex gap-6 text-[#7e7e7e]">
        <p>#summer</p>
        <p>#shelf</p>
        <p>#sale</p>
      </div>
      <div class="">
        <p
          class="w-3/5 mx-auto text-[40px] font-[400px] text-center text-[#333]"
        >
          Up To 40% Off Final Sale Items. Caught in the moment!
        </p>
      </div>
      <button class="bg-[#333] text-white py-3 px-10 font-semibold">
        SHOP NOW
      </button>
    </div>
  </div>
</template>
