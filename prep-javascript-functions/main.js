const addTwoNumbers = (num1 = 2, num2 = 2) => {
  return num1 + num2;
};

console.log(addTwoNumbers());

const convertHoursToMinutes = (hours = 3) => hours * 60;

console.log(convertHoursToMinutes());

const getGreeting = (name = 'Brett') => `Hello ${name}`;

console.log(getGreeting());

const addAndMultiplyBy5 = (num1 = 10, num2 = 5) => {
  return num1 * num2;
};

console.log(addAndMultiplyBy5());

const multiplyAndDivideBy5 = (num1 = 2, num2 = 2) => num1 / num2;

console.log(multiplyAndDivideBy5());

const subtractTwoNumbers = (radius = 5222) => {
  return 2 * Math.PI * radius;
};

console.log(subtractTwoNumbers());

const getFullName = (firstName = 'Jack', lastName = 'Almadjian') => {
  return `${firstName} ${lastName}`;
};

console.log(getFullName());
