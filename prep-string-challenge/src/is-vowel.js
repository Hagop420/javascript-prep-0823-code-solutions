/* exported isVowel */
const isVowel = (char) => {
  // regular expression that gets all vowels
  const regExV = /[aeiouAEIOU]/;
  if (regExV.test(char)) {
    return true;
  } else {
    return false;
  }
};

console.log(isVowel('L'));
console.log(isVowel('f'));
console.log(isVowel('Z'));
console.log(isVowel('a'));
console.log(isVowel('E '));
console.log(isVowel('I'));
console.log(isVowel('o'));
console.log(isVowel('u'));
