// // 1.Looping Through an Array

// const numbers = [10, 20, 30, 40];

// // for loop
// for (let i=0 ; i<numbers.length ; i++) {
//     console.log(numbers[i]);
// }

// // for in loop
// for (let i in numbers) {
//     console.log(numbers[i]);
// }

// // for of loop
// for (let i of numbers) {
//     console.log(i);
// }

// // for Each loop
// numbers.forEach ((i) =>
// {
//     console.log(i);  
// })



// // 2.Loop Through an Object

// const student = {
//   name: "Bala",
//   age: 21,
//   grade: "A"
// };

// for (let i in student) {
//     console.log(i,":", student [i]);
// }



// // 3.Using map()

// const marks = [50, 60, 70, 80];
// const finalMarks = marks.map (num => (num - 10)); 
//     console.log(finalMarks);
   


// // 4.Using filter()

// const values = [5, 12, 8, 25, 3, 15];
// const finalValues = values.filter (num => num>10);
// console.log(finalValues);



// // 5.Using reduce()

// const nums = [5, 10, 15, 20];
// const finalNums = nums.reduce ((sum,num) => sum + num , 0);
// console.log(finalNums);

