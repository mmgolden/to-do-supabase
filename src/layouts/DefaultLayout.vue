<template>
  <div class="wrapper">
    <main class="main">
      <slot />
    </main>
    <footer class="footer">
      <BaseButton
        v-if="!isSignOut"
        label="Toggle dark mode"
        severity="secondary"
        @click="toggleDarkMode"
      />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import BaseButton from "@/components/base/BaseButton.vue";

const route = useRoute();

const isSignOut = computed(() => route.name === "SignOut");

const toggleDarkMode = () => document.documentElement.classList.toggle("dark-theme");
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main {
  height: 100%;
  padding: 1rem;
}

.footer {
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding: 1rem;
}
</style>
