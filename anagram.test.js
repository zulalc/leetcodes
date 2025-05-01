const isAnagram = require("./anagram.js");

describe("isAnagram", () => {
  test("should return true for anagram strings", () => {
    expect(isAnagram("racecar", "carrace")).toBe(true);
  });
  test("should return false for non-anagram strings", () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });
});
