interface RateComputed {
  (rate: number): boolean;
}

// TODO: implement the correct logic
export const calculateRate = (
  originalText: string,
  transcript: string
): number => {
  return 0;
};

export const isGood: RateComputed = (rate) => rate >= 0.75;

export const isAverage: RateComputed = (rate) => rate < 0.75 && rate >= 0.3;

export const isBad: RateComputed = (rate) => rate < 0.3;
