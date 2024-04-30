// Двумя основными алгоритмами обхода графа являются поиск в глубину (Depth-First Search, DFS)
// и поиск в ширину (Breadth-First Search, BFS).
// смежный список - создается объект, поля которого -это вершины,
// и каждое поле равняется массиву вершин, в которые есть путь

const graph = {
    you: ['alice', 'bob', 'claire'],
    bob: ['anuj', 'peggy'],
    alice: ['peggy'],
    claire: ['tom'],
    anuj: [],
    peggy: [],
    tom: [],
    johny: []
}
// push shift
const isSeller = name => name === 'tom';
const addDeque = (friends, deque) => {
    for (i = 0; i < friends.length; i++) {
        deque.push(friends[i])
    }
}
// поиск в ширину BFS (breadthFirstSearch)
const search = (name) => {
    const visited = [];
    const deque = [];

    addDeque(graph['you'], deque);
    while (deque.length > 0) {
        const person = deque[0];
        deque.shift();
        if (!visited.includes(person)) {
            visited.push(person)
            if (isSeller(person)) {
                console.log(person)
                return true
            }
            addDeque(graph[person], deque);
        }
    }
    return false;
}

console.log(search())

// second variant 
function bfs(graph, firstNode, seller) {
    // инициализируем очередь
    let queue = [];
    // добавляем начальную вершину firstNode в очередь
    queue.push(firstNode)
    // помечаем firstNode как посещенную вершину 
    // во избежание повторного добавления в очередь
    let visited = []
firstNode.visited = true
while (queue.length > 0) {
// удаляем первый элемент из очереди
    let current = queue.shift()
    // graph[current] - соседи текущей вершины
    for (let neighbor of graph[current]) {
    //если сосед не посещался
        if(!neighbor.visited) {
            //добавляем его в очередь
            queue.push(neighbor)
            //помечаем вершину как посещенную
            neighbor.visited = true
            // если сосед является пунктом назначения, 
            // цель достигнута
            if(neighbor === seller)
                return true
        }
    } 
}
//если seller не найден, его достичь невозможно
return false
}

console.log(bfs(graph, 'you', 'mam'))


// third variant из точки А в точку В можем дойти или нет
function breadthFirstSearch(graph, start, end) {
    // очередь - FIFO First In First Out
    let queue = [];
    // наполняем очередь - сразу добавляем стартовую вершину
    queue.push(start)
    // создаем цикл - будем крутиться пока в очереди есть хоть 1 элемент
    while (queue.length > 0) {
        // из начала очереди достаем первый элемент
        let current = queue.shift()
        // если по текущей вершине в графе ничего не находится,
        // из этой вершины никуда пути нет = [пустой массив по этой вершине]
        if (!graph[current]) {
            graph[current] = []
        }
        // если в графе по текущей вершине массив содержит конечную точку - 
        // мы завершаем обход графа и возвращаем true
        if (graph[current].includes(end)) {
            return true
        } else {
            // если условие не отработало, то добавляем в очередь новые вершины
            // разворачиваем то, что уже находится в очереди в массив
            // лежит в массиве, и в конец разворачиваем массив, который лежит в графе 
            // по текущей вершине 
            queue = [...queue, ...graph[current]]
            // цикл будет крутиться пока очередь не пустая
        }
    }
    // когда дойдем до финальной точки - цикл остановится
    return false;
}

console.log(breadthFirstSearch(graph, 'you', 'ann'))

// поиск в ширину решает задачу поиска пути в графе
// существует ли такой путь или нет
// и он находит путь за минимальное количество шагов