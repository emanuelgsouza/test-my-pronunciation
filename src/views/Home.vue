<template>
  <div class="container">
    <img class="base-logo" src="/img/logo.svg" />

    <h1 class="font-bold text-2xl mb-8">Teste a minha pronúncia!</h1>

    <BaseButton
      label="Começar desafio"
      variant="primary"
      class="mb-6"
      @click="handleChallengeClick"
    />

    <BaseButton
      label="Sobre o aplicativo"
      variant="ghost"
      @click="handleAboutClick"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/components/BaseButton.vue";

export default defineComponent({
  components: { BaseButton },

  methods: {
    handleAboutClick() {
      this.$router.push("about");
    },

    handleChallengeClick() {
      this.$router.push("challenge/choose");
    },
  },
});
</script>

<style>
.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @apply py-4;
}

.container .base-logo {
  width: 150px;
  height: 150px;

  @apply mb-8;
}
</style>
