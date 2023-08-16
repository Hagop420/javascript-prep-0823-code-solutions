// // create your loops here.
console.log('whileLoop1 output', whileLoop1());

function whileLoop1() {
  const res = [];
  let i = 0;
  while (i < 10) {
    res.push(i);
    i++;
  }
  return res;
}

const whileLoop2 = () => {
  const res = [];
  let i = 0;
  while (i <= 18) {
    res.push(i);
    i += 2;
  }
  return res;
};

console.log('whileLoop2', whileLoop2());

// for loop practice

const forLoop1 = () => {
  const res = [];
  for (let i = 0; i < 10; i += 1) {
    res.push(i);
  }
  return res;
};

console.log('forLoop1', forLoop1());

const forLoop2 = () => {
  const res = [];
  for (let i = 100; i >= 0; i -= 1) {
    res.push(`Time till explosion: ${i}`);
  }
  return res;
};

console.log('forLoop2', forLoop2());

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
// forInLoops

const forInLoop1 = () => {
  const res = [];
  for (const obj in object) {
    res.push(obj);
  }
  return res;
};

console.log(forInLoop1());
const forInLoop2 = () => {
  const res = [];
  for (const obj in object) {
    res.push(object[obj]);
  }
  return res;
};

console.log('forInLoop2', forInLoop2());
