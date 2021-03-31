<template>
  <template v-if="hasChallenge">
    <p v-if="hasRecorded" class="font-bold text-2xl text-center">
      Gostaria de verificar seu desempenho?
    </p>

    <p v-else class="font-bold text-2xl text-center">
      Agora grave sua voz lendo a frase abaixo
    </p>

    <BaseTimer ref="timer" class="text-2xl mt-16" />

    <p class="text-center my-20">{{ currentChallengeText }}</p>

    <template v-if="!hasRecorded">
      <BaseButton
        v-if="!isRecording"
        label="Gravar voz"
        @click="startRecording"
      />

      <BaseButton
        v-else
        label="Parar gravação"
        variant="ghost"
        @click="finishRecording"
      />
    </template>

    <template v-else>
      <BaseButton
        class="mb-6"
        label="Verificar gravação"
        @click="checkRecording"
      />

      <!-- <BaseButton
        class="mb-6"
        label="Ouvir gravação"
        variant="secondary"
        @click="listenRecording"
      /> -->

      <BaseButton
        class="mb-6"
        label="Gravar novamente"
        variant="ghost"
        @click="startRecording"
      />
    </template>
  </template>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { computed, defineComponent, onMounted, Ref, ref } from "vue";
import { useRouter } from "vue-router";

// TODO: may we can use the timer logic as a hook
// something like that const [timer, start, stop] = useTimer()
import BaseTimer from "@/components/BaseTimer.vue";
import BaseButton from "@/components/BaseButton.vue";
import VoiceRecognition from "@/support/voice-recognization";
import { ActionTypes } from "@/store/modules/challenge/action-types";

export default defineComponent({
  name: "ChallengeView",

  components: { BaseTimer, BaseButton },

  setup() {
    const store = useStore();
    const router = useRouter();

    const voiceRecognization = new VoiceRecognition();

    // you can use the component as ref in this case
    const timer: Ref<typeof BaseTimer> = ref(BaseTimer);

    // vuex challenge module
    const currentChallenge = computed(
      () => store.state.challenge.currentChallenge
    );

    const hasChallenge = computed(() => store.getters.hasChallenge);

    const currentChallengeText = computed(() => {
      return currentChallenge.value.sentence.value;
    });

    // recording logic
    const isRecording = ref(false);
    const hasRecorded = ref(false);

    const processingRecording = async (transcript: string) => {
      return store
        .dispatch(ActionTypes.SAVE_RESULT, {
          transcript,
          duration: timer.value.timer,
        })
        .then(() => {
          finishRecording();

          router.push({
            name: "ResultPage",
          });
        });
    };

    const startRecording = () => {
      isRecording.value = true;
      hasRecorded.value = false;

      // you can access the component instance using .value
      timer.value.startTimer();

      voiceRecognization
        .start()
        .then(processingRecording)
        .catch((err) => {
          console.log(err);
        });
    };

    const finishRecording = () => {
      isRecording.value = false;
      hasRecorded.value = true;

      timer.value.stopTimer();

      voiceRecognization.stop();
    };

    const listenRecording = () => {
      console.log("listen");
    };

    const checkRecording = () => {
      console.log("check");
    };

    // hooks
    onMounted(() => {
      if (!hasChallenge.value) {
        router.push({
          name: "SelectPage",
        });
      }
    });

    return {
      timer,

      // states
      isRecording,
      hasRecorded,

      // computeds
      hasChallenge,
      currentChallengeText,
      currentChallenge,

      // methods
      checkRecording,
      listenRecording,
      startRecording,
      finishRecording,
    };
  },
});
</script>
