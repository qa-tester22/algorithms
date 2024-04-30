//palindrome

// function isRussianPalindrome(str) {
//     const cleanStr = str.toLowerCase().replace(/[^а-я]/g, '');
//     return cleanStr === cleanStr.split('').reverse().join('');
// }

// const inputString = "А роза упала на лапу Азора.";
// const result = isRussianPalindrome(inputString);

// console.log(`Является ли строка палиндромом: ${result}`);

// Вариант 2
// function isPalindrome(str) {
//     const cleanStr = str.toLowerCase().replace(/[^a-zA-Zа-яА-Я]/g, '');
//     return cleanStr === cleanStr.split('').reverse().join('');
// }

// const inputString = "А роза упала на лапу Азора.";
// const result = isPalindrome(inputString);

// console.log(`Является ли строка палиндромом: ${result}`);

// Вариант 3
// function isRussianPalindrome(str) {
//     const cleanStr = str.toLowerCase().replace(/[^а-я]/g, '');
//     return cleanStr === cleanStr.split('').reverse().join('');
// }

// const inputString = "А роза упала на лапу Азора.";
// const result = isRussianPalindrome(inputString);

// console.log(`Является ли строка палиндромом: ${result}`);
//В этом коде используется регулярное выражение /[^а-я]/g, которое удаляет все символы, не являющиеся русскими буквами.

//Вариант 4
// function isRussianPalindrome(str) {
//     const cleanStr = str.toLowerCase().replace(/[^а-я]/g, '');
//     return cleanStr === cleanStr.split('').reverse().join('');
// }

// const inputString = "А роза упала на лапу Азора.";
// const result = isRussianPalindrome(inputString);

// console.log(`Является ли строка палиндромом: ${result}`);

// //Вариант 5
// function isPalindrome(str) {
//     const cleanStr = str.toLowerCase().replace(/[^a-zа-яё]/g, '');
//     return cleanStr === cleanStr.split('').reverse().join('');
// }

// const inputString = "арозаупаланалапуазора";
// const result = isPalindrome(inputString);

// console.log(`Является ли строка палиндромом: ${result}`);

// Вариант 6
// function removePunctuation(str) {
//     return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
// }

// function isPalindrome(str) {
//     const cleanStr = removePunctuation(str.toLowerCase().replace(/\s/g, ''));
//     return cleanStr === cleanStr.split('').reverse().join('');
// }

// const inputString = "А роза упала на лапу Азора.";
// const result = isPalindrome(inputString);

// console.log(`Является ли строка палиндромом: ${result}`);
// Теперь функция removePunctuation используется для удаления пунктуационных символов. 
//Функция isPalindrome применяет эту функцию перед проверкой строки на палиндром. 

//Вариант 7
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}

const inputString = "А роза упала на лапу Азора.";
const result = isPalindrome(inputString);

console.log(`Является ли строка палиндромом: ${result}`);


// В контексте данного кода `u` в регулярном выражении `/[^\p{L}\p{N}]/gu` означает использование "юникодных" (Unicode) свойств при работе с регулярными выражениями.

// В этом случае:
// - `\p{L}` соответствует любой букве.
// - `\p{N}` соответствует любой цифре.
// - `gu` - флаги глобального (global) и юникодного (unicode) сопоставления.

// Таким образом, регулярное выражение `/[^\p{L}\p{N}]/gu` ищет все символы, которые не являются буквой или цифрой в заданной строке и удаляет их.

//Этот код использует регулярное выражение /[^\p{L}\p{N}]/gu для удаления всех символов, кроме букв и цифр. 
//Он учитывает как русские, так и латинские символы, а также цифры.
//В регулярных выражениях `\p{L}` представляет буквы из любого алфавита, а `\p{N}` представляет числовые символы. 
//В данном контексте, `\p{L}` означает буквы, а `\p{N}` означает цифры.
//Для обнаружения пунктуационных символов в регулярных выражениях, вы можете использовать следующее выражение:
/*
\p{P}
*/

//Это будет соответствовать любому пунктуационному символу в тексте. 
//Например, в JavaScript это можно использовать следующим образом:
/*
const punctuationRegex = /\p{P}/gu;
*/

//Этот код создает регулярное выражение, которое найдет все пунктуационные символы в строке.
//Пожалуйста, учтите, что поддержка `\p{P}` в регулярных выражениях может варьироваться в зависимости от версии JavaScript и используемого движка. 
//Если этот синтаксис не поддерживается, вам придется использовать более длинное регулярное выражение, которое включает список всех пунктуационных символов.

/*
`\p` в регулярных выражениях представляет собой платформо-независимый способ сопоставления символов в разных алфавитах. 
Например, `\p{L}` будет соответствовать буквам из любого алфавита, а `\p{N}` будет соответствовать числовым символам.
 синтаксис `\p{...}` в регулярных выражениях, в отличие от некоторых других языков программирования. 
В JavaScript, для сопоставления букв или цифр, принадлежащих разным алфавитам, потребуется более сложное регулярное выражение, 
а не просто `\p{L}` или `\p{N}`.
*/