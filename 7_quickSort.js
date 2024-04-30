const arr = [0, 3, 2, 5, 5, -1, -5, 23];
let count = 0;

function quickSort(array) {
if(array.length <=1) {
    return array;
}
// let pivotIndex = Math.floor(array.length / 2);
// let pivot = array[pivotIndex]
let pivot = array[0]
let less = [];
let greater = [];

for ( let i = 1; i < array.length; i++) {
    count += 1;
    // if (i < array.length)
    //     continue
    if (array[i] < pivot) {
        less.push(array[i])
    } else {
        greater.push(array[i])
    }
}
return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(arr))
console.log('count ', count)