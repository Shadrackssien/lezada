<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { layouts } from "./layouts";

const route = useRoute();

const currentLayout = computed(() => {
  const layout = route.meta.layout || "default";
  return layouts[layout];
});
</script>
<template>
  <component :is="currentLayout">
    <router-view></router-view>
  </component>
</template>
