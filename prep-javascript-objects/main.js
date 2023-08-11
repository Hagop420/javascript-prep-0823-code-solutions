const person = {
  firstName: 'Jack',
  lastName: 'Almadjian',
  hobby: 'Coding',
};

console.log(person);

console.log(`The person's name is ${person.firstName} ${person.lastName}`);

console.log(`The person' current job is: ${person.job}`);
person.job = 'Coder';

person.previousJob = 'Asssistant mechanic';

console.log(`The person'previous job is: ${person.previousJob}`);

console.log('The complete person object:', person);
