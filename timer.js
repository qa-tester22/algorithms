//работа с таймерами в JavaScript. 
//setInterval -запускает заданный код через определенные промежутки времени.

let timerFunction = 0
/*
console.log(`*********Function of timer = ${++timerFunction}*********************************************`)

function timer() {
    console.log("START!");
}

// setInterval(() => {
    
// }, interval);

setInterval(timer, 1000);

setInterval(function() {
    console.log("START?");
}, 1000);

console.log(`*********Function of timer = ${++timerFunction}*********************************************`)
//Счетчик через функцию setInterval 

let regular = 0;
setInterval(function() {
    regular++;
   // console.log("regular = " + regular);
   console.log(regular);
}, 1000);

let regularShort = 0;
setInterval(function() {
    //console.log("regularShort = ", ++regularShort*3);
    console.log(regularShort);
}, 1000);

let regularArrow = 0;
//setInterval(() => console.log("regularArrow = ", ++regularArrow*5), 1000);
setInterval(() => console.log(++regularArrow*5), 1000);

console.log(`*********Function of timer = ${++timerFunction}*********************************************`)
// Остановка таймера
// каждый таймер, запущенный с помощью функции setInterval, имеет уникальный номер. 
// Этот номер возвращает функция setInterval в момент запуска таймера:

let timerId_1 = setInterval(function() {
    console.log("StopTimer!");
}, 500)

console.log(timerId_1);

// для остановки таймера используется функция clearInterval - принимает номер таймера, который нужно остановить.

// let timerClear = 0;
// let timerId_2 = setInterval(function() {
//     console.log(`Timer ID 2: ${timerId_2[Symbol.asyncId]}`);
//     console.log(++timerClear + "- останови на 10.");

//     if (timerClear >= 10) {
//         clearInterval(timerId_2)
//     }
// }, 500)

let timerClear = 0;
let timerId_2 = setInterval(function() {
    console.log(`Timer ID 2: ${timerId_2}`);
    console.log(++timerClear + "- останови на 10.");

    if (timerClear >= 10) {
        clearInterval(timerId_2);
    }
}, 500);

//Кнопка для запуска таймера <button id="start">start</button>
let start = document.querySelector('#start');

start.addEventListener('click', function() {
    let i = 0;

    setInterval(function(){
        console.log("Click on the button =  ", ++i);
    }, 40);
    
})

// Многократное нажатие на кнопку для запуска таймера - 
// каждый клик будет приводить к запуску нового таймера.
// можно после старта таймера отвязывать от кнопки привязанный обработчик клика:

let begin = document.querySelector('#begin');
begin.addEventListener('click', function func()
   {
    let j = 0;

    setInterval(function() {
        console.log(++j + '= j , но не останавливается. ');
    }, 100);

    this.removeEventListener('click', func); // отвязываем обработчик
   });

console.log(`*********Function of timer = ${++timerFunction}*********************************************`)

// Кнопки для запуска и остановки таймера 

// В index.html  вносим id для кнопок старт и стоп:
// <button id="startStop">!Start!</button>
// <button id="stopStart">!!Stop!!</button>

let startStop = document.querySelector('#startStop');
let stopStart = document.querySelector('#stopStart');

// запускаем таймер нажатием кнопки
let timerrId; // глобальная переменная - видна для стоп и старт
startStop.addEventListener('click', function(){
    timerrId = setInterval(function(){
        console.log('two buttons')
    }, 200);
})

// Останавливаем таймер нажатием на вторую кнопку:

stopStart.addEventListener('click', function(){
    clearInterval(timerrId);
});

stopStart.addEventListener('click', function() {
    clearInterval(timerrId)
    console.log("Stop was clicked")
});



*/

/*

console.log(`*********Function of timer = ${++timerFunction}*********************************************`)
// Практика на таймеры и работу с DOM
// Пусть дан инпут
// <input id="elem" value="1">
// Создать таймер который каждую секунду увеличивает значение атрибута value нашего инпута на 1:

let elem = document.querySelector('#elem');

setInterval(function() {
    elem.value = Number(elem.value) + 1;
}, 1000)



console.log(`*********Function of timer = ${++timerFunction}*********************************************`)

// Таймеры и потеря контекста 

// <input id="element" value="text">

// Пусть по клику на этот инпут сработает анонимная функция и внутри этой функции запустится таймер, каждую секунду выводящий что-нибудь в консоль:

let element = document.querySelector('#element');

// element.addEventListener('click', function(){
//     setInterval(function(){
//         console.log("internal function after click ", this.value)
//     }, 100)
// })
// дает undefind вместо значения text/ потому что задействованы разные функции - мы ждем значение из первой функции, а запрашиваем ее вывод во внутренней функции.

// Все дело в том, что у нас получается функция в функции: есть внешняя анонимная функция, которая вызывается по клику и внутренняя анонимная функция, которую запускает таймер. Во внешней функции this указывает на инпут, но во внутренней - нет. Имеет место потеря контекста.

// Почему выводится undefined, а не вываливается ошибка в консоль, как это было в предыдущих уроках? Потому что this внутри функции, вызываемой через setInterval, указывает на window.

// Это значит, что мы пытаемся прочитать свойство value у объекта window, вот так: window.value, а такого свойства в нем нет, и мы получаем undefined (не ошибку).

// Поправим проблему введением self:

element.addEventListener('click', function(){
    let self = this;

    setInterval(function(){
        console.log(self.value + " - значение из первой функции")
    }, 200)
});

console.log(`*********Function of timer = ${++timerFunction}*********************************************`)
// Задержка перед выполнением с функцией setTimeout
// Первым параметром setTimeout принимает исходный код функции, а вторым - задержку в миллисекундах перед запуском этой функции.
// есть кнопка <input type="submit" id="newElem">

let newElem = document.querySelector('#newElem');

// Давайте теперь сделаем так, чтобы по нажатию на кнопку на экран вывелся alert, но не сразу, а через 3 секунды после нажатия:

newElem.addEventListener('click', function(){
    setTimeout(function(){
        alert('setTimeout here!');
    }, 3000);
});

*/
console.log(`*********Function of timer = ${++timerFunction}*********************************************`)

// Запуск таймера c setTimeout

let sec = 0;

function timing(){
    setTimeout(function(){
        console.log(++sec);

        timing(); // вызывает себя
    }, 1000)
}

timing();

// Остановить такой таймер можно просто не дав случится рекурсии:

let second = 0

function timingStop(){
    setTimeout(function(){
        console.log(++second);

        if (second < 10 ) {
            // запускаем счетчик, если счет меньше 10
            timingStop();
        }
    }, 1000);
}

timingStop();

console.log(`*********Function of timer = ${++timerFunction}*********************************************`)

console.log(`*********Function of timer = ${++timerFunction}*********************************************`)

console.log(`*********Function of timer = ${++timerFunction}*********************************************`)
