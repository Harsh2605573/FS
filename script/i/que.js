// //1.
// const arr = [1,2,4,5,7]
// arr.reverse().push(12),
// arr.unshift(6)
// console.log(arr,typeof arr);

// //2.
const arr = [1,4,5,7,9]
const arrr = [9,17,16,22]
// method 1
// arr.pop()
// x = arr.concat(arrr)

// method 2
// arrr.shift()
// x = arr.concat(arrr)

// method 3
// x = arr.slice(0,4).concat(arrr)

// method 4
x = arr.splice(0,4).concat(arr),arrr.splice(1,3)
console.log(x,typeof x);