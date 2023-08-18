/* exported head */
const head = (array) => {
  return array[0];
};

console.log(head(['foo', 'bar', 'baz']));
console.log(head([1, 2, 3, 4, 5]));
console.log(head([false, true, false, true]));
console.log(head([]));
