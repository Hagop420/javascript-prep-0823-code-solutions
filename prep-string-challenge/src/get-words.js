/* exported getWords */
const getWords = (string) => {
  const output = [];

  output.push(string.split(' '));

  return output;
};

console.log(getWords('LearningFuze'));
console.log(getWords('Web Development'));
console.log(getWords('Cascading Style Sheets'));
console.log(getWords('European Computer Manufacturers Association'));
