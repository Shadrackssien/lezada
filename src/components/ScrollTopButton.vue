<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { ArrowUp } from "./icons";

const isVisible = ref(false);

const toggleVisibility = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", toggleVisibility);
});

onUnmounted(() => {
  window.removeEventListener("scroll", toggleVisibility);
});
</script>

<template>
  <div class="z-40">
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <button
        v-show="isVisible"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 p-[14px] bg-[#333] text-white rounded-full shadow-lg hover:bg-[#777] transition-all duration-300 ease-in-out"
        aria-label="Scroll to top"
      >
        <arrow-up class="text-[#fff] size-6" />
      </button>
    </Transition>
  </div>
</template>
