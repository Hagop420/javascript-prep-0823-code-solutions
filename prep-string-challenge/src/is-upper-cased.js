/* exported isUpperCased */
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
