const isPalindrome = require("./palindrome.js");

describe("isPalindrome", () => {
  test("should return true for a palindrome string", () => {
    expect(isPalindrome("madam")).toBe(true);
  });
  test("should return true for a uppercase palindrome string", () => {
    expect(isPalindrome("Madam")).toBe(true);
  });
  test("should return true for a palindrome with symbols and spaces", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });
  test("should return true for an empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });
  test("should return false for a non-palindrome", () => {
    expect(isPalindrome("ice")).toBe(false);
  });
  test("should return false for a non-palindrome with symbols and spaces", () => {
    expect(isPalindrome("Hello, World!")).toBe(false);
  });
});
