/* exported getValue */
const dave = { firstName: 'David', lastName: 'Thomas' };
const learningFuze = { latitude: 33.6349, longitude: 117.7405 };

const getValue = (object, key) => {
  return object[key];
};

console.log(getValue(dave, 'firstName'));
console.log(getValue(dave, 'lastName'));

console.log(learningFuze);
