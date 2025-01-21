<template>
  <Menubar>
    <template v-if="$slots.start" #start>
      <slot name="start" />
    </template>
    <template v-if="$slots.item" #item="slotProps">
      <slot name="item" v-bind="slotProps" />
    </template>
    <template v-if="$slots.end" #end>
      <slot name="end" />
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import Menubar from "primevue/menubar";
</script>

<style scoped lang="scss">
.p-menubar {
  border: none;
}
</style>
