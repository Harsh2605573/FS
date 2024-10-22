let x;

// //array literal

const number = [11,78,44,96,43]
// const mixed = [12,'Hello',true,null]

// console.log(number,typeof number);
// console.log(mixed,typeof mixed);


// //array constuctor

const fruits = new Array('apple','grape','orange')
// console.log(fruits,typeof fruits);


// //get value by index

// x = number[0]
// console.log(x,typeof x);

// number[2]=77
// console.log(number,typeof number);

// x = number[0] + number[3]
// console.log(x,typeof x);

// x = `my favorite fruit is an ${fruits[1]}`
// console.log(x,typeof x);

// x = number.length
// console.log(x,typeof x);

// fruits.length = 2
// console.log(fruits,typeof fruits);

// fruits[2] = 'pear'
// console.log(fruits,typeof fruits);

// fruits[3] = 'strawberry'
// console.log(fruits,typeof fruits);


// //Using the length as the index will always add on the the end

// fruits[fruits.length] = 'blueberry';
// console.log(fruits,typeof fruits);

// fruits[fruits.length] = 'peach';
// console.log(fruits,typeof fruits);

// x=fruits
// console.log(x,typeof x);

const arr = [28, 38, 44, 29, 109];
// arr.push(88);
// arr.unshift(99);
// arr.pop();
// arr.shift();
// x=arr.indexOf(38);
// x=arr.includes(44);
// x=arr.reverse();
// x = arr.toString();
// x = arr.join("-");
// console.log(x,typeof x);


// //slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be not included in the new array.

// x = arr.slice(1, 4);
// console.log(x,typeof x);


// //splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not

// x = arr.splice(0, 3);
// console.log(x,typeof x);
// console.log(arr);