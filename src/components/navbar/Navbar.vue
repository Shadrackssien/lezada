<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { Search, Profile, Favorite, Cart, Menu } from "../../components/icons";
import logo from "../../assets/logo.png";
import SlideModal from "../SlideModal.vue";

import NavMenu from "./NavMenu.vue";
import SearchOverlay from "./SearchOverlay.vue";

const isSearchOpen = ref(false);
const isFavoriteOpen = ref(false);
const isCartOpen = ref(false);
const isSticky = ref(false);

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
};

const handleScroll = () => {
  if (window.scrollY > 0) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

watch([isSearchOpen, isFavoriteOpen, isCartOpen], () => {
  const anyModalOpen =
    isSearchOpen.value || isFavoriteOpen.value || isCartOpen.value;
  document.body.style.overflow = anyModalOpen ? "hidden" : "";
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = "";
});
</script>

<template>
  <div>
    <nav
      class="bg-white z-30"
      :class="{
        'fixed top-[-80px] left-0 right-0 z-40 shadow-md translate-y-[100%] transition-transform duration-1000 ease-in-out':
          isSticky,
      }"
    >
      <div
        class="flex items-center justify-between w-full px-3 md:px-8 lg:px-12 py-[28px] lg:py-0"
      >
        <!-- Logo -->
        <div>
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
      </div>
    </nav>

    <!-- Search Overlay -->
    <div class="z-50">
      <SearchOverlay :is-open="isSearchOpen" @close="isSearchOpen = false" />
    </div>

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
