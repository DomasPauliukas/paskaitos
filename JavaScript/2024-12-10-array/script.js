// 1. Masyvo papildymas
// LENGVAs
 
// Sukurkite array [2, 3, 4] ir į jo pradžią pridėkite 1.

// Pvz.:
// [2, 3, 4] -> [1, 2, 3, 4]


// let numbersArr = [2, 3, 4]

// numbersArr.unshift(1)

// console.log(numbersArr)




// 2. Parašykite kodą, kuris suskaičiuoja ir išveda į console, kiek yra skirtingų elementų masyve.

// [1, 2, 2, 3, 3, 3, 4] -> 4 (skirtingi elementai: 1, 2, 3, 4)


// let numbersArr = [1, 2, 2, 3, 3, 3, 4]

// let uniqueNumbersArr = []

// for (i = 0; i < numbersArr.length; i++) {
//   if (!uniqueNumbersArr.includes(numbersArr[i]))
//     uniqueNumbersArr.push(numbersArr[i])
// }

// console.log(uniqueNumbersArr)






// 3. Išveskite į console masyvą tik iš teigiamų skaičių iš pradinio masyvo.

// [-3, 1, -2, 4, -5, 6] -> [1, 4, 6]


// let numbersArr = [-3, 1, -2, 4, -5, 6]
// let positiveNumbersArr = []

// for (let i = 0 ; i < numbersArr.length ; i++){
//     if (numbersArr[i] > 0){
//         positiveNumbersArr.push(numbersArr[i])
//     }
// }
// console.log(positiveNumbersArr)




// 4. Raskite ar nurodytas elementas pasikartoja masyve. Kodas išveda true, jei elementas pasikartoja, ir false priešingu atveju.

// // Pvz. 1
// const arr = [1, 2, 3, 4, 3, 5];
// const element = 3;
// // true

// // Pvz. 2
// const arr = [1, 2, 3, 4, 5];
// const element = 3;
// / false



// let numbersArr = [1, 2, 3, 4, 3, 5]
// let element = 3

// let doesRepeat = numbersArr.indexOf(element) !== numbersArr.lastIndexOf(element)

// console.log(doesRepeat)





// 5. Pakeiskite kiekvieną masyvo skaičių: jei skaičius yra lyginis, jį padalinkite iš dviejų; jei nelyginis, padauginkite iš trijų. Išveskite transformuotą masyvą į console.

// [1, 2, 3, 4, 5] -> [3, 1, 9, 2, 15]

let numbersArr = [1, 2, 3, 4, 5]
let newArr = []

for (let i = 0; i < numbersArr.length; i++) {
  if (numbersArr[i] % 2 === 0) {
    newArr.push(numbersArr[i] / 2)
  }
   else {
  newArr.push(numbersArr[i] * 3)
  }
}

console.log(newArr)