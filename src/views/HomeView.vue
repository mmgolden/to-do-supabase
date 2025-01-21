<template>
  <div class="container">
    <div class="task__header">
      <h1 class="task__title">Task list</h1>
      <BaseButton label="Create task" icon="pi pi-plus" />
    </div>
    <TaskCard />
  </div>
</template>

<script setup lang="ts">
import BaseButton from "@/components/base/BaseButton.vue";
import TaskCard from "@/components/task/TaskCard.vue";
</script>

<style scoped lang="scss">
.container {
  @include container;
}

.task__header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.task__title {
  @include header;
}
</style>
