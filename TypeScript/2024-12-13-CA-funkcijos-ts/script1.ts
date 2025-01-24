// Vardo funkcija

// Ne visos funkcijos turi return statement (nors dažniausiai taip yra). Sukurkite funkciją, į kurią paduosite vardą ir parodysite panaudodami alert.

function vardas(name: string): void {
    alert(name)
}
vardas('Domas')


// Random

// Taip pat ne visos funkcijos turi parametrus – sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.

function random(max: number): void {
    console.log(Math.floor(Math.random() * max))
  }
  random(6)


// Raidžių skaičius

// Sukurkite funkciją, kuri paims du parametrus – vardą ir pavardę, tada grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).


function nameLenght(vardas: string, pavarde: string): void {
    console.log(vardas.length + pavarde.length)
  }
  nameLenght('Domas', 'Pauliukas')



// Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abėcėlės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). 

// Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę. Jei primiršot array – pasižiūrėkite čia.

function alphabet1 (index: number): string{
let abecele: string [] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
return abecele[index]
}
alphabet1(1)


// Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti sum, sub, div, multi (matematinės reikšmės – sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9 ir t.t.).

// Hint: Reikės funkcijoje naudoti if...else arba switch.

function matematika2 (n1: number, n2: number, operator: string): number | string{
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
    } else {
      return `incorrect operator given`
    }
}
console.log(matematika2(5,2,'sum'))



// Kvadratas

// Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita – gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).

function randomNumber2 (): number {
    return Math.floor(Math.random() * 11)
  }

function randomSquare2 (num: number){
    return Math.pow(num, 2)
}
console.log(randomSquare2(randomNumber2()))


// ***************** ANONIMINES IR ARROW FUNKCIJOS // ************

// Vardo funkcija

// Ne visos funkcijos turi return statement (nors dažniausiai taip yra). Sukurkite funkciją, į kurią paduosite vardą ir parodysite panaudodami alert.

let vardas2 = function(name: string): void {
    alert(name)
  }
  vardas2('Domas')

  let vardas3 = (name: string): void => alert(name)

  vardas3('Domas')


// Random

// Taip pat ne visos funkcijos turi parametrus – sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.

let randoM = (num: number): number => Math.floor(Math.random() * num)

randoM(6)


// Raidžių skaičius

// Sukurkite funkciją, kuri paims du parametrus – vardą ir pavardę, tada grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).

let vardoIlgis = (vardas: string, pavarde: string): number => vardas.length + pavarde.length

vardoIlgis('Domas', 'Pauliukas')


// Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abėcėlės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). 

// Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę. Jei primiršot array – pasižiūrėkite čia.


let abecele: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let alphabet = (index: number): string => abecele[index]

console.log(alphabet(8))



// Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti sum, sub, div, multi (matematinės reikšmės – sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9 ir t.t.).

// Hint: Reikės funkcijoje naudoti if...else arba switch.


let matematika = (n1:number, n2:number, operator:string) => {
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

let randomSquare = (num: number) => Math.pow(num, 2)

console.log(randomSquare(randomNumber()))




// m/s į km/s 

// Parašykite funkciją convertMStoKMH, kuri konvertuoja greitį iš metrų per sekundę į kilometrus per valandą.

let convertMStoKMH = (meters: number) => meters * 3.6
console.log(convertMStoKMH(20))


// Parašykite funkciją compareNumber, kuri palygina du skaičius ir grąžina didesnįjį iš jų. Jei skaičiai yra lygūs, funkcija turėtų grąžinti "lygūs". Įsitikinkite, kad abu argumentai yra skaičiai; jei ne, grąžinkite klaidos pranešimą.

// Rezultatas

// console.log(compareNumber(4, 7)); // 7
// console.log(compareNumber(5, 5)); // "equal"
// console.log(compareNumber("5", 5)); // "Error: most arguments must be numbers"

function compareNumber(x:number, y:number) {
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

const isLeapYear = (year: number) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(isLeapYear(2032))


// Parašykite funkciją findMaxInArray, kuri ras ir grąžins didžiausią elementą masyve. Galime daryti prielaidą, kad visi array elementai yra skaičiai.

// console.log(findMaxInArray([1, 3, 2, 5, 4])); // 5
// console.log(findMaxInArray([-1, -3, -2, -5, -4])); // -1


function findMaxInArray(arr: number[]) {
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

function sumArray(arr: number[]) {
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

function arMasyvaiLygūs (arr1: number[], arr2: number[]): boolean{
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]){
        return false
      }
    }
    return true
  }

console.log(arMasyvaiLygūs([1, 2, 3], [1, 2, 3])); // true
console.log(arMasyvaiLygūs([1, 2, 3], [1, 2, 4])); // false



// Eilutės apvertimas

// Sukurkite funkciją reverseString, kuri apverčia eilutę be jokių išorinių funkcijų ar metodų.

// Rezultatas

// console.log(reverseString("Labas")); // "sabaL"


function reversedWord (word: string){
    let result: string = ''
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



// Parašykite funkciją arPalindromas, kuri tikrina, ar žodis yra palindromas. Funkcija turi grąžinti true, jei žodis yra palindromas, priešingu ateju  - false.

// console.log(isPalindrome("savas")); // true

function arPalindromas(word: string) {
    let testWord = word.split('').reverse().join('')
    if (testWord === word) {
      return true
    }
    return false
  }
  console.log(arPalindromas('savas'))



  // Skaičių piramidė
  
  // Sukurkite funkciją printPyramid, kuri spausdina skaičių piramidę iki nurodyto aukščio. Pavyzdžiui, 3 auktštų piramidė atrodo taip:
  
  // 1
  // 22
  // 333

  const printPyramid = (height: number) => {
    for (let i = 1; i <= height; i++) {
      let line = '';
      for (let j = 0; j < i; j++) {
        line += i;
      }
      console.log(line);
    }
  }
  
  printPyramid(3)