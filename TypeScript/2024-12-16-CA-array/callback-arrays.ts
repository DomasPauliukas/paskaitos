// Sukurkite dvi funkcijas: 

// alertName
// consoleName

// Abi funkcijos turės vieną parametrą – vardą. Jos bus callback funkcijos. Pirmoji funkcija vardą alertins, antroji – console.log'ins. 

// Susikurkite pagrindę funkciją (coreFunction). Ši funkcija – paims pirmą raidę, ją padarys didžiąja ir prijungs kitas raides (t.y. užtikrina, kad vardas prasideda iš didžiosios; pvz: "petras" => "Petras"), tada iškviečia vieną iš callback funkcijų (nesvarbu kurią, galima jas kaitalioti).

function consoleName (text: string): void{
    console.log(text)
  }
  
  function coreFunction(name: string, callback: (text: string) => void) {
    let answer = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    callback (answer)
  }
  
  coreFunction('mazvyDas', consoleName)



//   Automobiliai

// Nusikopijuokite array const cars = ["BMW", "VW", "Audi"] ir, naudojant forEach, atspausdinkite kiekvieną elementą (automobilio reikšmę). 


const cars: string[] = ["BMW", "VW", "Audi"]

cars.forEach(function (item){
  console.log(item)
})

// cars.forEach( item => console.log(item))


// Automobiliai (papildymas)

// Pakoreguokite pirmą pratimą, kad atspausdintumėte index: value (pvz: 0: BMW, 1: VW ir t.t.).

const cars2: string[] = ["BMW", "VW", "Audi"]

  cars2.map((value: string, index: number) => {
  console.log(`${index}: ${value}`)
})

function testing (arr: string[]) {
    arr.forEach((value,index) =>
    {
      console.log(`${index}: ${value}`)
    })
}
testing (['BMW', 'Audi', 'Peugeot', 'VW'])

// Friends

// Sukurkite masyvą pavadinimu names su savo draugų vardais, raidžių kapitalizaciją pamiksuokite (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padarykite, kad susikurtų naujas array (ir jį atspausdinkite), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" -> "Petras").

let names: string[] = ['doMAS', 'ToMaS', 'DautARE', 'lauryNAS', 'ARTURas', 'ViLmA']
let newArray: string[] = names.map(item =>  item[0].toUpperCase() + item.slice(1).toLocaleLowerCase())
console.log(newArray)



// Pilnamečiai

// Sukurkite array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter – išveskite tik tuos skaičius, kurie yra didesni arba lygūs 18.

let ages: number[] = [99, 8, 74, 41, 11, 2, 55, 89, 63]

let newAges = ages.filter(function (item) {
    return item >= 18
  })
    console.log(newAges)

// let newAges = ages.filter (item => item >= 18)



// Prasideda iš K

// Sukurkite array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find – suraskite bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

let miestai: string[] = ['Vilnius', 'Kaunas', 'Kaisiadorys', 'Utena']

console.log(miestai.find(item => item[0] === 'K'))


// Miestai iš mažosios

// Penktame pratime esantį sprendimą pakoreguokite ir patikrinkite su some ar bent vienas miestas prasideda iš mažosios.

let miestai2: string[] = ['Vilnius', 'Kaunas', 'Kaisiadorys', 'Utena']

let smallLetter = (city: string) => city[0] === city[0].toLowerCase()

console.log(miestai2.some(smallLetter))


// Visi iš didžiosios

// Pakoreguokite šeštą pratimą, kad patikrintų ar visi miestai prasideda iš didžiosios raidės.

let miestai3: string[] = ['Vilnius', 'Kaunas', 'Kaisiadorys', 'Utena']

console.log(miestai3.every(city => city[0] === city[0].toUpperCase()))
