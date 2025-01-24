// Elementų pridėjimas

// Parašykite funkciją addElement, kuri naudoja push() metodą, kad pridėtų naują elementą į masyvą.

function addElement (arr: number[], num: number): number [] {
    arr.push(num)
    return arr
  }
  console.log(addElement([5,5,7], 6))


//   Sujunkite du masyvus į vieną
  
//   Sukurkite funkciją mergeArrays, kuri sujungia du masyvus į vieną.
  
//   Rezultatas
  
//   console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

function mergeArrays(arr1: number[], arr2: number[]):number [] {
    let newArray = [...arr1, ...arr2]
    return newArray
  }
  console.log(mergeArrays([1, 2, 3], [4, 5, 6, 7]))



// Parašykite funkciją addMultipleElements, kuri naudoja spread operatorių ..., kad pridėtų kelis elementus į masyvą. 

// Rezultatas

// console.log(addMultipleElements([1, 2, 3], 4, 5, 6)); // [1, 2, 3, 4, 5, 6]

function addMultipleElements(arr: number[], n1: number, n2: number, n3: number): number[] {
    let newArray = arr.concat(n1, n2, n3)
    return newArray
    
  }
  console.log(addMultipleElements([1, 2, 3], 4, 5, 6))



// Parašykite funkciją doubleNumbers, kuri naudoja map() metodą, kad padvigubintų kiekvieną masyvo elementą.
  
// console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]

function doubleNumbers (arr: number[]): number[] {
    let newArr = arr.map(item => item * 2)
    return newArr
}
console.log(doubleNumbers([1, 2, 3]))



// Parašykite funkciją findUnique, kuri grąžina unikalius elementus iš masyvo.

// console.log(findUnique([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]


function findUnique(arr: number[]) {
    let newArr: number[] = []
    arr.forEach(element => {
      if (!newArr.includes(element)){
        newArr.push(element)
      }
    });
      return newArr
  }
  console.log(findUnique([1, 2, 2, 3, 4, 4, 5]))



// Jūsų užduotis - sukurti funkciją planTrip, kuri nustato, ar galima atlikti kelionę neperkraunant transporto priemonės. Transporto priemonė gali pavežti iki 200 kg. Funkcija priima masyvą su daiktų svoriais ir nustato, ar bendras svoris neviršija leistinos ribos.

// Rezultatas

// console.log(planTrip([30, 70, 90])); // true
// console.log(planTrip([100, 85, 60])); // false

 function planTrip1(arr: number[]) {
    let newArr = 0
    for (let i = 0 ; i < arr.length ; i++){
      newArr += arr[i]
    }
    if (newArr < 200){                                 // FOR LOOP
      return 'svoris leistinas'
    } 
      return 'svoris virsija 200kg'
    }
console.log(planTrip1([30, 70, 90]))

 function planTrip2(arr: number[]) {
    let newArr = 0
    
    arr.forEach(num => newArr += num)                 // FOR EACH 
    
    if (newArr < 200){
      return 'svoris leistinas'                   
    } 
      return 'svoris virsija 200kg'
    }
    console.log(planTrip2([30, 70, 90]))

 function planTrip3 (arr: number[]){
    let newArray = arr.reduce((acc, cur) => {         // REDUCE
      return acc + cur
    })
    if (newArray < 200){
      return 'svoris leistinas'
    } 
      return 'svoris virsija 200kg'
    }
    console.log(planTrip3([30, 70, 90]))


// Aptarnavimo eilės optimizavimas
    
// Jūs dirbate restorane ir turite optimizuoti užsakymų aptarnavimo eilę. Sukurkite funkciją optimizeQueue, kuri surikiuoja užsakymus pagal jų dydį (mažiausi pirmi). Kiekvienas užsakymas yra objektas, turintis id ir size savybes. Funkcija grąžina masyvą su surikiuotais užsakymų ID.
    
// Rezultatas   
    
// console.log(optimizeQueue([{ id: 1, size: 5 }, { id: 2, size: 3 }, { id: 3, size: 8 }])); // [2, 1, 3]


// let optimizeQueue = function () {

// }

// console.log(optimizeQueue([{ id: 1, size: 5 }, { id: 2, size: 3 }, { id: 3, size: 8 }]))

let optimizeQueue = function (obj: {id: number, size: number}[]) {
  obj.sort((a,b) => a.size - b.size).forEach(item => console.log(item.id))
  }
  
  optimizeQueue([{ id: 1, size: 5 }, { id: 2, size: 3 }, { id: 3, size: 8 }])


  // Dažniausiai pasikartojantis
  // sudėtingas
  
  // Sukurkite funkciją findMostFrequent, kuri nustato ir grąžina dažniausiai pasitaikantį elementą masyve.
  
  // Rezultatas
  
  
  // console.log(findMostFrequent([3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3])); // 1

  let findMostFrequent = function (numArr: number[]) {

  }
  findMostFrequent([3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3])