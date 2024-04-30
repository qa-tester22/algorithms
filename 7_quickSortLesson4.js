// сумма всех чисел массива
// the sum of all numbers in the array

let array = [2, 4, 6];
let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
let total = 0;

function sum(array) {
    for (let x = 0; x < array.length; x++) {
        total += array[x];
    }
    return total;
}

console.log(sum(array));
console.log(sum(arr));



// 1) определяем базовый случай - [], [1] - 0 или 1 элемент в массиве
// define the base case - [], [1] - zero or one element in the array
// Напишите код для функции sum с использованием рекурсии
// Write the code for the sum function using recursion
// 2) уменьшаем размер массива - голова и хвост массива
// 2) reduce the size of the array - separate the head and tail of the array
// работает O(log n * n)
// делим массив на подмассивы


// const arr = [0,3,2,5,6,8,23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,]
// let count = 0;

// function quickSort(array) {
//     // зададим базовый случай , при котором рекурсия будет заканчиваться, 
//     // когда длина массива меньше или равна 1 = возвращается сам массив

//     if(array.length <=1) {
//         return array
//     }
//     // выберем опорный элемент - возьмем середину
//     let pivotIndex = Math.floor(array.length / 2);
//     // обращаемся к опорному элементу по вычисленному индексу
//     let pivot = array[pivotIndex];
//     // нам нужно два массива - для чисел меньше опорного и больше опорного
//     let less = [];
//     let greater = [];
//     // проходим по всему массиву и сравниваем с опорным
//     for (let i = 0; i < array.length; i++) {
//         count +=1;
//         // сам опорный элемент пропускаем
//         if (i === pivotIndex)
//             continue
//         if (array[i] < pivot) {
//             less.push(array[i])
//         } else {
//             greater.push(array[i])
//         }
//     }
//     return [...quickSort(less), pivot, ...quickSort(greater)]
// }

// console.log (quickSort(arr))
// console.log('count ', count)