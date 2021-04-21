<template>
  <p class="font-bold text-xl">{{ computedTitle }}</p>

  <ResultIllustration class="my-10 mx-auto" :rate="computedRate" />

  <p class="text-2xl mb-10">{{ computedPercent }}% de acerto!</p>

  <p class="font-bold text-xl">Do texto que propomos...</p>

  <p class="my-10">{{ originalText }}</p>

  <p class="font-bold text-xl">Você falou....</p>

  <p class="my-10">{{ transcript }}</p>

  <BaseButton
    class="mb-6"
    label="Tentar outro desafio!"
    @click="tryAnotherChallenge"
  />

  <BaseButton label="Gravar novamente" variant="ghost" @click="tryAgain" />
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";

import ResultIllustration from "@/components/ResultIllustration/index.vue";
import BaseButton from "@/components/BaseButton.vue";

import { useStore } from "@/store";
import { calculateRate, isGood, isAverage } from "@/support";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ResultPage",

  components: {
    BaseButton,
    ResultIllustration,
  },

  setup() {
    const store = useStore();
    const router = useRouter();

    const routeUuid = router.currentRoute.value.params.uuid as string;

    const currentChallenge = computed(
      () =>
        store.state.challenge.challenges[routeUuid] || {
          sentence: {
            value: "",
          },
          result: {
            transcript: "",
          },
        }
    );

    onMounted(() => {
      // TODO: improve this condition
      if (currentChallenge.value.sentence.value === "") {
        router.push({ name: "HomePage" });
      }
    });

    const originalText = ref(currentChallenge.value.sentence.value);
    const transcript = ref(currentChallenge.value.result.transcript);

    const computedRate = calculateRate(
      originalText.value || "",
      transcript.value || ""
    );

    const computedPercent = computed(() => computedRate * 100);

    const computedTitle = computed(() => {
      if (isGood(computedRate)) {
        return "Parabéns!";
      }

      if (isAverage(computedRate)) {
        return "Quase lá!";
      }

      return "Não foi dessa vez!";
    });

    const tryAnotherChallenge = () => {
      router.push({
        name: "SelectPage",
      });
    };

    const tryAgain = () => {
      router.push({
        name: "ChallengePage",
        params: {
          uuid: currentChallenge.value.uuid || "",
        },
      });
    };

    return {
      originalText,
      transcript,

      computedRate,
      computedTitle,
      computedPercent,
      currentChallenge,

      tryAgain,
      tryAnotherChallenge,
    };
  },
});
</script>
