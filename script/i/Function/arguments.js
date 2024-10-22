// // Default Params
// function registerUser(user = 'Bot') {
//     if (!user){
//         user = 'bot'
//     }
//     return user + ' is Register'
// }
// console.log(registerUser('Harsh'));

// // Rest Params
// function sum(...number) {
//     let total = 0;
//     for(const num of number){
//         total += num;
//     }  
//     return total;
// }
// console.log(sum(1,2,3,4,5,6,7,8,9,10));

// // Objects as params
// function loginUser(user) {
//     return `The user ${user.name} with the id of ${user.id} is logged in`;
// }
// const user = {
//   id: 1,
//   name: 'Harsh',
// };
// console.log(loginUser(user));
// console.log(
//   loginUser({
//     id: 2,
//     name: 'Vivek',
//   })
// );
    
// Arrays as params
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
  
    const item = arr[randomIndex];
  
    console.log(item);
  }
  
  getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);