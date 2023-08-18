/* exported setValue */
const setValue = (object, key, value) => {
  object[key] = value;
  return object;
};

const dave2 = { firstName: 'David' };
setValue(dave2, 'lastName', 'Thomas');
const tim = { name: 'Tim', language: 'JavaScript' };
setValue(tim, 'language', 'PHP');
console.log(tim); // { name: "Tim", language: "PHP" }
console.log(dave2); // { firstName: "David", lastName: "Thomas" }
