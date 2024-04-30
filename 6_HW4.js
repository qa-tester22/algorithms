//1. Write function code for sum of array elements as recursion function

let myArray = [0, 1, 2, 3];
let count = 0;


// // The slice() method slices out a piece of an array into a new array.
// // This example slices out a part of an array starting from array element 1
// // The slice() method creates a new array.


function summ(array) {
    if (array.length > 0) {
        count++

        console.log(array)

       return array[0] + summ(array.slice(1))
          
    } else {
        return 0;
    }
}

console.log("sum of 0: ", summ([]))
console.log("sum of myArray:", summ(myArray))
console.log("count: ", count)

//2. Write function code for count of array elements function as recursion function

let secondArray = [1, 1, 1, 1, 1];
let count2 = 0;

function quantity(array) {
    if (array.length > 0) {
        count2++

        console.log(array)

       return 1 + quantity(array.slice(1))
          
    } else {
        return 0;
    }
}

console.log("quantity of 0: ", quantity([]))
console.log("quantity of secondArray:", quantity(secondArray))
console.log("count: ", count2)

// 3. Find Max of array
let thirdArray = [2, 5, 8, 1]
let count3 = 0;

function max(array) {
    
    count3++
    if(array.length < 2){
        return "Not enough data to compare"
    } else if(array.length == 2){
        if(array[0] > array[1]){
            return array[0]
        } else {
            return array[1]
        }
    }
    let temporaryMax = max(array.slice(1))
    if(array[0] > temporaryMax){
        return array[0]
    } else {
        return temporaryMax
    }
    
}

console.log("max of thirdArray: ", max(thirdArray))
console.log("count3: ", count3)
console.log("max of []: ", max([]))
