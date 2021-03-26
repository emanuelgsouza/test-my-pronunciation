<template>
  <div class="app">
    <BaseHeader />
    <div class="container">
      <RouterView />
    </div>
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

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @apply p-5;
}

.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @apply py-4;
}
</style>
