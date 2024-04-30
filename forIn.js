// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x] + "<br>"; 
// }
// let k = 15;
// let numbers = [1, 8, k, 45, 4, 9, 16, 25];

// for (let index in numbers) {
//   if (index % 2 !== 0) {
//     k = 0;
//     break;
//   }
// }

// console.log(numbers);
let k = 15;
let numbers = [1, 8, k, 45, 4, 9, 16, 25];

for (let index of numbers) {
     numbers = [1, 8, k, 45, 4, 9, 16, 25];
  if (index % 2 !== 0) {
    k = 0;
  } else {k = 15}
  console.log('При четном-нечетном значении числа ' + index + ' массив numbers имеет вид ' + numbers);
}

