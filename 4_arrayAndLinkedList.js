console.log(" Пример работы с массивами ***********************************")
const arrayExample = () => {
    // Создание массива
    const myArray = [1, 2, 3, 4, 5];

    // Доступ к элементам массива
    console.log(`myArray[2] = ${myArray[2]}`); // Вывод: 1

    // Добавление элемента в конец массива
    myArray.push(6);
    console.log(`New Array = ${myArray}`); // Вывод: [1, 2, 3, 4, 5, 6]

    // Удаление последнего элемента массива
    myArray.pop();
    console.log(`New Array returned to myArray = ${myArray}`); // Вывод: [1, 2, 3, 4, 5]
};

// Вызов примера для массива
console.log("Array Example:");
arrayExample();

console.log(" Связанные списки ********************************************")
// Определение класса Node для связанного списка
class Node {
    constructor(cat) {
        this.cat = cat;
        this.ad = null;
    }
}

// Пример работы со связанным списком
const linkedListExample = () => {
    // Создание связанного списка
   
    const cat2 = new Node(2);
    const cat3 = new Node(3);
    const cat1 = new Node(1);

    cat1.ad = cat2;
    cat2.ad = cat3;

    // Печать элементов связанного списка с разъяснениями
    let current = cat1;
    let index = 1;
    while (current) {
        console.log(`cat ${index} has value ${current.cat}`);
        current = current.ad;
        index++;
    }
};

// Вызов примера для связанного списка
console.log("\nLinked List Example:");
linkedListExample();

console.log("JavaScript не предоставляет встроенного связанного списка")

// JavaScript не предоставляет встроенного типа данных, явно представляющего связанный список, как,
 //например, в языках программирования C++ или Java. Однако, вы можете имитировать связанный список,
 // используя объекты и ссылки между ними.

// Пример простой имитации связанного списка:

// Узел связанного списка
function Nodes(data) {
  this.data = data;
  this.next = null;
}

// Создание узлов
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

// Связывание узлов
node1.next = node2;
node2.next = node3;

// Теперь у вас есть простой связанный список: 1 -> 2 -> 3

console.log(node1.cat);
console.log(node1)


/*
В этом примере `Node` - это конструктор, представляющий узел связанного списка. У каждого узла есть `data` (данные узла) и `next` (ссылка на следующий узел).

Однако, в реальных приложениях, если вам нужны сложные операции со связанными списками, рекомендуется использовать массивы (`Array`), так как они предоставляют более эффективные методы для работы с упорядоченными данными в JavaScript.
*/
