// // Step 1
// const library = [
//     {
//         title : 'Ramayana',
//         author : 'Valmiki',
//         status : {
//             own : true,
//             reading : false,
//             read : false,
//         },
//     },
//     {
//         title : 'Bhagavad Gita',
//         author : 'Vyasa',
//         status : {
//             own : true,
//             reading : false,
//             read : false,
//         },
//     },
//     {
//         title : 'Mahabharata',
//         author : 'Ved Vyasa',
//         status : {
//             own : true,
//             reading : false,
//             read : false,
//         },
//     },
// ]

// // Step 2
// for(i=0;i<3;i++){
//     library[i].status.read = true;
// }
// console.log(library);

// // Step 3
// const { title: firstBook } = library[0];
// console.log(firstBook);

// // Step 4
// const libraryJSON = JSON.stringify(library);
// console.log(libraryJSON);