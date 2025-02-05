<script setup>
import { ref } from "vue";
import { Close, Search } from "../../components/icons";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const searchQuery = ref("");

const handleClose = () => {
  emit("close");
  searchQuery.value = "";
};
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-800 ease-in-out"
    enter-from-class="opacity-0 translate-x-full"
    enter-to-class="opacity-100 translate-x-0"
    leave-active-class="transition-all duration-800 ease-in-out"
    leave-from-class="opacity-100 translate-x-0"
    leave-to-class="opacity-0 translate-x-full"
  >
    <div v-if="isOpen" class="fixed inset-0 bg-white z-50">
      <!-- Close button -->
      <div class="absolute top-8 right-8">
        <button
          @click="handleClose"
          class="p-2 cursor-pointer hover:bg-gray-100 rounded-full transition-colors"
        >
          <Close class="size-6" />
        </button>
      </div>

      <!-- Search input -->
      <div class="max-w-3xl mx-auto mt-32 px-4">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search products..."
            class="w-full text-xl px-4 py-3 border-b-2 border-gray-200 focus:border-gray-900 outline-none transition-colors"
            autofocus
          />
          <button class="absolute right-4 top-1/2 -translate-y-1/2">
            <Search class="size-6" />
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>
