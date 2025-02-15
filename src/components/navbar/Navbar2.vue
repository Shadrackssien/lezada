<script setup>
import { ref } from "vue";
import { Search, Profile, Favorite, Cart, Menu } from "../../components/icons";
import logo from "../../assets/logo.png";
import SlideModal from "../SlideModal.vue";

import NavMenu from "./NavMenu.vue";
import SearchOverlay from "./SearchOverlay.vue";

const isSearchOpen = ref(false);
const isFavoriteOpen = ref(false);
const isCartOpen = ref(false);

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
};
</script>

<template>
  <div
    class="flex items-center justify-between w-full px-3 md:px-8 lg:px-12 py-[28px] lg:py-0"
  >
    <!-- Logo -->
    <div class="flex items-center gap-2">
      <Menu class="size-7 cursor-pointer hidden lg:flex" />
      <router-link to="/">
        <img :src="logo" alt="lezada logo" />
      </router-link>
    </div>

    <!-- Menu -->
    <div>
      <NavMenu />
    </div>

    <!-- Search, Account, Carts etc -->
    <div>
      <ul class="flex gap-4 md:gap-[30px]">
        <li class="hidden lg:flex">
          <div>
            <Search @click="toggleSearch" class="size-5 cursor-pointer" />
          </div>
        </li>
        <li class="hidden lg:flex">
          <Profile class="size-5 cursor-pointer" />
        </li>
        <li>
          <Favorite
            @click="isFavoriteOpen = true"
            class="size-5 cursor-pointer"
          />
        </li>
        <li>
          <Cart @click="isCartOpen = true" class="size-5 cursor-pointer" />
        </li>

        <!-- Hamburger Menu for mobile -->
        <li class="flex lg:hidden">
          <Menu class="size-6 cursor-pointer" />
        </li>
      </ul>
    </div>

    <!-- Search Overlay -->
    <SearchOverlay :is-open="isSearchOpen" @close="isSearchOpen = false" />

    <!-- WishList Modal -->
    <SlideModal
      :is-open="isFavoriteOpen"
      title="Wishlist"
      @close="isFavoriteOpen = false"
    >
      <div class="text-center text-gray-500 py-8">Your wishlist is empty</div>
    </SlideModal>

    <!-- Cart Modal -->
    <SlideModal
      :is-open="isCartOpen"
      title="Shopping Cart"
      @close="isCartOpen = false"
    >
      <div class="text-center text-gray-500 py-8">Your cart is empty</div>
    </SlideModal>
  </div>
</template>
