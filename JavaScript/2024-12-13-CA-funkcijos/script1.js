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