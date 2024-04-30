// Алгоритм к ближайших соседей
let task = 0
console.log(`*******Task = ${++task}; 
Task.name = classify - Tanjerine or Orange 
***********************************************************************************`)
// Апельсины и Грейпфруты
// Обычно грейпфруты крупные, и кожура имеет красноватый оттенок.
// Обычно мандарины малых размеров, и кожура в оранжевых оттенках.
// Как правило, крупные и красные фрукты оказываются грейпфрутами.
// Найти классификацию нового фрукта.
// Возьмем три ближайщих соседа.
// Если среди соседей больше мандаринов - это мандарин,
// Если среди соседей больше грейпфрутов - это грейпфрут.
// orange, small, red, large, tangerine, grapefruit

function classify(color, size) {
  if (color === 'orange' && size === 'small') {
    return 'a Tanjerine.'
  } else if (color === 'red' && size === 'large') {
    return 'a Grapefruit.'
  } else {
    return 'Unable to determine.'
  }
}

const fruit1 = classify('orange', 'small');
const fruit2 = classify('red', 'large');
const fruit3 = classify('green', 'large');

console.log("If fruit is orange and small , it is " + fruit1);  // Tanjerine

console.log("If fruit is red and large , it is " + fruit2);  // Grapefruit

console.log("If fruit is green and large , it is " + fruit3);

// ******************************************************
console.log(`*******Task = ${++task}; 
Task.name = Classify fruit with rgb and size - Mandarin or Grapefruit 
***********************************************************************************`)
// Мандарины и Грейпфруты
//********************************

// имеются мандарины и грейпфруты  с параметрами цвета в rgb
// от оранжевого к красному и размера в граммах от маленького к крупному.
// мандарин - оранжевый и маленький, грейпфрут - большой и красный.
//напиши код JS и создай библиотеки для определения принадлежности 
// к мандарину или грейпфруту нового объекта. 
//решение должно быть с помощью формулы расстояния между двумя точками - формулы Пифагора

// Учтем оттенки красного и оранжевого в R,G,B
const shadeOfRedAndOrange = [
  'rgb(255, 0, 0)',   // Красный
  'rgb(255, 69, 0)',  // Оранжево-красный
  'rgb(255, 99, 71)', // Темно-оранжевый
  'rgb(255, 140, 0)', // Темный оранжевый
  'rgb(255, 165, 0)', // Оранжевый
  'rgb(255, 192, 203)' // Розовато-красный
]
// Евклидово пространство - расстояние 
function euclideanDistance(color1, size1, color2, size2) {
  const deltaColor = Math.sqrt(
    Math.pow(color2[0] - color1[0], 2) +
    Math.pow(color2[1] - color1[1], 2) +
    Math.pow(color2[2] - color1[2], 2)
  );
  const deltaSize = size2 - size1;

  return Math.sqrt(Math.pow(deltaColor, 2) + Math.pow(deltaSize, 2));
}

function classifyFruit(color, size) {
  const orangeColor = [255, 165, 0];
  const redColor = [255, 0, 0];
  const smallSize = 100; // Пример значения размера для мандарина
  const largeSize = 300; // Пример значения размера для грейпфрута

  const distanceToOrange = euclideanDistance(color, size, orangeColor, smallSize);
  const distanceToRed = euclideanDistance(color, size, redColor, largeSize);

  if (distanceToOrange < distanceToRed) {
    return ' Mandarin.';
  } else {
    return ' Grapefruit.';
  }
}

// Пример использования
const fruitColor = [255, 192, 203]; // Оранжевый оттенок
//const fruitSize = 291; // Средний размер
const fruitSize = 91; // small размер

const fruitType = classifyFruit(fruitColor, fruitSize);
console.log(`This fruit belongs to: ${fruitType}`);

// классификация проведена!

console.log(`*******Task = ${++task}; 
Task.name = Netflix recomendation with regresion  
***********************************************************************************`)
//***********************************************************
// Рекомендации Netflix
//***********************************************************
// Регрессия
// напиши JS код регрессии для задачи:
// Хотим спрогнозировать какую оценку Приянка поставит фильму на Netflix. 
//возьмите 5 ближайших соседей: 
//Джастин поставил оценку фильму 5, 
//Джей-си - 4, 
//Джозеф - 4, 
//Ланс - 5, 
// Крис - 3. 
// Если вычислить средне арифметическое их оценок, получим 4.2.

// Оценки ближайших соседей
const neighborsRatings = [5, 4, 3, 5, 1];

// Функция для вычисления среднего арифметического
function calculateAverage(arr) {
  const sum = arr.reduce((total, current) => total + current, 0);
  return sum / arr.length;
}

// Предсказание оценки для Приянки
const predictedRating = calculateAverage(neighborsRatings);

console.log(`Predicted score for Priyanka: ${predictedRating.toFixed(1)}`);
// ****************************************
// классификация = распределение по категориям
// регрессия = прогнозирование ответа в числовом выражении
// ************************************************************
// Давайте включим имена соседей в решение:


const neighborsObj = [
  { name: 'Джастин', rating: 5 },
  { name: 'Джей-си', rating: 4 },
  { name: 'Джозеф', rating: 3 },
  { name: 'Ланс', rating: 5 },
  { name: 'Крис', rating: 1 }
];

function calculateAverageRatingObj(neighborsObj) {
  const totalRatingsObj = neighborsObj.reduce((sum, neighbor) => sum + neighbor.rating, 0);
  return totalRatingsObj / neighborsObj.length;
}

const predictedRatingObj = calculateAverageRatingObj(neighborsObj);
console.log(`Predicted score for Priyanka: ${predictedRatingObj.toFixed(2)}`);


//В этом примере вместо массива с оценками у нас есть 
//массив объектов `neighbors`, где каждый объект содержит имя соседа и его оценку. 
// Функция `calculateAverageRating` вычисляет среднюю оценку.

// ************************************************************************************************
console.log(`*******Task = ${++task}; 
Task.name = Bakery  
***********************************************************************************`)
// еще код регрессии для пекарни:
//пекарня каждый день выпекает свежий хлеб . Предсказать , 
//сколько буханок следует испечь на сегодня. 
//признаки:
//погода - по шкале от 1 до 5 (1, 2, 3.
// 1) погода - по шкале от 1 до 5 (1, 2, 3, 4, 5) : 1 = плохая, 5 = отличная;
// 2) праздник или выходной = 1, в противном случае = 0;
// 3) проходят ли сегодня спортивные игры? да = 1, нет = 0.
// Раньше буханки продавались:
// A: (5, 1, 0) = 300;
// B: (3, 1, 1) = 225;
// C:  (1, 1, 0) = 75;
// D: (4, 0, 1) = 200;
// E: (4, 0, 0) = 150;
// F: (2, 0, 0) = 50.
// Сегодня выходной и хорошая погода, но нет спортивных игр. 
// Сколько буханок продаст пекарня? 
// Используй алгоритм к-ближайщих соседей для к=4.

//Для решения данной задачи с применением алгоритма k-ближайших соседей 
//потребуется рассчитать расстояния между сегодняшними условиями 
// и условиями предыдущих дней, а затем выбрать четыре ближайших случая. 

// Заданные данные
const bakeryData = [
  { weather: 5, holiday: 1, sports: 0, breadsSold: 300 },
  { weather: 3, holiday: 1, sports: 1, breadsSold: 225 },
  { weather: 1, holiday: 1, sports: 0, breadsSold: 75 },
  { weather: 4, holiday: 0, sports: 1, breadsSold: 200 },
  { weather: 4, holiday: 0, sports: 0, breadsSold: 150 },
  { weather: 2, holiday: 0, sports: 0, breadsSold: 50 }
];

const todayConditions = { weather: 4, holiday: 1, sports: 0 };
const k = 4; // к-ближайщих соседей для к=4

// Функция для расчета расстояния между двумя наборами условий
function calculateDistance(cond1, cond2) {
  return Math.sqrt(
    Math.pow(cond1.weather - cond2.weather, 2) +
    Math.pow(cond1.holiday - cond2.holiday, 2) +
    Math.pow(cond1.sports - cond2.sports, 2)
  );
}

// Находим расстояния до всех предыдущих случаев
const distances = bakeryData.map(entry => ({
  distance: calculateDistance(todayConditions, entry),
  breadsSold: entry.breadsSold
}));

// Сортируем предыдущие случаи по расстоянию
distances.sort((a, b) => a.distance - b.distance);

// Выбираем k ближайших случаев
const kNearest = distances.slice(0, k);

// Вычисляем среднее количество проданных буханок у k ближайших случаев
const predictedBreadsSold = kNearest.reduce((sum, entry) => sum + entry.breadsSold, 0) / k;

console.log(`The bakery will sell approximately ${predictedBreadsSold.toFixed(2)} loaves.`);


//Этот код сначала определяет функцию `calculateDistance`, 
//которая рассчитывает евклидово расстояние между двумя наборами условий. 
//Затем он находит расстояния до всех предыдущих случаев, сортирует их
// и выбирает k ближайших. 
//Наконец, он вычисляет среднее количество проданных буханок у k ближайших случаев.

// *************************************************************************
console.log(`*******Task = ${++task}; 
Task.name = train and test - SPAM or not 
***********************************************************************************`)
// Пример наивного байесовского классификатора для фильтрации спама 
//на JavaScript может быть реализован с использованием простых статистических методов. 

// Обучающий набор данных
const trainingData = [
  { text: "Buy gold coins", isSpam: true },
  { text: "Hello, how are you ?", isSpam: false },
  { text: "Win a free iPhone", isSpam: true },
  { text: "Earn money fast", isSpam: true },
  { text: "Meet me at the park", isSpam: false },
  { text: "Can you attend the meeting?", isSpam: false },
  { text: "Win a car", isSpam: false }
];
/*
// Функция для подсчета вероятности слова в спаме и не спаме
function calculateWordProbabilities(data) {
  const wordCounts = { spam: {}, notSpam: {} };
  let totalSpam = 0, totalNotSpam = 0;

  for (const item of data) {
    const target = item.isSpam ? 'spam' : 'notSpam';
    const words = item.text.split(/\s+/);

    for (const word of words) {
      if (!wordCounts[target][word]) {
        wordCounts[target][word] = 0;
      }
      wordCounts[target][word]++;
      if (item.isSpam) {
        totalSpam++;
      } else {
        totalNotSpam++;
      }
    }
  }

  const probabilities = { spam: {}, notSpam: {} };

  for (const word in wordCounts.spam) {
    probabilities.spam[word] = wordCounts.spam[word] / (totalSpam + Object.keys(wordCounts.spam).length);;
  }

  for (const word in wordCounts.notSpam) {
    probabilities.notSpam[word] = wordCounts.notSpam[word] / (totalNotSpam + Object.keys(wordCounts.notSpam).length);
  }

  return probabilities;
}
*/

// Функция для расчета вероятности спама
function calculateSpamProbability(text, wordProbabilities) {
  const words = text.split(/\s+/);
  let spamProbability = 1, notSpamProbability = 1;

  for (const word of words) {
    if (wordProbabilities.spam[word]) {
      spamProbability *= wordProbabilities.spam[word] * 100;
      //spamProbability += Math.log(wordProbabilities.spam[word]);

    } else {
      notSpamProbability *= wordProbabilities.notSpam[word] * 100;

      //  notSpamProbability += Math.log(wordProbabilities.notSpam[word]);

    }
  }

  const totalProbability = spamProbability + notSpamProbability;
  return spamProbability / totalProbability;
}


function calculateWordProbabilities(data) {
  const wordCounts = { spam: {}, notSpam: {} };
  let totalSpam = 0, totalNotSpam = 0;

  for (const item of data) {
    const target = item.isSpam ? 'spam' : 'notSpam';
    const words = item.text.split(/\s+/);

    for (const word of words) {
      if (!wordCounts[target][word]) {
        wordCounts[target][word] = 0;
      }
      wordCounts[target][word]++;
      if (item.isSpam) {
        totalSpam++;
      } else {
        totalNotSpam++;
      }
    }
  }

  const probabilities = { spam: {}, notSpam: {} };

  for (const word in wordCounts.spam) {
    probabilities.spam[word] = wordCounts.spam[word] / totalSpam;
  }

  for (const word in wordCounts.notSpam) {
    probabilities.notSpam[word] = wordCounts.notSpam[word] / totalNotSpam;
  }

  return probabilities;
}

// Обучение модели
const wordProbabilities = calculateWordProbabilities(trainingData);

// Тестирование на новых данных
const testText =  "Win a box" //"Win a free iPhone";
const spamProbability = calculateSpamProbability(testText, wordProbabilities);

console.log(`Chances are it's a spam: ${spamProbability}`);


//В этом примере, мы используем простую статистическую модель,
//основанную на вероятностях слов в спаме и не спаме.
//Функция `calculateWordProbabilities` собирает статистику по словам в обучающем наборе данных,
//а затем использует эту статистику для предсказания вероятности спама в функции `calculateSpamProbability`.
// `spamProbability *= wordProbabilities.spam[word];` - это сокращенная
//запись операции умножения переменной `spamProbability` на значение `wordProbabilities.spam[word]`.
//Другими словами, это эквивалентно записи `spamProbability = spamProbability * wordProbabilities.spam[word];`.

//В контексте алгоритма наивного Байесовского классификатора это означает,
//что мы умножаем текущую вероятность, что текст является спамом, на вероятность текущего слова появиться в спаме.
//Каждое новое слово в тексте обновляет текущую вероятность.

//Это делается потому, что по теореме Байеса, вероятность того, что текст является спамом
//при наличии нескольких признаков (слов), равна произведению
// вероятностей каждого признака при условии, что текст является спамом.

//Иными словами, мы уточняем нашу оценку с каждым новым словом.
