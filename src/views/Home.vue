<template>
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
      this.$router.push({
        name: "ChallengeSelectPage",
      });
    },
  },
});
</script>

<style>
.base-logo {
  width: 150px;
  height: 150px;

  @apply mb-8;
}
</style>
