<template>
  <div class="sign-in">
    <h1>Sign in to your account</h1>

    <BaseCard class="sign-in__card">
      <template #content>
        <form class="sign-in__form">
          <BaseInputTextValidated id="email" type="email" label="Email" v-model="email" />
          <BaseInputTextValidated
            id="password"
            type="password"
            label="Password"
            v-model="password"
          />
          <BaseButton type="submit" label="Sign in" />
        </form>
      </template>
    </BaseCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseCard from "@/components/base/BaseCard.vue";
import BaseInputTextValidated from "@/components/base/BaseInputTextValidated.vue";
import BaseButton from "@/components/base/BaseButton.vue";

const email = ref("");
const password = ref("");
</script>

<style scoped lang="postcss">
.sign-in {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100%;
}

.sign-in__card {
  width: 100%;
  max-width: 40rem;
}

.sign-in__form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
