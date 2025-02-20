<script setup>
import Navbar from "../components/navbar/Navbar.vue";
import Hero from "../components/Hero.vue";
import Products from "../components/Products.vue";
import FlashSale from "../components/FlashSale.vue";
import Footer from "../components/Footer.vue";
import ScrollTopButton from "../components/ScrollTopButton.vue";
</script>

<template>
  <div class="w-full z-10 h-full overflow-x-hidden">
    <Navbar />
    <Hero />
    <Products />
    <FlashSale />
    <Footer />
    <ScrollTopButton />
  </div>
</template>
