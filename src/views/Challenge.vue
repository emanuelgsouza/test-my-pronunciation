<template>
  <template v-if="hasChallenge">
    <div>{{ $route.params }}</div>

    <div>{{ currentChallenge }}</div>
  </template>
</template>

<script>
import { useStore } from "@/store";
import { computed, defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ChallengeView",

  setup() {
    const store = useStore();
    const router = useRouter();

    const currentChallenge = computed(
      () => store.state.challenge.currentChallenge
    );

    const hasChallenge = computed(() => store.getters.hasChallenge);

    onMounted(() => {
      if (!hasChallenge.value) {
        router.push({
          name: "SelectPage",
        });
      }
    });

    return {
      hasChallenge,
      currentChallenge,
    };
  },
});
</script>
