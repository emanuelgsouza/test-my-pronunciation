<template>
  <img :src="illustrationPath" alt="" />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { isAverage, isGood } from "@/support";

type ComponentProps = {
  rate: number;
};

export default defineComponent({
  name: "ResultIllustration",

  props: {
    rate: {
      type: Number,
      default: 0,
    },
  },

  setup(props: ComponentProps) {
    const illustrationPath = computed(() => {
      if (isGood(props.rate)) {
        return require("@/assets/illustrations/congrats.svg");
      }

      if (isAverage(props.rate)) {
        return require("@/assets/illustrations/almost-there.svg");
      }

      return require("@/assets/illustrations/sad.svg");
    });

    return {
      illustrationPath,
    };
  },
});
</script>
