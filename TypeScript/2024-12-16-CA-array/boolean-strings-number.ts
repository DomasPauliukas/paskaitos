// Parašykite funkciją convertToUpperCase, kuri pakeičia visus teksto simbolius į didžiąsias raides (pvz. labas pakeitų į LABAS).

function convertToUpperCase(str: string): void {
    console.log(str.toUpperCase())
  }
  
  convertToUpperCase('labas')


// Sukurkite funkciją extractSubstring, kuri grąžina iškarpos, pradedant nuo 3 iki 7 simbolio, tekstą.

function extractSubstring (str: string) {
    let answer = str.slice(2, 7)
    console.log(answer)
}
extractSubstring('Akropolis')


// Sukurkite funkciją capitalizeFirstLetter, kuri pavertimas pirmąją kiekvieno žodžio raidę tekste į didžiąją.

function capitalizeFirstLetter(str: string) {

    let strArr: string[] = str.split(' ')
    let result: string = ''
    for (let i = 0 ; i < strArr.length ; i ++){
      let everyWord = strArr[i]
      let capitalLetter = everyWord.charAt(0).toUpperCase() + everyWord.slice(1)
      result += ' ' + capitalLetter
      
    }
    console.log(result)
    
    }
    capitalizeFirstLetter('labas vakaras, kaip sekasi, ka veiksi vakare?')


// Nepadorių žodžių cenzūra

// Parašykite funkciją censorCurseWords, kuri tekste pakeičia nurodytus nepadorius žodžius į "****". Sprendimas turi nenaudoti reguliariųjų išraiškų (angl. Regular expression).

// Rezultatas ir funkcijos kvietimas turėtų atrodyti taip:


// console.log(censorCurseWords("This is a badword and another badword.", ["badword"])); // "This is a **** and another *

// ?????????????????????????
// ?????????????????????
// ??????????????????
// ??????????????????



// Milk price

// Sukurkite kintamąjį milkPrice. Su JS patikrinkite ir išveskite vartotojui alert() ar jam reikės pasiimti smulkių centų, ar nereikės (t.y. ar skaičius sveikas ar ne). 

let milkPrice1 = 4.10

if (milkPrice1 === Number(milkPrice1.toFixed(0))) {
  alert('centu nereikes')
} else {
  alert('centu reikes')
}

const milkPrice2 = 3.49; // Vėliau pakeisti kainą į 3

if (Number.isInteger(milkPrice2)) {
  alert("Centų nereikia")
} else{
  alert("Centų prireiks...")
}


// Skaičiai po kablelio

// Papildykite pirmą pratimą, kad alert() taip pat išvestų kainą su dviem skaičias po kablelio (t.y. 3.49, 3.00).

let milkPrice = 4.562

if (milkPrice === Number(milkPrice.toFixed(0))) {
  alert('centu nereikes')
} else {
  alert('centu reikes ' + milkPrice.toFixed(2))
}


// Sukurkite funkciją findMax, kuri grąžina didžiausią skaičių iš pateiktų argumentų naudojant Math.max().


function findMax(numbers: number[]) {
    console.log(Math.max(...numbers))
  }
  findMax([1, 8, 99, 52, 2, 2, 1, 4, 5, 2, 655, 3, 5, 8, 5])



// Legal age

// Pasirašykite kintamąjį isLegalAge, kurį priskirkite true arba false. 

// Console.log'e atvaizduokite šį kintamąjį. 

// Sukurkite antrą console.log, kuriame atvaizduokite šį kintamąjį su toString() metodu. Turėtų skirtis spalva teksto. 

let legalAge = true

console.log(legalAge)
console.log(legalAge.toString())