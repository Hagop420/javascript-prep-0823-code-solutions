/* exported compact */
const compact = (array) => {
  const result = [];

  for (const element of array) {
    if (element) {
      result.push(element);
    }
  }

  return result;
};

console.log(compact(['foo', 'bar', 'baz']));
console.log(compact([1, 2, 3, 4, 5]));
console.log(compact([false, true, false, true]));
console.log(compact([]));
