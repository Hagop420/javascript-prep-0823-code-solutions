/* exported reverseWord */
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
