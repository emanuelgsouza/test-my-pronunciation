import { Ref, ref } from "vue";

export const padHour = (value: string | number): string => {
  if (typeof value === "string") {
    return value.padStart(2, "0");
  }

  return value.toString().padStart(2, "0");
};

export const formatTimer = (seconds: number | void): string => {
  const value = seconds || 0;

  const result = [];

  result.push(padHour(Math.floor(value / 60)));

  result.push(padHour(value % 60));

  return result.join(":");
};

export const useTimer = (): [Ref<number>, () => void, () => void] => {
  const timeout = ref(0);
  const timer = ref(0);

  const startTimer = () => {
    stopTimer();

    timeout.value = setInterval(() => {
      timer.value += 1;
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timeout.value);
  };

  return [timer, startTimer, stopTimer];
};

export default formatTimer;
