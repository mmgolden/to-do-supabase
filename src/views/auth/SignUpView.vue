<template>
  <div class="sign-up">
    <h1 class="sign-up__title">Sign up for an account</h1>

    <BaseCard class="sign-up__card">
      <template #content>
        <form class="sign-up__form">
          <BaseInputTextValidated v-model="email" id="email" type="email" label="Email" />

          <BaseInputTextValidated
            v-model="password"
            id="password"
            type="password"
            label="Password"
          />

          <BaseButton id="sign-up-button" type="submit" label="Sign up" class="sign-up__button" />

          <p class="sign-up__account">
            Already have an account?
            <RouterLink :to="{ name: 'SignIn' }">Sign in</RouterLink>
          </p>
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

<style scoped lang="scss">
.sign-up {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  justify-content: center;
}

.sign-up__card {
  max-width: 32rem;
  width: 100%;
}

.sign-up__title {
  text-align: center;
  @include header;
}

.sign-up__form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sign-up__button {
  margin-top: 0.5rem;
}

.sign-up__account {
  margin-top: 2rem;
  text-align: center;
  @include body;

  a {
    @include link;
  }
}
</style>
