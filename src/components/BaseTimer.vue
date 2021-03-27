<template>
  <span>{{ computedTimer }}</span>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { formatTimer } from "@/support";

export default defineComponent({
  name: "Timer",

  setup() {
    const timeout = ref(0);
    const timer = ref(0);

    const computedTimer = computed(() => formatTimer(timer.value));

    const startTimer = () => {
      stopTimer();

      timeout.value = setInterval(() => {
        timer.value += 1;
      }, 1000);
    };

    const stopTimer = () => {
      clearInterval(timeout.value);
    };

    return {
      timer,
      computedTimer,
      startTimer,
      stopTimer,
    };
  },
});
</script>
