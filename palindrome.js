//convert all uppercase letters to lowercase

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  //g: global, i: case insensitive

  // Check if the string is equal to its reverse
  return str === str.split("").reverse().join("");
}

module.exports = isPalindrome;
