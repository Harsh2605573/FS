let x;

// // Creating an object,Object litral
// const person = {
//   name: 'John Doe',
//   age: 30,
//   isAdmin: true,
//   address: {
//     street: '123 Main st',
//     city: 'Boston',
//     state: 'MA',
//   },
//   hobbies: ['music', 'sports'],
// };

// // Accessing object properties
// x = person.name; // Dot notation
// x = person['age']; // Bracket notation
// x = person.address.state;
// x = person.hobbies[0];
// console.log(x);

// // Updating properties
// person.name = 'Jane Doe';
// person['age'] = 25;
// console.log(person);

// // Deleting properties
// delete person.age;
// console.log(person);

// // Create new properties
// person.hasChildren = true;
// console.log(person);

// // Add functions
// person.greet = function () {
//   console.log(`Hello, my name is ${this.name}`);
// };
// person.greet();

// // Keys with multiple words
// const person2 = {
//   'first name': 'Brad',
//   'last name': 'Designy',
// };
// x = person2['first name'];
// console.log(x);

// //object spreadf method
// // Create object using the object constructor
// const todo = new Object();
// todo.id = 1;
// todo.name = 'Buy Milk';
// todo.completed = false;
// x = todo;
// console.log(x);

// // Object Nesting
// const person = {
//   address: {
//     coords: {
//       lat: 42.9384,
//       lng: -71.3232,
//     },
//   },
// };

// x = person.address.coords.lat;
// console.log(x);

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// // Spread operator
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);
// // Same as using ...
// const obj4 = Object.assign({}, obj1, obj2);
// console.log(obj4);

// // Array of objects
// const todos = [
//     { id: 1, name: 'Buy Milk' },
//     { id: 2, name: 'Pickup kids from school' },
//     { id: 3, name: 'Take out trash' },
//   ];
//   x = todos[0].name;
//   console.log(x);

// // Get array of object keys
// x = Object.keys(todos);
// console.log(x);

// // Get length of an object
// x = Object.keys(todos).length;
// console.log(x);

// // Get array of object values
// x = Object.values(todos);
// console.log(x);

// // Get array of object key/value pairs
// x = Object.entries(todos);
// console.log(x);

// // Check if object has a property
// x = todos.hasOwnProperty('age');
// console.log(x);



// //destructring

// // Setting object properties with the same name as a variable
// const firstName = 'John';
// const lastName = 'Doe';
// const age = 30;

// const person = {
//   firstName,
//   lastName,
//   age,
// };

// console.log(person.age);


// // Destructuring object properties

// const todo = {
//     id: 1,
//     title: 'Take out trash',
//     user: {
//       name: 'John',
//     },
//   };
  
//   const {
//     id: todoId, // rename id to todoId
//     title,
//     user: { name }, // destructuring multiple levels
//   } = todo;
  
//   console.log(name);


// // Destructuring arrays & using the rest/spread operator
// const numbers = [23, 67, 33, 49, 52];

// const [first, second, third, ...rest] = numbers;

// console.log(first, second, third, rest);