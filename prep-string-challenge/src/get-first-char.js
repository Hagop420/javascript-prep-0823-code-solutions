/* exported getFirstChar */
const getFirstChar = (string) => {
  return string.charAt(0);
};

console.log(getFirstChar('LearningFuze'));
console.log(getFirstChar('paschal'));
console.log(getFirstChar('HTML'));
console.log(getFirstChar('code'));
console.log(getFirstChar('String'));

const getLastChar = (string) => {
  return string.charAt(string.length - 1);
};

console.log(getLastChar('LearningFuze'));
console.log(getLastChar('paschal'));
console.log(getLastChar('HTML'));
console.log(getLastChar('code'));
console.log(getLastChar('String'));

const capitalize = (word) => {
  return word.charAt(0).toUpperCase();
};

console.log(capitalize('LearningFuze'));
console.log(capitalize('paschal'));
console.log(capitalize('HTML'));
console.log(capitalize('code'));
console.log(capitalize('String'));

const isUpperCased = (word) => {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};

console.log(isUpperCased('LearningFuze'));
console.log(isUpperCased('JavaScript'));
console.log(isUpperCased('HTML'));
console.log(isUpperCased('css'));
console.log(isUpperCased('PHP '));

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

const getWords = (string) => {
  const output = [];

  output.push(string.split(' '));

  return output;
};

console.log(getWords('LearningFuze'));
console.log(getWords('Web Development'));
console.log(getWords('Cascading Style Sheets'));
console.log(getWords('European Computer Manufacturers Association'));

const reverseWord = (word) => {
  // assign this to an empty string
  let rev = '';
  for (let i = word.length - 1; i >= 0; i--) {
    rev += word[i];
  }
  return rev;
};

console.log(reverseWord('foo'));
console.log(reverseWord('rab'));
console.log(reverseWord('LearningFuze'));
console.log(reverseWord('tpircSavaJ'));
console.log(reverseWord('racecar'));
