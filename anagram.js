//2 strings return true if t is anagram of s both lowercase
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const sSorted = s.split("").sort().join("");
  const tSorted = t.split("").sort().join("");
  return sSorted === tSorted;
}

module.exports = isAnagram;
