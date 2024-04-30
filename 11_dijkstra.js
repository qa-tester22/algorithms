// // // Алгоритм Дейкстры используется для нахождения кратчайших путей от 
// // //начальной вершины до всех остальных вершин во взвешенном графе. 
// // // реализация алгоритма Дейкстры на JavaScript:

function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
    for (let vertex in graph) {
        distances[vertex] = Infinity;
        visited[vertex] = false;
    }

    distances[start] = 0;

    for (let i = 0; i < Object.keys(graph).length - 1; i++) {
        let minVertex = null;
        for (let vertex in graph) {
            if (!visited[vertex] && (minVertex === null || distances[vertex] < distances[minVertex])) {
                minVertex = vertex;
            }
        }

        visited[minVertex] = true;

        for (let neighbor in graph[minVertex]) {
            let edgeWeight = graph[minVertex][neighbor];
            let totalWeight = distances[minVertex] + edgeWeight;
            if (totalWeight < distances[neighbor]) {
                distances[neighbor] = totalWeight;
            }
        }
    }

    return distances;
}

// Пример использования
const graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};

const startVertex = 'A';
const result = dijkstra(graph, startVertex);
console.log(result);

// //*************************************** */
// // В этом примере, функция dijkstra принимает граф в виде объекта, 
// //где ключи - это вершины, а значения - объекты с соседями и весами рёбер. 
// //start - это начальная вершина, от которой ищем кратчайшие пути.

// // Функция возвращает объект с кратчайшими расстояниями до каждой вершины
// // от стартовой вершины. 
// // Например, для графа и начальной вершины выше, вывод будет:
// // { A: 0, B: 1, C: 3, D: 4 }

// // ****************************************************
// // Второй вариант
// // // Граф представлен в виде объекта, где ключи - вершины, 
// // а значения - смежные вершины и их веса.

// const graph = {
//     A: { B: 1, C: 4 },
//     B: { A: 1, C: 2, D: 5 },
//     C: { A: 4, B: 2, D: 1 },
//     D: { B: 5, C: 1 }
// };

// // Функция для нахождения вершины с наименьшей стоимостью в непосещенных вершинах.
// function findLowestCostNode(costs, processed) {
//     let lowestCost = Infinity;
//     let lowestCostNode = null;

//     for (let node in costs) {
//         const cost = costs[node];
//         if (cost < lowestCost && !processed.includes(node)) {
//             lowestCost = cost;
//             lowestCostNode = node;
//         }
//     }

//     return lowestCostNode;
// }

// // Функция для нахождения кратчайших путей от начальной вершины до всех остальных.
// function dijkstra(graph, startNode) {
//     const costs = {};
//     const parents = {};
//     const processed = [];

//     // Инициализируем начальные значения.
//     for (let node in graph) {
//         if (node === startNode) {
//             costs[node] = 0;
//         } else {
//             costs[node] = Infinity;
//         }
//         parents[node] = null;
//     }

//     let node = findLowestCostNode(costs, processed);

//     while (node) {
//         const cost = costs[node];
//         const neighbors = graph[node];

//         for (let neighbor in neighbors) {
//             const newCost = cost + neighbors[neighbor];
//             if (newCost < costs[neighbor]) {
//                 costs[neighbor] = newCost;
//                 parents[neighbor] = node;
//             }
//         }

//         processed.push(node);
//         node = findLowestCostNode(costs, processed);
//     }

//     return { costs, parents };
// }

// // // Пример использования алгоритма.
// const startNode = "A";
// const { costs, parents } = dijkstra(graph, startNode);

// console.log("Кратчайшие расстояния от вершины " + startNode + ":");
// console.log(costs);
// console.log("Кратчайшие пути:");
// for (let node in parents) {
//     const path = [node];
//     let parent = parents[node];
//     while (parent) {
//         path.unshift(parent);
//         parent = parents[parent];
//     }
//     console.log(startNode + " -> " + node + ": [" + path.join(" -> ") + "]");
// }
// Этот код иллюстрирует алгоритм Дейкстры, который находит кратчайшие
// расстояния и пути от начальной вершины до всех остальных вершин
// в графе.
// Исполнение :
// Кратчайшие расстояния от вершины A:
// { A: 0, B: 1, C: 3, D: 4 }
// Кратчайшие пути:
// A -> A: [A]
// A -> B: [A -> B]
// A -> C: [A -> B -> C]
// A -> D: [A -> B -> C -> D]

/*
// // ****************************************************
// //   вариант Три

//Поиск кратчайшего пути в графе
//Каждой вершине графа соответствует объект с расстоянием между двух вершин
const graph = {}
graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

// Создаем функцию, она будет принимать начальный граф,
// начальную точку и конечную 
function shortPath(graph, start, end) {
    // создадим объект для хранения кратчайших путей
    const costs = {}
    // создадим массив для проверенных узлов (вершин)
    const processed = []
    // объект для хранения соседних вершин, рассматриваемого узла
    let neighbors = {}
    // заполняем таблицу куда мы можем добраться из стартовой точки
    // остальные точки заполняем бесконечно большим числом
    // получаем список ключей графа и итерируемся по ним
    Object.keys(graph).forEach(node => {
        // Если текущая вершина не равна стартовой,
        // то будем заполнять значение
        if (node !== start) {
            // добавляем вершины со значениями пути
            // стартовый узел не входит сюда
            let value = graph[start][node]
            // если в эту вершину есть путь, то добавляем 
            //значение, иначе добавляем большое число
            costs[node] = value || 100000000
        }
    })
// console.log(costs)
// из А есть путь в В и С , а остальные большое число, 
// т к в них пути нет

// Нужно найти вершину, в которую можно попасть 
// из точки А и путь самый короткий

// создаем функцию, передаем в нее объект со стоимостью
// всех путей и массив с уже обработанными узлами

    let node = findNodeLowestCost(costs, processed)
    // вызываем функцию, и будем крутиться 
    // пока нода не пустая - пока не обойдем весь граф
    while (node) {
// на каждой итерации получаем стоимость текущей вершины
        const cost = costs[node]
// и те узлы, в которые можем попасть из этой вершины 
        neighbors = graph[node]
// получаем ключи этого объекта и проходим по каждому узлу
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor]
// если стоимость меньше , то перезаписываем
            if (newCost < costs[neighbor]) {

                costs[neighbor] = newCost
            }
        })

// обработанную вершину добавляем в массив обработанных вершин
        processed.push(node)
        node = findNodeLowestCost(costs, processed)
    }
    return costs
}


function findNodeLowestCost(costs, processed) {
  // создаем переменную с минимальным значением
    let lowestCost = 100000000
// и ноду - которую по итогу мы будем возвращать с 
// минимальным значением
    let lowestNode;
 // если стоимость, которую получили и вершина на текущей итерации 
 // не находится в массиве обработанных вершин, то
 // мы нашли новый объект с коротким путем

    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost
            lowestNode = node
        }
    })
    return lowestNode
}

console.log(shortPath(graph, 'a', 'g'));
*/