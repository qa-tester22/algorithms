const friends = {
    // you: ['alice', 'bob', 'claire', 'anna'],
     alice: ['peggy'],
     bob: ['peggy', 'anuj'],
     claire: ['tom', 'john'],
     peggy: [],
     anuj: ['anna'],
     john: [],
     anna: ['tom'],
     tom: [],
     you: ['alice', 'bob', 'claire', 'anna'],
 }
 
 const friendsArray = [['you',['alice', 'bob', 'claire', 'anna']],['alice',['peggy']],['bob',['peggy', 'anuj'],['john']]]
 
 friendsArray[0]
 friendsArray[1]
 
 function bfs (graph, start, end) {
     let queue = [];
     queue.push(start);
     while (queue.length > 0) {
         let current = queue.shift()
         if(!graph[current]) {
             graph[current] = []
             console.log('empty')
         }
         if(graph[current].includes(end)) {
             console.log('empty')
             console.log(graph[current])
             return true 
         } else {
             queue = [...queue, ...graph[current]]
            //queue = [queue, graph[current]]
            console.log(queue)
         }
     }
      return false 
 }
 
 //console.log(bfs(friends, 'you', 'tom'))
 // console.log(bfs(friends, 'you', 'anna'))
 // console.log(bfs(friends, 'anna', 'tom'))
  console.log(bfs(friends, 'alice', 'anna'))