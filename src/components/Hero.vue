<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "swiper/css/autoplay";
import { Navigation, EffectCreative } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "../components/icons";

import header1 from "../assets/header1.jpg";
import header2 from "../assets/header2.jpg";
import header3 from "../assets/header3.jpg";

const modules = [Navigation, EffectCreative];
const isHovered = ref(false);

const slides = ref([
  {
    id: 1,
    category: "ACCESSORIES",
    title: "Bottle Grinder",
    subtitle: "Small, 2-Piece",
    image: header1,
  },
  {
    id: 2,
    category: "HANDMADE",
    title: "Large",
    subtitle: "Food Board",
    image: header2,
  },
  {
    id: 3,
    category: "ACCESSORIES",
    title: "Tribeca Hubert",
    subtitle: "Pendant",
    image: header3,
  },
]);
</script>

<template>
  <div
    class="w-full h-[369px] relative mb-72 z-0"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="hero-slider-one__wrapper w-full relative z-10">
      <swiper
        :modules="modules"
        :navigation="{
          prevEl: '.prev-hero-swiper-one',
          nextEl: '.next-hero-swiper-one',
        }"
        :loop="true"
        :effect="'creative'"
        :creativeEffect="{
          prev: {
            translate: ['-100%', 0, 0],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
        :speed="1000"
        class="relative h-full z-10 flex"
      >
        <swiper-slide
          v-for="slide in slides"
          :key="slide.id"
          class="relative z-10 px-[10.8rem] h-full"
        >
          <div class="relative w-full h-full">
            <img
              :src="slide.image"
              class="w-full h-full object-cover object-center"
              :alt="slide.title"
            />
            <div
              class="absolute inset-0 flex flex-col justify-center items-start px-[70px]"
            >
              <h2
                class="text-[#68aaeb] text-sm font-bold tracking-[0.3em] mb-5 transition-transform duration-500"
              >
                {{ slide.category }}
              </h2>
              <h1
                class="text-4xl leading-[1.5] font-bold w-80 tracking-[0.1em] text-gray-800 mb-8 transition-transform duration-500"
              >
                {{ slide.title }}, <br />
                {{ slide.subtitle }}
              </h1>
              <a
                class="inline-block text-xs font-medium tracking-wider uppercase text-white bg-[#333] px-12 py-3 border border-gray-800 hover:bg-transparent hover:text-black transition-all duration-300"
                href="#"
              >
                shop now
              </a>
            </div>
          </div>
        </swiper-slide>

        <button
          type="button"
          class="swiper-button-prev pl-12 ht-swiper-button-nav prev-hero-swiper-one"
          :class="{ 'opacity-0': !isHovered }"
        >
          <ArrowLeft />
        </button>

        <button
          type="button"
          class="swiper-button-next pr-12 ht-swiper-button-nav next-hero-swiper-one"
          :class="{ 'opacity-0': !isHovered }"
        >
          <ArrowRight />
        </button>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  color: rgb(221, 217, 217) !important;
  transition: all 0.3s ease-in-out !important;
}
.swiper-button-prev:hover,
.swiper-button-next:hover {
  color: #333 !important;
}
</style>
