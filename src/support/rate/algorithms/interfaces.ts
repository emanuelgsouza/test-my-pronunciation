export interface Algorithm {
  (str: string, str2: string): number;
}

export const AvailableAlgoritms = {
  PAIR_DILCE: "PAIR_DILCE",
} as const;
