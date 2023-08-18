/* exported last */
const last = (array) => {
  return array[array.length - 1];
};

console.log(last(['foo', 'bar', 'baz']));
console.log(last([1, 2, 3, 4, 5]));
console.log(last([false, true, false, true]));
console.log(last([]));
