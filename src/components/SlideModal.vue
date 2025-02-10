<script setup>
import { Close } from "./icons";
import { ref, watch } from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["close"]);
const showModal = ref(props.isOpen);

watch(
  () => props.isOpen,
  (newVal) => {
    if (newVal) {
      showModal.value = true;
    } else {
      setTimeout(() => (showModal.value = false), 500);
    }
  }
);

const handleClose = () => {
  emit("close");
};
</script>

<template>
  <!-- Backdrop -->
  <div
    v-show="showModal"
    class="fixed inset-0 bg-black/20 z-50"
    @click="handleClose"
  >
    <!-- Modal -->
    <Transition
      enter-active-class="transition-all duration-800 ease-in-out"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition-all duration-800 ease-in-out"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-full"
    >
      <div
        v-if="isOpen"
        class="fixed top-0 right-0 w-[25%] h-full bg-white z-50 shadow-lg"
        @click.stop
      >
        <!-- Header -->
        <div
          class="flex items-center justify-between p-4 border-b border-b-gray-400"
        >
          <h2 class="text-lg font-medium">{{ title }}</h2>
          <button
            @click="handleClose"
            class="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Close class="size-5" />
          </button>
        </div>

        <!-- Content -->
        <div class="p-4">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>
