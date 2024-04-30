const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,70];
let count1 = 0;
let count2 = 0;

function binarySearch(array, item) {
    let start = 0
    let end = array.length
    let middle;
    // let found = false
    let position = -1
  //  while (found === false && start <= end) {
        while (start <= end) {
        count1 += 1;
        
        middle = Math.floor((start + (end-start) / 2));
        if (array[middle] === item) {
           // found = true
            position = middle
            return {position};
        }
        
        if (item < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    
    return {position};
}
console.log(binarySearch(array, 7))
console.log(count1);

function recursiveBinarySearch(array, item, start = 0, end = array.length) {
   
    let position = -1
    if ((item < start) || (item > end)) {
        return position
    }
    let middle = Math.floor((start + (end-start) / 2));
    count2 += 1
    if (item === array[middle]) {
        return middle
    }
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, start, middle - 1 )
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end )
    }
}

 console.log(binarySearch(array, 5))
 console.log(count1)
console.log(recursiveBinarySearch(array, -3, 0, array.length))
console.log(count2)

// create array
const arr = Array(100).fill(null).map(() => Math.floor(Math.random() * 1000) - 300)
//console.log(arr)
 //console.log(arr.sort((a,b) => (a-b)))

array1 = [
    -92,   58, -285,  143, -276, -217,   16,   12,  614,  664,  599,
     34,  471, -184, -279,  325,  508,  323,  539, -236,  -65,  490,
      9,  689, -160,  636, -282, -168,   88, -181,  666, -145,  617,
   -181,  320, -169, -237, -207, -184,  459,  516,  -56,  229,  161,
    695, -207,  639,  477, -163, -169,  357,  643,  378,  288,  463,
    239,  540,  412, -287,  630,  105,  627, -102,   92,  682, -235,
    632,  102,  121,  149,   23,  418, -210,  433,  605,  509, -126,
   -289,  632, -231,  222,   77,  -83,    4,  497,   89,  -68,  414,
    280,  -43,  680,  300,  482,  256, -241, -292,  646, -214,  542,
    224
 ]

 array2 = [
    -292, -289, -287, -285, -282, -279, -276, -241, -237, -236, -235,
    -231, -217, -214, -210, -207, -207, -184, -184, -181, -181, -169,
    -169, -168, -163, -160, -145, -126, -102,  -92,  -83,  -68,  -65,
     -56,  -43,    4,    9,   12,   16,   23,   34,   58,   77,   88,
      89,   92,  102,  105,  121,  143,  149,  161,  222,  224,  229,
     239,  256,  280,  288,  300,  320,  323,  325,  357,  378,  412,
     414,  418,  433,  459,  463,  471,  477,  482,  490,  497,  508,
     509,  516,  539,  540,  542,  599,  605,  614,  617,  627,  630,
     632,  632,  636,  639,  643,  646,  664,  666,  680,  682,  689,
     695
  ]

  // console.log(binarySearch(array2, -92))
  // console.log(binarySearch(arr.sort((a,b) => (a-b)), 74))

//   Для создания массива из букв вы можете использовать аналогичный подход. 
// Код создает массив из случайных букв:

// create array of letters
const letters = Array(10).fill(null).map(() => String.fromCharCode(Math.floor(Math.random() * 26) + 97));

console.log(letters.sort());
console.log(binarySearch(letters.sort(), 'j'))

// Этот код создает массив из 100 элементов, каждый из которых представляет собой случайную букву английского алфавита. 
//Функция `String.fromCharCode` используется для преобразования числа в соответствующий символ в ASCII-таблице. В данном случае, мы добавляем 97, чтобы генерировать случайные строчные буквы.
// ASCII-коды строчных букв латинского алфавита начинаются с 97. Таким образом, для генерации случайных строчных букв, мы добавляем случайное число от 0 до 25 (поскольку английский алфавит состоит из 26 букв) к ASCII-коду строчной буквы 'a' (который равен 97).

// - `String.fromCharCode(97)` возвращает `'a'`
// - `String.fromCharCode(98)` возвращает `'b'`
// - `String.fromCharCode(99)` возвращает `'c'`

// случайное число от 0 до 25 добавляется к 97, чтобы получить случайную строчную букву.

// вы можете использовать API для получения случайных имен. Например, одним из таких API является "randomuser.me". Вот пример использования этого API для получения случайных имен:

async function getRandomNames(count) {
  const response = await fetch(`https://randomuser.me/api/?results=${count}&inc=name`);
  const data = await response.json();
 // return data.results.map(person => `${person.name.first} ${person.name.last}`);
 return data.results.map(person => `${person.name.first}`);
}

async function generateRandomNames() {
  const randomPeopleNames = await getRandomNames(10);
  console.log(randomPeopleNames);
}

//generateRandomNames();

// В этом примере используется API "randomuser.me", и из ответа извлекаются имена. 

// нужно взять только первое имя из каждого объекта в массиве, а затем отсортировать их:


async function getRandomFirstNames(count) {
  const response = await fetch(`https://randomuser.me/api/?results=${count}&inc=name`);
  const data = await response.json();
  return data.results.map(person => person.name.first);
}

async function generateRandomFirstNamesAndSort() {
  const randomFirstNames = await getRandomFirstNames(10);

  // Сортировка по first name
  const sortedFirstNames = randomFirstNames.sort((a, b) => {
    const firstNameA = a.toLowerCase();
    const firstNameB = b.toLowerCase();

    if (firstNameA < firstNameB) return -1;
    if (firstNameA > firstNameB) return 1;
    return 0;
  });

//   console.log(sortedFirstNames);
//   console.log(`inside  ${binarySearch(arrName, 'Mustafa')}`)
}

const arrName = generateRandomFirstNamesAndSort();
//console.log(binarySearch(arrName, 'Ann'))


/*
Чтобы выстроить слова в алфавитном порядке с использованием бинарного поиска, вам необходимо создать функцию сравнения, которая будет определять, какое слово должно идти раньше в алфавитном порядке. В данном случае, вы можете использовать простое сравнение строк.

Код бинарного поиска в отсортированном массиве слов:
*/

// Отсортированный массив слов
const sortedWords = ["Маша", "Мила", "Михаил", "Вадим", "Виктор"];

// Функция бинарного поиска
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Сравнение строк
    if (array[mid] === target) {
      return mid; // Найдено совпадение
    } else if (array[mid] < target) {
      left = mid + 1; // Искать в правой части
    } else {
      right = mid - 1; // Искать в левой части
    }
  }

  return -1; // Элемент не найден
}

// Пример использования
const targetWord = "Анна";
const index = binarySearch(sortedWords, targetWord);

if (index !== -1) {
  console.log(`Слово "${targetWord}" найдено на позиции ${index}.`);
} else {
  console.log(`Слово "${targetWord}" не найдено.`);
}

/*
В данном коде сравнение строк происходит с использованием операторов `<`, `>`, что автоматически учитывает порядок символов в строках и выстраивает их в алфавитном порядке.
*/
