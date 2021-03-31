<template>
  <img src="@/assets/illustrations/sad.svg" alt="" />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { isAverage, isGood } from "@/support";

type ComponentProps = {
  rate: number;
};

export default defineComponent({
  name: "ResultIllustration",

  rate: {
    type: Number,
    default: 0,
  },

  // TODO: make this more intelligent
  setup(props: ComponentProps) {
    const illustrationPath = computed(() => {
      if (isGood(props.rate)) {
        return "../assets/illustrations/congrats.svg";
      }

      if (isAverage(props.rate)) {
        return "../assets/illustrations/almost-there.svg";
      }

      return "../assets/illustrations/sad.svg";
    });

    return {
      illustrationPath,
    };
  },
});
</script>
