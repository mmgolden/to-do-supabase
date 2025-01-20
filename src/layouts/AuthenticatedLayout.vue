<template>
  <div class="wrapper">
    <header class="header">
      <BaseMenubar :model="items">
        <template #item="{ item, props }">
          <RouterLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a :href="href" v-bind="props.action" @click="navigate">
              <span>{{ item.label }}</span>
            </a>
          </RouterLink>
        </template>
        <template #end>
          <BaseButton label="Toggle Dark Mode" @click="toggleDarkMode" />
        </template>
      </BaseMenubar>
    </header>
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseMenubar from "@/components/base/BaseMenubar.vue";

const items = ref([
  {
    label: "Home",
    route: { name: "Home" },
  },
  {
    label: "Sign Out",
    route: { name: "SignOut" },
  },
]);

const toggleDarkMode = () => document.documentElement.classList.toggle("dark-theme");
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  padding: 1rem;
}

.main {
  height: 100%;
  padding: 2rem;
}
</style>
