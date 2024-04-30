// задача о банкомате - выдать минимальное количество купюр

// задача о кузнечике - прыгает на 2 кочки, или на 3 кочки

// задача о черепашке - поле из клеточек 7 на 7 - из верхнего левого угла дойти до нижнего правого угла. 
// черепашка может двигаться только вниз или направо


// задача о банкомате - выдать минимальное количество 

console.log(`\nTask # ${i = 1} "Задача о банкомате"`);
function withdraw(amount) {
    const denominations = [100, 50, 20, 10, 5, 1];

    let remainingAmount = amount;
    const result = {};

    denominations.forEach(denomination => {
        if (remainingAmount >= denomination) {
            const count = Math.floor(remainingAmount / denomination);
            remainingAmount %= denomination;
            result[denomination] = count;
        }
    });

    return result;
}

const amountToWithdraw = -3000.30 //3030; // 100, 380, 30.30
const result = withdraw(amountToWithdraw);

console.log(`\nДля суммы ${amountToWithdraw} Выдать следующее количество купюр:`);
for (const denomination in result) {
    console.log(`${result[denomination]} купюр по ${denomination}`);
}

// 40 к. = 20 + 20
// 25 - 20 - 10 - 5
// 25 + 10 + 5 = 40

// ******************************************************************************************************
// задача о кузнечике - прыгает на 2 кочки, 

/*
console.log(`\nTask # ${++i} "Задача о кузнечике"`);
function countWays(n) {
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

const numSteps = 5; // Пример: кузнечик хочет дойти до 5-ой клетки
const ways = countWays(numSteps);

console.log(`\nКоличество способов дойти до ${numSteps}-ой клетки: ${ways}`);
*/
// ******************************************************************************************************
// задача о кузнечике - прыгает на 2 кочки, 

// Задача о кузнечике, который прыгает на две клетки вперёд, решается с применением динамического программирования. 
// Каждая клетка представляет собой состояние, а значение в клетке будет показывать количество способов добраться до этой клетки.


// В этом коде мы используем динамическое программирование, создавая массив dp, где dp[i] представляет количество способов добраться до i-ой клетки.

// Мы начинаем с базовых случаев: dp[0] = 1 и dp[1] = 1, так как кузнечик уже находится на начальных позициях.
// Затем мы используем цикл для заполнения остальных значений массива dp, где каждое значение dp[i] 
// равно сумме предыдущих двух значений (dp[i-1] и dp[i-2]), так как кузнечик может прыгнуть на две клетки вперёд.
// В конце, значение dp[n] будет показывать количество способов добраться до n-ой клетки.



console.log(`\nTask # ${++i} "Задача о кузнечике"`);

function countShortestPaths(n) {
    let dp = new Array(n + 1).fill(0);
    let paths = new Array(n + 1).fill([]);

    dp[0] = 1;
    dp[1] = 1;
    paths[0] = [0];
    paths[1] = [1];

    for (let i = 2; i <= n; i++) {
        if (i - 1 >= 0) {
            dp[i] += dp[i - 1];
            paths[i] = [...paths[i - 1], i];
        }
        if (i - 2 >= 0) {
            dp[i] += dp[i - 2];
            if (dp[i - 2] > 0) {
                paths[i] = [...paths[i - 2], i];
            }
        }
    }

    return { count: dp[n], path: paths[n] };
}

const numSteps = 5;
const resultPath = countShortestPaths(numSteps);

console.log(`\nКоличество кратчайших путей до ${numSteps}-ой клетки: ${resultPath.count}`);
console.log(`Кратчайший путь кузнечика: ${resultPath.path.join(' -> ')}`);

// Этот код возвращает объект с количеством способов (count) и массивом пути (path). 
// Каждый элемент массива path представляет шаг кузнечика.
// В этом коде мы используем тот же подход, что и в предыдущем примере, но теперь проверяем оба 
// возможных прыжка (на 1 и 2 клетки) и выбираем кратчайший путь. 
// Результаты хранятся в массиве paths, который представляет собой последовательность шагов кузнечика.

// ******************************************************************************************************

// задача о черепашке - поле из клеточек 7 на 7 - из верхнего левого угла дойти до нижнего правого угла. 
// черепашка может двигаться только вниз или направо

// В этом примере, функция countPaths(m, n) принимает количество строк m и количество столбцов n. 
// Она использует динамическое программирование для заполнения матрицы dp, где каждая ячейка представляет количество путей до этой точки.
// Затем функция возвращает количество путей до правого нижнего угла, которое и является ответом на задачу.

console.log(`\nTask # ${++i} "Задача о черепашке"`);

// function countPaths(m, n) {
//     let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

//     // Инициализация крайних значений
//     for (let i = 0; i < m; i++) {
//         dp[i][0] = 1;
//     }
//     for (let j = 0; j < n; j++) {
//         dp[0][j] = 1;
//     }

//     // Заполнение матрицы
//     for (let i = 1; i < m; i++) {
//         for (let j = 1; j < n; j++) {
//             dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//         }
//     }

//     return dp[m - 1][n - 1];
// }

// const m = 7; // количество строк
// const n = 7; // количество столбцов

// const pathsCount = countPaths(m, n);
// console.log(`Число путей черепашки: ${pathsCount}`);

function countPaths(m, n) {
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
}

function findShortestPath() {
    let path = [];
    for (let i = 0; i < 6; i++) {
        path.push('Вниз');
    }
    for (let i = 0; i < 6; i++) {
        path.push('Вправо');
    }
    return path;
}

const m = 7;
const n = 7;

const pathsCount = countPaths(m, n);
const shortestPath = findShortestPath();

console.log(`\nЧисло путей черепашки: ${pathsCount}`);
console.log(`Кратчайший путь черепашки: ${shortestPath.join(' -> ')}`);



// ******************************************************************************************************
console.log(`\nTask # ${++i} "Задача о рюкзаке через динамический алгоритм решена"`);

// ******************************************************************************************************

//  алгоритм динамического программирования для задачи о рюкзаке

// Алгоритм решения задачи о рюкзаке с использованием динамического программирования выглядит следующим образом:
// Создаем двумерный массив dynamicProgramming => dp размером (n + 1) x (capacity + 1), где n = thing - количество предметов.
// Инициализируем первую строку и первый столбец нулями.
// Итерируем по предметам и для каждого предмета и для каждого возможного веса от 1 до capacity:
// Если вес предмета меньше или равен текущему весу, то рассматриваем две опции:
// Не включаем предмет: dp[i-1][j]
// Включаем предмет: value + dp[i-1][j-weight]
// Выбираем максимальное значение из этих двух вариантов и записываем его в dp[i][j].
// В конце, dp[n][capacity] будет содержать максимальную стоимость, которую можно унести в рюкзаке.
// Чтобы определить, какие предметы были взяты, можно пройти обратно по заполненной таблице,
//  начиная с dp[n][capacity] и идя к dp[0][0]. Если значение dp[i][j] не равно dp[i-1][j], то предмет был взят.
//0|0|0|0|0|0|
//0|0|0|0|0|0|
//0|0|0|0|0|0|
//0|0|0|0|0|0|
function knapsackDynamic(capacity, items) {
    const thing = items.length;
    let dynamicProgramming = new Array(thing + 1).fill(0).map(() => new Array(capacity + 1).fill(0));
console.log("сфоримировался " + typeof(dynamicProgramming) + " со значением " + dynamicProgramming)

//     Этот код создает двумерный массив dynamicProgramming размером (thing + 1) x (capacity + 1). 
//Давайте разберем, что означает каждая часть выражения:
// new Array(thing + 1): Это создает новый массив длиной thing + 1. thing в данной задаче, вероятно, обозначает количество предметов.
// .fill(0): Это заполняет весь созданный массив нулями. Теперь у нас есть массив из thing + 1 элементов, все из которых равны нулю.
// .map(() => new Array(capacity + 1).fill(0)): Это применяет функцию для каждого элемента массива. В данном случае, функция создает новый массив длиной capacity + 1 и заполняет его нулями. Таким образом, мы получаем двумерный массив размером (thing + 1) x (capacity + 1), полностью заполненный нулями.
// Итак, dynamicProgramming представляет собой двумерный массив, в котором строки соответствуют количеству предметов, а столбцы - вместимости рюкзака. 
//Каждый элемент dynamicProgramming[i][j] будет содержать максимальную стоимость предметов, которые можно унести, имея i предметов и вместимость рюкзака j.

    for (let i = 1; i <= thing; i++) {
        for (let j = 1; j <= capacity; j++) {
            const { weight, value } = items[i - 1];
            if (weight <= j) {
                dynamicProgramming[i][j] = Math.max(value + dynamicProgramming[i - 1][j - weight], dynamicProgramming[i - 1][j]);
            } else {
                dynamicProgramming[i][j] = dynamicProgramming[i - 1][j];
            }
        }
    }

    let selectedItems = [];
    let i = thing, j = capacity;
    while (i > 0 && j > 0) {
        if (dynamicProgramming[i][j] !== dynamicProgramming[i - 1][j]) {
            selectedItems.push([items[i - 1].name, items[i-1].weight, items[i-1].value]);
            j -= items[i - 1].weight;
        }
        i--;
    }
// console.log("В итоге массив " + dynamicProgramming)
// console.log("В итоге вещи в массиве " + dynamicProgramming[thing])


    return {
        maxValue: dynamicProgramming[thing][capacity],
        selectedItems: selectedItems.reverse()
    };
}

let backpackСapacity = 4;
let shopItems = [
    { name: "tapeRecorder", weight: 4, value: 3000 },
    { name: "laptop", weight: 3, value: 2000 },
    { name: "guitar", weight: 1, value: 1500 },
];

let shopItemsPlus = [
    { name: "tapeRecorder", weight: 4, value: 3000 },
    { name: "laptop", weight: 3, value: 2000 },
    { name: "guitar", weight: 1, value: 1500 },
    {name: "iPhone", weight: 1, value: 2000 }
];

let shopItemsPlusPlus = [
    { name: "tapeRecorder", weight: 4, value: 3000 },
    { name: "laptop", weight: 3, value: 2000 },
   // { name: "guitar", weight: 1, value: 1500 },
    {name: "iPhone", weight: 1, value: 2000 },
    {name: "mp3Player", weight: 1, value: 1000 },
    { name: "guitar", weight: 1, value: 1500 },
];


const dynamicResult_3 = knapsackDynamic(backpackСapacity, shopItems);

const dynamicResult_4 = knapsackDynamic(backpackСapacity, shopItemsPlus);

const dynamicResult_5 = knapsackDynamic(backpackСapacity, shopItemsPlusPlus);

console.log(`Максимальная стоимость: ${dynamicResult_3.maxValue}`);
console.log(`Выбранные предметы: ${dynamicResult_3.selectedItems.join(", ")}`);

console.log(`Максимальная стоимость: ${dynamicResult_4.maxValue}`);
console.log(`Выбранные предметы: ${dynamicResult_4.selectedItems.join(", ")}`);

console.log(`Максимальная стоимость: ${dynamicResult_5.maxValue}`);
console.log(`Выбранные предметы: ${dynamicResult_5.selectedItems.join(", ")}`);

// В этом примере, функция knapsackDynamic(capacity, items) принимает вместимость рюкзака и массив предметов.
// Возвращает объект с максимальной стоимостью maxValue и массивом выбранных предметов selectedItems.
