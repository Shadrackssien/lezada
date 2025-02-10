<script setup>
import { Twitter, Facebook, Instagram, Youtube } from "./icons";
import visa from "../assets/visa.png";
</script>

<template>
  <div class="w-full h-auto mt-8 bg-[#f8f8f8] px-3 md:px-8 lg:px-0">
    <div
      class="w-[1200px] mx-auto py-24 flex flex-col gap-10 lg:gap-0 lg:flex-row lg:justify-between"
    >
      <div class="text-[#777] space-y-6">
        <div
          class="flex flex-wrap w-96 md:w-full text-sm lg:text-base leading-3 lg:flex-row gap-4 md:gap-8 lg:gap-10"
        >
          <p>ABOUT US</p>
          <p>STORE LOCATION</p>
          <p>CONTACT</p>
          <p>SUPPORT</p>
          <p>POLICY</p>
          <p>FAQS</p>
        </div>
        <div class="w-96 md:w-full text-sm lg:text-base">
          © 2025 lezada. All Rights Reserved |
          <span class="text-[#333] font-semibold">(+00) 123 567990</span> |
          contact@lezada.com
        </div>
      </div>

      <!-- Social Media Icons -->
      <div class="flex flex-col gap-4">
        <div class="flex gap-4 lg:justify-end mr-1">
          <Twitter />
          <Facebook />
          <Instagram />
          <Youtube />
        </div>
        <div>
          <img :src="visa" alt="visa pic" />
        </div>
      </div>
    </div>
  </div>
</template>
