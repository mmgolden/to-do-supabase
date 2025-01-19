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
@use "@/assets/scss/main";
</style>
