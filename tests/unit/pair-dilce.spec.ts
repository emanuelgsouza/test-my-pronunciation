import pairDilceCompare, {
  getPairs,
  intersection,
} from "@/support/rate/algorithms/pair-dilce";

describe("pairDilceCompare algorithm tests", () => {
  describe("getPairs util", () => {
    it("should return an empty array when nothing is passed", () => {
      expect(getPairs()).toEqual([]);
      expect(getPairs("")).toEqual([]);
    });

    it("should return the correct pair of a given string", () => {
      expect(getPairs("today")).toEqual(["to", "od", "da", "ay"]);

      expect(getPairs("dessert")).toEqual(["de", "es", "ss", "se", "er", "rt"]);

      expect(getPairs("desert")).toEqual(["de", "es", "se", "er", "rt"]);

      expect(getPairs("price")).toEqual(["pr", "ri", "ic", "ce"]);

      expect(getPairs("prize")).toEqual(["pr", "ri", "iz", "ze"]);

      expect(getPairs("i have a dream today")).toEqual([
        "i ",
        " h",
        "ha",
        "av",
        "ve",
        "e ",
        " a",
        "a ",
        " d",
        "dr",
        "re",
        "ea",
        "am",
        "m ",
        " t",
        "to",
        "od",
        "da",
        "ay",
      ]);

      expect(getPairs("i have dream today")).toEqual([
        "i ",
        " h",
        "ha",
        "av",
        "ve",
        "e ",
        " d",
        "dr",
        "re",
        "ea",
        "am",
        "m ",
        " t",
        "to",
        "od",
        "da",
        "ay",
      ]);
    });
  });

  describe("intersection util", () => {
    it("should return the quantity of intersection pairs between two list of pairs of letters", () => {
      expect(
        intersection(
          ["de", "es", "ss", "se", "er", "rt"],
          ["de", "es", "se", "er", "rt"]
        )
      ).toEqual(5);

      expect(
        intersection(["pr", "ri", "ic", "ce"], ["pr", "ri", "iz", "ze"])
      ).toEqual(2);
    });
  });

  describe("pairDilce algorithm", () => {
    it("should return 0.5 for price/prize", () => {
      expect(pairDilceCompare("price", "prize")).toEqual(0.5);
    });

    it("should return 0.91 for desert/dessert", () => {
      expect(pairDilceCompare("desert", "dessert")).toEqual(0.91);
    });

    it("should return 0.94 for i have a dream today/i have dream today", () => {
      expect(
        pairDilceCompare("i have a dream today", "i have dream today")
      ).toEqual(0.94);
    });
  });
});
