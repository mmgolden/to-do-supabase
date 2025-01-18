<template>
  <div class="input-text">
    <label :for="id">{{ label }}</label>
    <InputText v-bind="$attrs" :id="id" v-model="value" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import InputText from "primevue/inputtext";

const props = defineProps<{
  modelValue: string;
  label: string;
  id: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

defineOptions({
  inheritAttrs: false,
});
</script>

<style scoped lang="scss">
.input-text {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
