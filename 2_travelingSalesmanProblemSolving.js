function travelingSalesman(cityDistances) {
    const n = cityDistances.length; // Количество городов
    const cities = [0, 1, 2]; // Индексы трех городов

    let optimalRoute = [];
    let optimalDistance = Infinity;

    // Перебираем все перестановки порядка городов
    for (const city1 of cities) {
        for (const city2 of cities) {
            if (city2 === city1) continue; // Города не должны совпадать
            for (const city3 of cities) {
                if (city3 === city1 || city3 === city2) continue; // Города не должны совпадать
                const currentDistance = cityDistances[city1][city2] + cityDistances[city2][city3] + cityDistances[city3][city1];
                if (currentDistance < optimalDistance) {
                    optimalDistance = currentDistance;
                    optimalRoute = [city1, city2, city3];
                }
            }
        }
    }

    return { optimalRoute, optimalDistance };
}


// Расстояния между городами
const cityDistances = [
    [0, 10, 15],
    [10, 0, 20],
    [15, 20, 0]
];

// Вызываем функцию travelingSalesman
const result = travelingSalesman(cityDistances);

// Выводим результат
console.log("Optimal Route:", result.optimalRoute);
console.log("Optimal Distance:", result.optimalDistance, "км");

// Optimal Route: [ 0, 1, 2 ]
// Optimal Distance: 45 км





















// function travelingSalesman(cityDistances) {
//     const n = cityDistances.length;
//     const cities = Array.from({ length: n }, (_, index) => index);

//     let optimalRoute = [];
//     let optimalDistance = Infinity;

//     function generatePermutations(arr, result) {
//         if (arr.length === 1) {
//             result.push([...arr]);
//             return;
//         }

//         for (let i = 0; i < arr.length; i++) {
//             const current = arr.splice(i, 1);
//             generatePermutations(arr, result);
//             arr.splice(i, 0, ...current);
//         }
//     }

//     const allPermutations = [];
//     generatePermutations(cities, allPermutations);

//     for (const permutation of allPermutations) {
//         let currentDistance = 0;

//         for (let i = 0; i < n; i++) {
//             const fromCity = permutation[i];
//             const toCity = ( i === n - 1 ) ? permutation[0] : permutation[i + 1];
            
//             currentDistance += cityDistances[fromCity][toCity];
//         }

//         if (currentDistance < optimalDistance) {
//             optimalDistance = currentDistance;
//             optimalRoute = permutation;
//         }
//     }

//     return { optimalRoute, optimalDistance };
// }

// const cityDistances = [
//     [0, 10, 15],
//     [10, 0, 20],
//     [15, 20, 0]
// ];

// const result = travelingSalesman(cityDistances);

// console.log( "Optimal Route: " + result.optimalRoute);
// console.log("Optimal Distance: " + result.optimalDistance + " km");