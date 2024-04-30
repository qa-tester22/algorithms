// const graph = {}
// graph.start = {a: 6, b: 2}
// graph.a = {end: 1}
// graph.b = {a: 3, end: 5}

// const graph = {
//     start: {a: 6, b: 2},
//     a: {end: 1},
//     b: {a: 3, end: 5}
// }

// {b: 2, a: 3, end: 1}




const graph = {}
graph.a = { b: 2, c: 1 }
graph.b = { f: 7 }
graph.c = { d: 5, e: 2 }
graph.d = { f: 2 }
graph.e = { f: 1 }
graph.f = { g: 1 }
graph.g = {}

// 100000000
// A = B:2
// A = C:1
// ACD = (1+5) 6
// ACE = (1+2) 3
// ABF = (2+7) 9
// ACEF = (3+1) 4
// ACDF = (6+2) 8
// ABFG = (9+1) 10 !
// ACDFG = (8+1) 9 !
// ACEFG = (4+1) 5 !

function shortPath(graph, start, end) {
    const costs = {}
    const processed = []
    let neighbors = {}

    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node]
            costs[node] = value || 100000
        }
    })
    console.log(`Путкты, в которые можно дойти из ${start} без стыковок - `)
    console.log(costs)



    let node = findNodeLowestCost(costs, processed)
    while (node) {
        const cost = costs[node]
        neighbors = graph[node]
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor]
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost
            }
        })

        processed.push(node)
        node = findNodeLowestCost(costs, processed)
    }
    console.log(`Пукты, по которым прошелся алгоритм - ${processed}`)
    console.log(`Начальный  пункт ${start} имеет значение `)
    console.log(Object.values(graph.a))

    console.log(`Путкты, в которые можно дойти из ${start}  - `)
    console.log(costs)
    
    console.log(`До конечного пункта ${end} из пункта ${start} 
                можно дойти за - ${costs.g} условных единиц(весов:минут, км...)`)
    console.log(`До пунктов  ${Object.keys(graph)} из пункта ${start} существуют наикратчайшие пути `)
    return costs

}

function findNodeLowestCost(costs, processed) {

    let lowestCost = 100000

    let lowestNode;
    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost
            lowestNode = node
        }
    })
    return lowestNode

}
shortPath(graph, 'a', 'g')
console.log(shortPath(graph, 'a', 'g'));


