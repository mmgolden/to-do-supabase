<template>
  <RouterLink :to="to">
    <slot />
  </RouterLink>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

defineProps<{
  to: RouteLocationRaw;
}>();
</script>

<style scoped lang="scss">
a {
  color: $p-indigo-600;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: $p-indigo-500;
  }
}
</style>
