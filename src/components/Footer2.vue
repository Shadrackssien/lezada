<script setup>
import { Twitter, Facebook, Instagram, Youtube, RightDirection } from "./icons";
import logo from "../assets/logo.png";
</script>

<template>
  <div class="w-full h-auto mt-8 bg-[#f8f8f8] px-3 md:px-8 lg:px-0">
    <div class="px-3 text-[#777] md:px-8 lg:px-12 py-24 flex justify-between">
      <div class="flex flex-col gap-6">
        <div>
          <img :src="logo" alt="lezada logo" />
        </div>

        <div class="flex flex-col gap-1">
          <p>© 2025 lezada</p>
          <p>All Rights Reserved</p>
        </div>
      </div>

      <div class="flex flex-col gap-5">
        <p class="text-[#333] font-semibold">ABOUT</p>
        <p>About us</p>
        <p>Store Location</p>
        <p>Contact</p>
        <p>Orders Tracking</p>
      </div>

      <div class="flex flex-col gap-5">
        <p class="text-[#333] font-semibold">USEFUL LINKS</p>
        <p>Returns</p>
        <p>Support Policy</p>
        <p>Size guide</p>
        <p>FAQs</p>
      </div>

      <div class="flex flex-col gap-5">
        <p class="text-[#333] font-semibold">FOLLOW US ON</p>
        <div class="flex items-center gap-2">
          <Twitter />
          <p>Twitter</p>
        </div>
        <div class="flex items-center gap-2">
          <Facebook />
          <p>Facebook</p>
        </div>
        <div class="flex items-center gap-2">
          <Instagram />
          <p>Instagram</p>
        </div>

        <div class="flex items-center gap-2">
          <Youtube />
          <p>YouTube</p>
        </div>
      </div>

      <div class="flex flex-col pt-2 gap-5">
        <p class="text-[#333] font-semibold text-4xl">Subscribe</p>
        <p>Subscribe to our newsletter to receive news on update.</p>
        <form class="relative">
          <input
            class="relative w-full outline-none border-b py-2 border-b-gray-300"
            type="email"
            placeholder="Your email address"
          />
          <button class="absolute top-3 right-0">
            <right-direction class="size-8 text-gray-300" />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
