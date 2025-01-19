<template>
  <div class="sign-in">
    <BaseCard class="sign-in__card">
      <template #content>
        <h1 class="sign-in__title">Welcome Back</h1>
        <form class="sign-in__form">
          <BaseInputTextValidated
            v-model="email"
            id="email"
            type="email"
            label="Email"
            placeholder="Email address"
          />
          <BaseInputTextValidated
            v-model="password"
            id="password"
            type="password"
            label="Password"
            placeholder="Password"
          />
          <BaseLink to="/" class="sign-in__forgot-password">Forgot password?</BaseLink>
          <BaseButton id="sign-in-button" type="submit" label="Sign in" class="sign-in__button" />
          <p class="sign-in__create-account">
            Don't have an account?
            <BaseLink to="/">Create today!</BaseLink>
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
import BaseLink from "@/components/base/BaseLink.vue";

const email = ref("");
const password = ref("");
</script>

<style scoped lang="scss">
.sign-in {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  justify-content: center;
}

.sign-in__card {
  max-width: 32rem;
  width: 100%;
}

.sign-in__form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sign-in__title {
  margin-bottom: 2rem;
  text-align: center;
}

.sign-in__forgot-password {
  text-align: right;
}

.sign-in__button {
  margin-top: 0.5rem;
}

.sign-in__create-account {
  margin-top: 2rem;
  text-align: center;
}
</style>
