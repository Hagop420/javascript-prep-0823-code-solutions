/* exported getKeys */
const getKeys = (object) => {
  const output = [];
  for (const obj in object) {
    output.push(obj);
  }
  return output;
};

const learningfuze = {
  latitude: 33.6349,
  attitude: 'sanguine',
  longitude: 117.7405,
};
console.log(getKeys(learningfuze));
