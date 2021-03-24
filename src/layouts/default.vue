<template>
  <div class="app-container">
    <BaseHeader />
    <RouterView />
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";
import BaseFooter from "@/components/BaseFooter";

export default {
  components: {
    BaseHeader,
    BaseFooter,
  },
};
</script>

<style>
body {
  @apply bg-light text-black;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @apply p-5;
}
</style>
