import { isAverage, isBad, isGood, calculateRate } from "@/support/rate";

describe("rate function tests", () => {
  describe("isBad tests", () => {
    it("should return true when rate is 0.29", () => {
      expect(isBad(0.29)).toBe(true);
    });

    it("should return false when rate is 0.3", () => {
      expect(isBad(0.3)).toBe(false);
    });

    it("should return false when rate is 0.31", () => {
      expect(isBad(0.31)).toBe(false);
    });
  });

  describe("isAverage tests", () => {
    it("should return false when rate is 0.29", () => {
      expect(isAverage(0.29)).toBe(false);
    });

    it("should return true when rate is 0.3", () => {
      expect(isAverage(0.3)).toBe(true);
    });

    it("should return true when rate is 0.5", () => {
      expect(isAverage(0.5)).toBe(true);
    });

    it("should return true when rate is 0.74", () => {
      expect(isAverage(0.74)).toBe(true);
    });

    it("should return false when rate is 0.75", () => {
      expect(isAverage(0.75)).toBe(false);
    });
  });

  describe("isGood tests", () => {
    it("should return false when rate is 0.74", () => {
      expect(isGood(0.74)).toBe(false);
    });

    it("should return true when rate is 0.75", () => {
      expect(isGood(0.75)).toBe(true);
    });

    it("should return true when rate is 0.9", () => {
      expect(isGood(0.9)).toBe(true);
    });
  });

  describe("calculateRate tests", () => {
    it("should return 0.5 for price/prize", () => {
      expect(calculateRate("price", "prize")).toEqual(0.5);
    });

    it("should return 0.91 for desert/dessert", () => {
      expect(calculateRate("desert", "dessert")).toEqual(0.91);
    });

    it("should return 0.94 for i have a dream today/i have dream today", () => {
      expect(
        calculateRate("i have a dream today", "i have dream today")
      ).toEqual(0.94);
    });
  });
});
