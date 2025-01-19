<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout.vue";

const route = useRoute();

const layout = computed(() => {
  if (route.meta.layout === "AuthenticatedLayout") {
    return AuthenticatedLayout;
  } else {
    return DefaultLayout;
  }
});
</script>

<style lang="scss">
@use "@/assets/scss/main" as *;

html,
body {
  background: $p-gray-50;
  color: $p-gray-900;
  font-family: "Inter", serif;
}

a {
  border: 1px solid transparent;
  border-radius: 4px;
  color: $p-indigo-600;
  font-weight: 500;
  text-decoration: none;

  &:focus-visible {
    border-color: $p-indigo-600;
  }

  &:hover {
    color: $p-indigo-500;
  }
}
</style>
