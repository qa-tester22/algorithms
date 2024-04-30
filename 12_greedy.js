// Жадный алгоритм о поиске оптимального количества станций для покрытия вещания

const states = ["ID", "NV", "UT", "WA", "MT", "OR", "CA", "AZ"]
const stations = [
    { name: "kOne", states: ["ID", "NV", "UT"] },
    { name: "kTwo", states: ["WA", "ID", "MT"] },
    { name: "kThree", states: ["OR", "NV", "CA"] },
    { name: "kFour", states: ["NV", "UT"] },
    { name: "kFive", states: ["CA", "AZ"] },
    { name: "kSix", states: ["ID", "NV", "UT", "WA", "MT", "OR", "CA", "AZ"]}
]

function findStations(states, stations) {

    let coveredStates = [];
    let selectedStations = [];

    while (coveredStates.length < states.length) {
        let bestStation = null
        let statesCovered = []

        for (let i = 0; i < stations.length; i++) {
            const station = stations[i]
            let covered = []

            for (j = 0; j < station.states.length; j++) {
                let state = station.states[j]
                if (!coveredStates.includes(state)) {
                    covered.push(state);
                }

            }

            if (covered.length > statesCovered.length) {
                bestStation = station;
                statesCovered = covered
            }
        }

        if (bestStation !== null) {
            selectedStations.push(bestStation)
            coveredStates = coveredStates.concat(statesCovered)
        } else {
            break
        }
    }

    let stationNames = [];
    for (let i = 0; i < selectedStations.length; i++) {
        stationNames.push(selectedStations[i].name)
    }


    return stationNames
}


const selectedStations = findStations(states, stations);
console.log(selectedStations);


// NP-полная задача переводится как "NP-complete problem" на английском.
// Вот точные определения:
// 1. **NP (Недетерминированная полиномиальная)**: Это класс задач в теории вычислений, для которых,
//если есть подозрение, что у нас есть правильный ответ, мы можем в разумное время проверить его.
//Однако поиск правильного ответа сам по себе может занять длительное время.

// 2. **NP-полная (NP-complete)**: Это класс задач, который является как NP, так и трудноразрешимым
//(то есть, невозможно найти алгоритм, который решает все экземпляры задачи за разумное время).
//Если вы найдете эффективный алгоритм для одной NP-полной задачи, то вы найдете эффективный алгоритм для всех NP-полных задач.

// Примером NP-полной задачи является "Задача о коммивояжере" (Traveling Salesman Problem),
//в которой необходимо найти самый короткий маршрут, который проходит через все города и возвращается обратно в исходный город.