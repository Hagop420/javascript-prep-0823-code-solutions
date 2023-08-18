/* exported getValues */
const getValues = (object) => {
  const output = [];
  for (const obj in object) {
    output.push(object[obj]);
  }
  return output;
};

const learningfuze2 = {
  latitude: 33.6349,
  attitude: 'sanguine',
  longitude: 117.7405,
};
console.log(getValues(learningfuze2));
