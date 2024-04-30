// // написать код который будет создавать новый массив из чисел
// let array = ['mama', 1000, 'Sunday', 3, 'my', true, 'limit', null, 15, 'elite', undefined, 100, 'destruction', 313, 'abc', 425, 'apples'];

// let arr1 = []

// function arrayContainsNumber(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             arr1.push(arr[i]);
//         }
//     }
//     return arr1;
// }

// console.log(arrayContainsNumber(array))

// // создать функцию, которая проверяет, что входящий 
// // элемент является числом

// function isNumber(number) {
//     return typeof number === 'number'
// }

// console.log(isNumber(15000))
// console.log(isNumber('fine'))

// // callback функция, которая принимается как параметр

// function arrayContainsNumberWithCallback(arr, callback) {
//     let arr1 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             arr1.push(arr[i]);
//         }
//     }
//     return arr1
// }

// function isString(element) {
//     return typeof element === 'string';
// }

// console.log(arrayContainsNumberWithCallback(array, isNumber))
// console.log(arrayContainsNumberWithCallback(array, isString))

// // Task 4 Sveta
// // // найти сумму всех чисел в массиве
// // let numbers = [ 3, 5, 25, 70, 171,200,326, 345, 999, 1000, 1005]

// let numbers = [3, 5, 25, 70, 171, 200, 326, 345, 999, 1000, 1005]
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
// }

// console.log(sum)

// function sumFunction(arrayForSum) {
//     let total = 0;
//     for (let i = 0; i < arrayForSum.length; i++) {
//         total += arrayForSum[i]
//     }
//     return total;
// }
// console.log('Task # 4 HW 5')
// console.log(sumFunction(numbers))

// // *****************************************************************
// // из массива нужно вывести индексы чисел в массиве, не стрингов
// // впернуть индекс , если элемен есть,  и вернуть (-1) если элемента нет
// function getElementIndex(array, element) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === element) {
//             return i;
//         }
//     }
//     return -1
// }

// console.log(getElementIndex(numbers, 15))
// console.log(getElementIndex(numbers, 171))

// console.log(numbers.indexOf(171))
// console.log(numbers.lastIndexOf(15))

// // создать функцию для удаления дубликатов

// let str = 'hello'; // return - helo

function removeDuplicate(string) {
    let resultString = '';

    for (let i = 0; i < string.length; i++) {
        if (resultString.indexOf(string[i] === -1)) {
            resultString += string[i];
        }
    }
    return resultString;

}

console.log(removeDuplicate("hello"))

let str = "hello"; // helo

// function removeDuplicate(string) {

//     let resultString = "";

//     for (let i = 0; i < string.length; i++) {
//         if (resultString.indexOf(string[i]) === -1) {
//             resultString += string[i];
//         }
//     }
//     return resultString;

// }

// console.log(removeDuplicate("aaaaabbbbvvvvffffggd"))


// **********************************************************
// код с урока

// let originalArray = ["string", "one", "threeHundred", 1, 600, 400, 500, "one"];

// // function getElementIndex(arr, element) {
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] === element) {
// //             return i;
// //         }
// //     }
// //     return -1;
// // }

// // console.log(getElementIndex(originalArray,"one"))
// // console.log(originalArray.indexOf("one"))
// // console.log(originalArray.lastIndexOf("one"))

// let str = "hello"; // helo

// function removeDuplicate(string) {

//     let resultString = "";

//     for (let i = 0; i < string.length; i++) {
//         if (resultString.indexOf(string[i]) === -1) {
//             resultString += string[i];
//         }
//     }
//     return resultString;

// }

// console.log(removeDuplicate("aaaaabbbbvvvvffffggd"))
