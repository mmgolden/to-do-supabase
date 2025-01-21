<template>
  <div class="wrapper">
    <header class="header">
      <BaseMenubar :model="items" class="menubar">
        <template #item="{ item, props }">
          <RouterLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a :href="href" v-bind="props.action" @click="navigate">
              <span>{{ item.label }}</span>
            </a>
          </RouterLink>
        </template>
        <template #end>
          <BaseButton label="Toggle dark mode" severity="secondary" @click="toggleDarkMode" />
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
    label: "Sign out",
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

.menubar {
  @include container;
}

.main {
  height: 100%;
  padding: 1rem;
}
</style>
