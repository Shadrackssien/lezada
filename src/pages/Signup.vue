<script setup lang="ts">
import { register } from "swiper/element";
</script>

<template>
  <div>
    <div class="w-1/2 mx-auto my-24 space-y-8 p-8">
      <div class="flex flex-col items-center justify-center">
        <h2 class="text-center text-3xl tracking-wider">Register</h2>
        <p class="text-[#7e7e7e] mt-4">
          If you don't have an account, register now!
        </p>
      </div>
      <form @submit.prevent="register" class="flex flex-col gap-10 mt-4 w-full">
        <div class="flex flex-col">
          <label for="email" class="uppercase tracking-wider"
            >Email Address <span class="text-red-500">*</span></label
          >
          <input
            class="outline-none border-b-2 py-2 border-b-gray-300"
            type="email"
          />
        </div>
        <div class="flex flex-col">
          <label for="password" class="uppercase tracking-wider"
            >Password <span class="text-red-500">*</span></label
          >
          <input
            class="outline-none border-b-2 py-2 border-b-gray-300"
            type="password"
          />
        </div>
        <button
          type="submit"
          class="bg-[#333] border border-[#333] text-white py-2 uppercase w-32 hover:bg-transparent hover:text-black transition-all duration-300 cursor-pointer"
        >
          Register
        </button>
      </form>
      <p class="text-[#7e7e7e]">
        Already have an account?
        <router-link class="hover:underline hover:text-black" to="/login"
          >Login</router-link
        >
      </p>
    </div>
  </div>
</template>
