<template>
  <p class="font-bold text-2xl mb-8">Frases...</p>

  <BaseButton label="Ingles" variant="ghost" disabled />

  <p class="font-bold text-2xl my-8">Sendo o nível...</p>

  <BaseButton label="Fácil" class="mb-6" @click="createEasyChallenge" />

  <BaseButton label="Médio" class="mb-6" @click="createMediumChallenge" />

  <BaseButton label="Difícil" @click="createHardChallenge" />
</template>

<script lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import { useStore } from "@/store";
import { ActionTypes } from "@/store/modules/challenge/action-types";
import { ChallengeLevel } from "@/types";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ChooseChallengeView",

  components: { BaseButton },

  setup() {
    const store = useStore();
    const router = useRouter();

    const createChallenge = (level: ChallengeLevel) => {
      store.dispatch(ActionTypes.BUILD_CHALLENGE, level).then((challenge) => {
        router.push({
          name: "ChallengePage",
          params: {
            uuid: challenge.uuid || "",
          },
        });
      });
    };

    const createEasyChallenge = () => {
      createChallenge(ChallengeLevel.EASY);
    };

    const createMediumChallenge = () => {
      createChallenge(ChallengeLevel.MEDIUM);
    };

    const createHardChallenge = () => {
      createChallenge(ChallengeLevel.HARD);
    };

    return {
      createEasyChallenge,
      createMediumChallenge,
      createHardChallenge,
    };
  },
});
</script>
