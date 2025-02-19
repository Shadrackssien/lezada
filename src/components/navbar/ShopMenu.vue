<template>
  <div class="w-full h-80 overflow-y-hidden">
    <div class="grid grid-cols-4 p-6">
      <div class="pl-6 border-r border-r-gray-300 h-64">
        <div class="flex flex-col gap-4">
          <h2 class="text-[#333] font-semibold">Group One</h2>
          <div class="flex flex-col gap-2 text-[#7e7e7e]">
            <p>Left Sidebar</p>
            <p>Right Sidebar</p>
            <p>No Sidebar</p>
            <p>Full Width No Space</p>
            <p>Full Width No Sidebar</p>
            <p>Full Width Left Sidebar</p>
            <p>Full Width Right Sidebar</p>
          </div>
        </div>
      </div>
      <div class="pl-6 border-r border-r-gray-300 h-64">
        <div class="flex flex-col gap-4">
          <h2 class="text-[#333] font-semibold">Group Two</h2>
          <div class="flex flex-col gap-2 text-[#7e7e7e]">
            <p>Basic</p>
            <p>Full width</p>
            <p>Full Width Right Thumb</p>
            <router-link to="/product-details">Sticky Details</router-link>
            <router-link to="/cart">Shopping Cart</router-link>
            <router-link to="/wishlist">Wishlist</router-link>
            <router-link to="/compare">Compare</router-link>
          </div>
        </div>
      </div>
      <div class="pl-6 border-r border-r-gray-300 h-64">
        <div class="flex flex-col gap-4">
          <h2 class="text-[#333] font-semibold">Shop Pages</h2>
          <div class="flex flex-col gap-2 text-[#7e7e7e]">
            <router-link to="/checkout">Checkout</router-link>
            <router-link to="/order-tracking">Order Tracking</router-link>
            <router-link to="/account">My Account</router-link>
            <router-link to="/login">Login</router-link>
            <router-link to="/signup">Register</router-link>
          </div>
        </div>
      </div>
      <div class="pl-6">
        <img src="../../assets/shop.png" alt="shop pic" />
      </div>
    </div>
  </div>
</template>
