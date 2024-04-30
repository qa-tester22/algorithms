// регистрируем пришедших на голосование - заносим в хеш-таблицу=объект
// если повторный заход - не позволяется голосовать.

// 1-й вариант

let votedArray = [];

function checkVoterArray(name){
    let alreadyVoted = false;

    for(let i = 0; i < votedArray.length; i++) {
      if (votedArray[i] === name) {
        alreadyVoted = true;
        break;
      } 
    }
      if (alreadyVoted === true) {
        console.log(name + " - kick them out!")
      } else {
        votedArray.push(name)
        console.log(name + " - let them vote!")
      }
    
    //console.log(votedArray)
}


// function checkVoterFalse(name){
// console.log(votedArray)
//     for(let j=0; j < votedArray.length; j++) {
//         if (votedArray[j] === name) {
//             console.log(name + " - kick them out!")
//         } else {
//         votedArray.push(name)
//         console.log(name + " - let them vote!")
//         }
//     }
// }

// checkVoterFalse('tom');
// checkVoterFalse("mike");
// checkVoterFalse("mike");


// checkVoterFalse('tom');
// checkVoterFalse("mike");
// checkVoterFalse("mike");



// checkVoterArray('tom');
// checkVoterArray("mike");
// checkVoterArray("mike");



// checkVoterArray('tom');
// checkVoterArray("mike");
// checkVoterArray("mike");
// checkVoterArray(8);
// checkVoterArray("%");
// checkVoterArray(checkVoterArray("anna"))
// checkVoterArray(checkVoterArray)
// checkVoterArray(checkVoterArray())
// console.log("votedArray = ",  votedArray)



/*
// 2-й вариант 
let votedArray = [];

function checkVoterArray(name) {
    if (votedArray.includes(name)) {
        console.log(name + " - kick them out!");
    } else {
        votedArray.push(name);
        console.log(name + " - let them vote!");
    }

    console.log("votedArray == ", votedArray);
}

checkVoterArray('tom');
checkVoterArray("mike");
checkVoterArray("mike");
*/