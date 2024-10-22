// // Define a function
// function Hello() {
//     console.log('Hello World');
// }
// // Invoke, execute or call a function
// Hello();

// // Define a function with parameters
// function add(num1,num2) {
//     console.log(num1 + num2);
// }
// // Invoke function with arguments
// add(21,59)

// // Parameters vs. Arguments
// // Parameters are the names of the variables that are used to pass data into a function.
// // Arguments are the values that are passed into the function

// Returning a value
function sub(num1,num2) {
    return num1 - num2;
    console.log('After the return');
}
// Assign the returned value to a variable
const result = sub(10, 2);
console.log(result,sub(20,3));