// Vardo funkcija

// Ne visos funkcijos turi return statement (nors dažniausiai taip yra). Sukurkite funkciją, į kurią paduosite vardą ir parodysite panaudodami alert.

function vardas(name) {
    alert(name)
}
vardas('Domas')


// Random

// Taip pat ne visos funkcijos turi parametrus – sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.

function random(max) {
    console.log(Math.floor(Math.random() * max))
  }
  random(6)


// Raidžių skaičius

// Sukurkite funkciją, kuri paims du parametrus – vardą ir pavardę, tada grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).


function nameLenght(vardas, pavarde) {
    console.log(vardas.length + pavarde.length)
  }
  nameLenght('Domas', 'Pauliukas')



// Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abėcėlės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). 

// Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę. Jei primiršot array – pasižiūrėkite čia.

function alphabet (index){
let abecele = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
return abecele[index]
}
alphabet(1)


// Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti sum, sub, div, multi (matematinės reikšmės – sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9 ir t.t.).

// Hint: Reikės funkcijoje naudoti if...else arba switch.

function matematika (n1, n2, operator){
    if (operator === 'sum'){
        return n1 + n2
    }
    if (operator === 'sub'){
        return n1 - n2
    }
    if (operator === 'div'){
        return n1 / n2
    }
    if (operator === 'multi'){
        return n1 * n2
    }
}
console.log(matematika(5,2,'sum'))



// Kvadratas

// Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita – gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).

function randomNumber() {
    return Math.floor(Math.random() * 11)
  }

function randomSquare (num){
    return Math.pow(num, 2)
}
console.log(randomSquare(randomNumber()))


// ***************** ANONIMINES IR ARROW FUNKCIJOS // ************

// Vardo funkcija

// Ne visos funkcijos turi return statement (nors dažniausiai taip yra). Sukurkite funkciją, į kurią paduosite vardą ir parodysite panaudodami alert.

let vardaS = function(name) {
    alert(name)
  }
  vardaS('Domas')

  let vardaS = name => alert(name)

  vardaS('Domas')


// Random

// Taip pat ne visos funkcijos turi parametrus – sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.

let randoM = num => Math.floor(Math.random() * num)

randoM(6)


// Raidžių skaičius

// Sukurkite funkciją, kuri paims du parametrus – vardą ir pavardę, tada grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).

let vardoIlgis = (vardas, pavarde) => vardas.length + pavarde.length

vardoIlgis('Domas', 'Pauliukas')


// Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abėcėlės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). 

// Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę. Jei primiršot array – pasižiūrėkite čia.


let abecele = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let alphabet = index => abecele[index]

console.log(alphabet(8))



// Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti sum, sub, div, multi (matematinės reikšmės – sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9 ir t.t.).

// Hint: Reikės funkcijoje naudoti if...else arba switch.


let matematika = (n1, n2, operator) => {
    if (operator === 'sum') {
      return n1 + n2
    }
    if (operator === 'sub') {
      return n1 - n2
    }
    if (operator === 'div') {
      return n1 / n2
    }
    if (operator === 'multi') {
      return n1 * n2
    }
  }
  console.log(matematika(5, 2, 'sum'))


  // Kvadratas

// Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita – gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).

let randomNumber = () => Math.floor(Math.random() * 11)

let randomSquare = num => Math.pow(num, 2)

console.log(randomSquare(randomNumber()))




// m/s į km/s 

// Parašykite funkciją convertMStoKMH, kuri konvertuoja greitį iš metrų per sekundę į kilometrus per valandą.

let convertMStoKMH = meters => meters * 3.6
console.log(convertMStoKMH())


// Parašykite funkciją compareNumber, kuri palygina du skaičius ir grąžina didesnįjį iš jų. Jei skaičiai yra lygūs, funkcija turėtų grąžinti "lygūs". Įsitikinkite, kad abu argumentai yra skaičiai; jei ne, grąžinkite klaidos pranešimą.

// Rezultatas

// console.log(compareNumber(4, 7)); // 7
// console.log(compareNumber(5, 5)); // "equal"
// console.log(compareNumber("5", 5)); // "Error: most arguments must be numbers"

function compareNumber(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
      return 'error: it has to be numbers'
    }
    if (x > y) {
      return x
    }
    if (x < y) {
      return y
    }
    return 'skaiciai lygus'
  }
  console.log(compareNumber(5, 5))

//   const compareNumber = (a, b) => {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return "Error: most arguments must be numbers";
//     }
//     if (a === b) {
//         return "equal";
//     }
//     return a > b ? a : b;
// };


// Parašykite funkciją isLeapYear, kuri priima year ir pasako ar metai yra keliamieji. Funkcija turi grąžinti true, jei metai keliamieji, ir false priešingu atveju.

const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(isLeapYear(2032))


// Parašykite funkciją findMaxInArray, kuri ras ir grąžins didžiausią elementą masyve. Galime daryti prielaidą, kad visi array elementai yra skaičiai.

// console.log(findMaxInArray([1, 3, 2, 5, 4])); // 5
// console.log(findMaxInArray([-1, -3, -2, -5, -4])); // -1


function findMaxInArray(arr) {
    let max = arr[0]
    for (let i = 1; i <= arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]
      }
    }
    return max
  }
  
  console.log(findMaxInArray([1, 3, 2, 5, 4])); 



//   Parašykite funkciją sumArray, kuri suskaičiuoja ir grąžina visų elementų sumą masyve. Kaip ir užduotyje prieš tai, galime daryti prielaidą, kad visi array elementai yra skaičiai.

// console.log(sumArray([1, 2, 3, 4, 5])); // 15

function sumArray(arr) {
    let arraySum = 0
    for (let i = 0; i < arr.length; i++) {
      arraySum += arr[i]
    }
    return arraySum
  }
  
  console.log(sumArray([1, 2, 3, 4, 5]))


//   Sukurkite funkciją arMasyvaiLygūs, kuri palygina du masyvus ir grąžina true, jei jie yra identiški, kitu atveju - false.

// console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
// console.log(areArraysEqual([1, 2, 3], [1, 2, 4])); // false

function arMasyvaiLygūs (arr1, arr2){
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]){
        return false
      }
    }
    return true
  }

console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysEqual([1, 2, 3], [1, 2, 4])); // false



// Eilutės apvertimas

// Sukurkite funkciją reverseString, kuri apverčia eilutę be jokių išorinių funkcijų ar metodų.

// Rezultatas

// console.log(reverseString("Labas")); // "sabaL"


function reversedWord (word){
    let result = ''
    for (let i = word.length - 1 ; i >= 0 ; i--){
        result += word[i]
    }
    return result
}
console.log(reversedWord('Kompiuteris'))



// function reverseString(changeWord) {
//     let reversedWord = changeWord.split('')
//     reversedWord.reverse()
//     let result = reversedWord.join('')
//     return result
//   }
  
//   console.log(reverseString("Labas")); // "sabaL"

//   function reverseString(changeWord) {
//     return changeWord.split('').reverse().join('')
//   }
  
//   console.log(reverseString("labas")); // "sabaL"