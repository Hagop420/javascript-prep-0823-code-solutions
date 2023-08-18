/* exported tail */
const tail = (array) => {
  const newArr = [];
  for (let i = 1; i < array.length; i++) {
    newArr.push((array[i - 1] = array[i]));
  }
  return newArr;
};

console.log(tail(['foo', 'bar', 'baz']));
console.log(tail([1, 2, 3, 4, 5]));
console.log(tail([false, true, false, true]));
console.log(tail([]));
