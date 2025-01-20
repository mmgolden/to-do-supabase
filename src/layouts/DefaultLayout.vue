<template>
  <div class="wrapper">
    <main class="main">
      <slot />
    </main>
    <footer class="footer">
      <BaseButton label="Toggle Dark Mode" @click="toggleDarkMode" />
    </footer>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "@/components/base/BaseButton.vue";

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
  padding: 2rem;
}

.footer {
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding: 1rem 2rem;
}
</style>
