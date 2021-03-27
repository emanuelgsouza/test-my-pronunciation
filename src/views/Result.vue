<template>
  <div>Resultado</div>

  <div>{{ currentChallenge }}</div>
</template>

<script>
import { computed, defineComponent } from "vue";

import { useStore } from "@/store";

export default defineComponent({
  name: "ResultPage",

  setup() {
    // implement logic to get by using the uuid
    const store = useStore();

    const currentChallenge = computed(
      () => store.state.challenge.currentChallenge
    );

    return {
      currentChallenge,
    };
  },
});
</script>
