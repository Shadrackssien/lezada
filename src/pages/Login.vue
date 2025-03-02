<template>
  <div>
    <div class="w-1/2 mx-auto my-24 bg-[#f7f7f7] space-y-8 p-8">
      <div class="flex flex-col items-center justify-center">
        <h2 class="text-center text-3xl tracking-wider">Login</h2>
        <p class="text-[#7e7e7e] mt-4">Great to have you back</p>
      </div>
      <form @submit.prevent="login" class="flex flex-col gap-10 mt-4 w-full">
        <input
          class="outline-none border-b-2 py-2 border-b-gray-300"
          type="text"
          placeholder="Username or email address"
        />
        <input
          class="outline-none border-b-2 py-2 border-b-gray-300"
          type="password"
          placeholder="Password"
        />
        <button
          type="submit"
          class="bg-[#333] border border-[#333] text-white py-2 uppercase w-32 hover:bg-transparent hover:text-black transition-all duration-300 cursor-pointer"
        >
          Login
        </button>
      </form>
      <p class="text-[#7e7e7e]">
        Don't have an account?
        <router-link class="hover:underline hover:text-black" to="/signup"
          >Sign up</router-link
        >
      </p>
      <div class="flex items-center gap-1.5">
        <input class="mt-1" type="checkbox" v-model="rememberMe" />
        <span>Remember Me</span>
      </div>
      <div class="">
        <a href="#">Lost your Password?</a>
      </div>
    </div>
  </div>
</template>
