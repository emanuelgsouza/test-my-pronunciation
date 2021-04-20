import { pairDilceCompare } from "./algorithms";
import { AvailableAlgoritms } from "./algorithms/interfaces";

interface RateComputed {
  (rate: number): boolean;
}

export const calculateRate = (
  originalText: string,
  transcript: string,
  algorithm: keyof typeof AvailableAlgoritms = "PAIR_DILCE"
): number => {
  if (algorithm === AvailableAlgoritms.PAIR_DILCE) {
    return pairDilceCompare(originalText, transcript);
  }

  return 0;
};

export const isGood: RateComputed = (rate) => rate >= 0.75;

export const isAverage: RateComputed = (rate) => rate < 0.75 && rate >= 0.3;

export const isBad: RateComputed = (rate) => rate < 0.3;
