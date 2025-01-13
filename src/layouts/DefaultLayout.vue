<template>
  <div class="wrapper">
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main {
  height: 100%;
  padding: 2rem;
}
</style>
