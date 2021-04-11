/**
 * This algorithm is inspired by this following article and its algorithm
 *
 * http://www.catalysoft.com/articles/StrikeAMatch.html
 */

import { Algorithm } from "./interfaces";

export const getPairs = (str = ""): string[] => {
  if (str.length === 0) {
    return [];
  }

  let currentIndex = 0;
  const data = str.split("");
  const result: string[] = [];

  while (currentIndex !== data.length - 1) {
    result.push(data[currentIndex] + data[currentIndex + 1]);
    currentIndex++;
  }

  return result;
};

export const intersection = (pairs1: string[], pairs2: string[]): number => {
  return pairs1.filter((pair1) => pairs2.includes(pair1)).length;
};

const pairDilceCompare: Algorithm = (str: string, str2: string): number => {
  const pair1 = getPairs(str);
  const pair2 = getPairs(str2);
  const intersectionValue = intersection(pair1, pair2);

  const result = (intersectionValue * 2) / (pair1.length + pair2.length);
  return parseFloat(result.toFixed(2));
};

export default pairDilceCompare;
