// /*
// с помощью жадного алгоритма написать код JS для составления 
// списков уроков , максимум из которых можно провести в одном классе,
// рисование 9:00 - 10:00,
// английский 9:30 - 10:30,
// математика 10:00 - 11:00,
// информатика 10:30 - 11:30,
// музыка 11:00 - 12:00 
// */

// /*
// Жадный алгоритм может быть применен для составления расписания. 
// В данном случае, мы будем искать оптимальный вариант, 
// начиная с самого раннего времени и добавляя уроки, 
// пока они не начнут пересекаться с уже запланированными.
// Урок должен начинаться раньше всех после окончания предыдущего урока
// и должен заканчиваться раньше других.
// */

function greedySchedule(lessons) {
    lessons.sort((a, b) => a.end - b.end); // сортируем уроки по завершению

    const schedule = []
    let lastLessonEnd = 0;

    for (const lesson of lessons) {
        if (lesson.start >= lastLessonEnd) {
            schedule.push(lesson);
            lastLessonEnd = lesson.end;
        }
    }

    return schedule;
}

const lessons = [
   
    { subject: 'English', start: 9.5, end: 10.5 },
    { subject: 'mathematics', start: 10, end: 11 },
    { subject: 'computer science', start: 10.5, end: 11.5 },
    { subject: 'music', start: 11, end: 12 },
    { subject: 'drawing', start: 9, end: 10 }
];

const schedule = greedySchedule(lessons);

//console.log(schedule)

//console.log('The best Lessons Schedule:');
schedule.forEach(lesson => {
   // console.log(`${lesson.subject} ${lesson.start}:00 - ${lesson.end}:00`);
});

/*
Исполнение
для 
const lessons = [
    { subject: 'drawing', start: 9, end: 10 },
    { subject: 'English', start: 9.5, end: 10.5 },
    { subject: 'mathematics', start: 10, end: 11 },
    { subject: 'computer science', start: 10.5, end: 11.5 },
    { subject: 'music', start: 11, end: 12 }
];

// The best Lessons Schedule:
// drawing 9:00 - 10:00
// mathematics 10:00 - 11:00
// music 11:00 - 12:00

// ***************

// The best Lessons Schedule:
// drawing 9:00 - 10:00
// mathematics 10:00 - 10.5:00 - нужно исправить
// computer science 10.5:00 - 11.5:00 - нужно исправить

// для
const lessons = [
    { subject: 'drawing', start: 9, end: 10 },
    { subject: 'English', start: 9.5, end: 10.5 },
    { subject: 'mathematics', start: 10, end: 10.5 },
    { subject: 'computer science', start: 10.5, end: 11.5 },
    { subject: 'music', start: 11, end: 12 }
];

// 
*/


// /*
// Этот код реализует жадный алгоритм для составления расписания уроков. 
// В данном примере, функция greedySchedule принимает массив объектов с информацией о предметах
//  и их времени начала и окончания. Она возвращает оптимальное расписание.

// Помните, что жадные алгоритмы могут дать оптимальный результат не всегда, в зависимости от данных. 
// В некоторых случаях может потребоваться более сложный подход к составлению расписания.
// */

// //Исправляем вывод времени уроков

// //В этой версии кода добавлена функция formatTime, которая 
// //преобразует время в строку с двумя цифрами как часы и минуты.

function greedyScheduleLessons(allLessons) {
    // сортируем уроки по времени окончания
    allLessons.sort((a, b) => a.end - b.end); //сортировка в порядке возрастания
    
    let bestSchedule = [];
    let endOfLastLesson = 0;

    for (let i = 0; i < allLessons.length; i++) {
        if (allLessons[i].start >= endOfLastLesson) {
            let oneLesson = {
                name: allLessons[i].name,
                start: formatTime(allLessons[i].start),
                end: formatTime(allLessons[i].end)
            };
            bestSchedule.push(oneLesson);
            endOfLastLesson = allLessons[i].end;
        }
    }

    return bestSchedule;

}

function formatTime(time) {
    let hours = Math.floor(time);
    let minutes = (time - hours) * 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

}

// // // Уроки 
const allLessons = [
    { name: 'drawing', start: 9, end: 10 },
    { name: 'English', start: 9.5, end: 10.5 },
    { name: 'mathematics', start: 10, end: 10.5 },
    { name: 'computer science', start: 10.5, end: 11.5 },
    { name: 'music', start: 11, end: 12 }
]

const bestSchedule = greedyScheduleLessons(allLessons);

//console.log('\nRecommended Schedule: ');
bestSchedule.forEach(oneLesson => {
 //   console.log(`${oneLesson.name} from ${oneLesson.start} to ${oneLesson.end}`);
});

// /*
// The padStart() method of String values pads this string with another string 
// (multiple times, if needed) until the resulting string reaches the given length.
//  The padding is applied from the start of this string.
// */

// function knapsack(capacity, items) {
//     const n = items.length;
//     let dp = new Array(n + 1).fill(0).map(() => new Array(capacity + 1).fill(0));

//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= capacity; j++) {
//             const { weight, value } = items[i - 1];
//             if (weight <= j) {
//                 dp[i][j] = Math.max(value + dp[i-1][j-weight], dp[i-1][j]);
//             } else {
//                 dp[i][j] = dp[i-1][j];
//             }
//         }
//     }

//     let selectedItems = [];
//     let i = n, j = capacity;
//     while (i > 0 && j > 0) {
//         if (dp[i][j] !== dp[i-1][j]) {
//             selectedItems.push(items[i-1].name);
//             j -= items[i-1].weight;
//         }
//         i--;
//     }

//     return {
//         maxValue: dp[n][capacity],
//         selectedItems: selectedItems.reverse()
//     };
// }

// let capacity = 4;
// let items = [
//     {name: "tapeRecorder", weight: 4, value: 3000},
//     {name: "laptop", weight: 3, value: 2000},
//     {name: "guitar", weight: 1, value:1500},
// ];

// const result = knapsack(capacity, items);
// console.log(`Максимальная стоимость: ${result.maxValue}`);
// console.log(`Выбранные предметы: ${result.selectedItems.join(", ")}`);

// жадный алгоритм для задачи о рюкзаке

/*
function knapsack(items, capacity) {
    items.sort((a, b) => {
        const ratioA = a.value / a.weight;
        const ratioB = b.value / b.weight;

        if (ratioA !== ratioB) {
            return ratioB - ratioA;
        } else {
            if (a.value <= capacity && b.value <= capacity) {
                return b.value - a.value;
            } else if (a.value <= capacity) {
                return -1;                              // If a.value is less than or equal to the knapsack capacity, 
                                                        // but b.value is not, it returns -1. 
                                                        // This implies that a should be considered before b in the sorted order.
            } else if (b.value <= capacity) {
                return 1;                             // Conversely, if b.value is less than or equal to the knapsack capacity,
                                                      // but a.value is not, it returns 1. 
                                                      // This implies that b should be considered before a in the sorted order.
            } else {
                return 0;                              // The 0 is returned in the last else block, which is a fallback case 
                                                       // in case neither of the conditions is satisfied. 
                                                       // This case is generally not expected to happen, 
                                                       // and its purpose might be to ensure consistency in the sorting order.
            }
        }
    });

    let result = [];
    let currentValue = 0;

    for (let i = 0; i < items.length; i++) {
        if (currentValue + items[i].value <= capacity) {
            result.push(items[i]);
            currentValue += items[i].value;
        } else {
            let remainingCapacity = capacity - currentValue;
            if (items[i].value > result[result.length - 1].value) {
                result.pop();
                result.push({
                    name: items[i].name,
                    weight: items[i].weight,
                    value: items[i].value * (remainingCapacity / items[i].weight)
                });
            }
            break;
        }
    }

    return result;
}

let capacity = 3500;
let items = [
    {name: "tapeRecorder", weight: 4, value: 3000},
    {name: "laptop", weight: 2, value: 2000},
    {name: "guitar", weight: 1, value:1500},
];
console.log("\n В рюкзак положим")
console.log(knapsack(items, capacity) )

*/

function knapsack(items, capacity) {
    items.sort((a, b) => {
        const ratioA = a.value / a.weight;
        const ratioB = b.value / b.weight;

        return ratioB - ratioA;
    });

    let result = [];
    let remainingCapacity = capacity;
    let i = 0;

    while (i < items.length && items[i].weight <= remainingCapacity) {
        result.push(items[i]);
        remainingCapacity -= items[i].weight;
        i++;
    }

    if (i < items.length && remainingCapacity > 0) {
        if (result.length > 0 && items[i].value > result[result.length - 1].value) {
            result.pop();
            result.push({
                name: items[i].name,
                weight: remainingCapacity,
                value: (items[i].value / items[i].weight) * remainingCapacity
            });
        }
    }

    return result;
}

let capacity = 35;
let items = [
    {name: "tapeRecorder", weight: 30, value: 3000},
    {name: "laptop", weight: 20, value: 2000},
    {name: "guitar", weight: 15, value:1500},
];
console.log("\n В рюкзак положим");
console.log(knapsack(items, capacity));
