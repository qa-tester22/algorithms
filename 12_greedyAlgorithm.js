// Жадный алгоритм о поиске оптимального количества станций для покрытия вещания

const states = ["ID", "NV", "UT", "WA", "MT", "OR", "CA", "AZ"]
const stations = [
    { name: "kOne", states: ["ID", "NV", "UT"] },
    { name: "kTwo", states: ["WA", "ID", "MT"] },
    { name: "kThree", states: ["OR", "NV", "CA"] },
    { name: "kFour", states: ["NV", "UT"] },
    { name: "kFive", states: ["CA", "AZ"] },
  //  { name: "kSix", states: ["ID", "NV", "UT", "WA", "MT", "OR", "CA", "AZ"] }
]

// function findStations(states, stations) {
//     // будем наполнять массив штатами, в которых уже есть вещание
//     let coveredStates = [];
//     // массив с рассмотренными станциями
//     let selectedStations = [];

//     // пока длина массива покрытые штаты меньше всех штатов выполняем
//     while (coveredStates.length < states.length) {
//         // выбираем станцию с наибольшим количеством штатов
//         let bestStation = null;
//         //введем переменную - массив со штатами, где есть вещание
//         let statesCovered = [];

// //находим лучшую станцию=большее количество непокрытых станций
//         for (let i = 0; i < stations.length; i++) {
//             const station = stations[i];
//             const covered = coveredStates.concat(station.states.filter(s => !coveredStates.includes(s)));
//             if (covered.length > statesCovered.length) {
//                 bestStation = station;
//                 statesCovered = covered;
//             }
//         }

//         if (bestStation !== null) {
//             selectedStations.push(bestStation);
//             coveredStates = statesCovered;
//         } else {
//             break;
//         }
//     }

//     let stationNames = [];
//     for (let i = 0; i < selectedStations.length; i++) {
//         stationNames.push(selectedStations[i].name);
//     }

//     return stationNames;
// }

// // const states = ['AL', 'AK', 'AZ', /*...другие штаты...*/, 'WY'];
// // const stations = [
// //     { name: 'Station 1', states: ['AL', 'GA', 'FL'] },
// //     { name: 'Station 2', states: ['KY', 'TN', 'OH'] },
// //     /*...другие станции...*/
// //     { name: 'Station N', states: ['ID', 'MT', 'WY'] }
// // ];

// const selectedStations = findStations(states, stations);
// console.log(selectedStations);

// второй вариант 

function findStations(states, stations) {
    let coveredStates = [];
    let selectedStations = [];

    while (coveredStates.length < states.length) {
        let bestStation = null;
        let statesCovered = [];

        for (let i = 0; i < stations.length; i++) {
            const station = stations[i];
            let covered = [];
            for (let j = 0; j < station.states.length; j++) {
                const state = station.states[j];
                if (!coveredStates.includes(state)) {
                    covered.push(state);
                }
            }

            if (covered.length > statesCovered.length) {
                bestStation = station;
                statesCovered = covered;
            }
        }

        if (bestStation !== null) {
            selectedStations.push(bestStation);
            coveredStates = coveredStates.concat(statesCovered);
        } else {
            break;
        }
    }

    let stationNames = [];
    for (let i = 0; i < selectedStations.length; i++) {
        stationNames.push(selectedStations[i].name);
    }

    return stationNames;
}

// const states = ['AL', 'AK', 'AZ', /*...другие штаты...*/, 'WY'];
// const stations = [
//     { name: 'Station 1', states: ['AL', 'GA', 'FL'] },
//     { name: 'Station 2', states: ['KY', 'TN', 'OH'] },
//     /*...другие станции...*/
//     { name: 'Station N', states: ['ID', 'MT', 'WY'] }
// ];

const selectedStations = findStations(states, stations);
console.log(selectedStations);



// жадный алгоритм для задачи о рюкзаке

function knapsackDynamic(items, capacity) {
    items.sort((a, b) => {
        const ratioA = a.value / a.weight;
        const ratioB = b.value / b.weight;

        if (ratioA !== ratioB) {
            return ratioB - ratioA;
        } else {
            if (a.weight <= capacity && b.weight <= capacity) {
                return b.value - a.value;
            } else if (a.weight <= capacity) {
                return -1;
            } else if (b.weight <= capacity) {
                return 1;
            } else {
                return 0;
            }
        }
    });

    let result = [];
    let currentWeight = 0;

    for (let i = 0; i < items.length; i++) {
        if (currentWeight + items[i].weight <= capacity) {
            result.push(items[i]);
            currentWeight += items[i].weight;
        } else {
            let remainingCapacity = capacity - currentWeight;
            if (items[i].value > result[result.length - 1].value) {
                result.pop();
                result.push({
                    name: items[i].name,
                    weight: remainingCapacity,
                    value: items[i].value * (remainingCapacity / items[i].weight)
                });
            }
            break;
        }
    }

    return result;
}

let capacity = 4
let items = [
    { name: "tapeRecorder", weight: 4, value: 3000 },
    { name: "laptop", weight: 3, value: 2000 },
    { name: "guitar", weight: 1, value: 1500 },
]
console.log('')
//console.log(knapsack(items, capacity) )
//console.log(knapsackDynamic(items, capacity))