/* exported initial */
const initial = (array) => {
  const output = [];
  for (let i = 0; i < array.length - 1; i++) {
    output.push(array[i]);
  }

  return output;
};

console.log(initial(['foo', 'bar', 'baz']));
console.log(initial([1, 2, 3, 4, 5, 6]));
console.log(initial([true, false, false, true]));
console.log(initial([]));
