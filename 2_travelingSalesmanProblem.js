// traveling salesman problem

function travelingSalesman(cityDistances) {
    const n = cityDistances.length;  // Количество городов
    const cities = Array.from({ length: n }, (_, index) => index);  // Индексы городов

    let optimalRoute = [];
    let optimalDistance = Infinity;

    // Генерация всех перестановок порядка городов
    function generatePermutations(arr, result) {
        if (arr.length === 1) {
            result.push([...arr]);
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            const current = arr.splice(i, 1);
            generatePermutations(arr, result);
            arr.splice(i, 0, ...current);
        }
    }

    const allPermutations = [];
    generatePermutations(cities, allPermutations);

    // Перебор всех перестановок
    for (const permutation of allPermutations) {
        let currentDistance = 0;

        
        // Рассчитываем общее расстояние текущей перестановки
        for (let i = 0; i < n; i++) {
            const fromCity = permutation[i];
            const toCity = (i === n - 1) ? permutation[0] : permutation[i + 1];
        // const toCity = permutation[(i + 1) % n];

            currentDistance += cityDistances[fromCity][toCity];
        }

        // Проверяем, является ли текущая перестановка оптимальной
        if (currentDistance < optimalDistance) {
            optimalDistance = currentDistance;
            optimalRoute = permutation;
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
