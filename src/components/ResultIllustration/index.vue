<template>
  <img :src="illustrationPath" alt="" />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { isAverage, isGood } from "@/support";

import type { ResultIllustrationProps } from "./types";

export default defineComponent({
  name: "ResultIllustration",

  props: {
    rate: {
      type: Number,
      default: 0,
    },
  },

  setup(props: ResultIllustrationProps) {
    const illustrationSvg = computed(() => {
      if (isGood(props.rate)) {
        return "congrats.svg";
      }

      if (isAverage(props.rate)) {
        return "almost-there.svg";
      }

      return "sad.svg";
    });

    const illustrationPath = computed(() => {
      return require(`@/assets/illustrations/${illustrationSvg.value}`);
    });

    return {
      illustrationSvg,
      illustrationPath,
    };
  },
});
</script>
