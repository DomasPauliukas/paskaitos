// Elementų pridėjimas

// Parašykite funkciją addElement, kuri naudoja push() metodą, kad pridėtų naują elementą į masyvą.

function addElement (arr, num) {
    arr.push(num)
    return arr
  }
  console.log(addElement([5,5,7], 6))


//   Sujunkite du masyvus į vieną
  
//   Sukurkite funkciją mergeArrays, kuri sujungia du masyvus į vieną.
  
//   Rezultatas
  
//   console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

function mergeArrays(arr1, arr2) {
    let newArray = [...arr1, ...arr2]
    return newArray
  }
  console.log(mergeArrays([1, 2, 3], [4, 5, 6, 7]))



// Parašykite funkciją addMultipleElements, kuri naudoja spread operatorių ..., kad pridėtų kelis elementus į masyvą. 

// Rezultatas

// console.log(addMultipleElements([1, 2, 3], 4, 5, 6)); // [1, 2, 3, 4, 5, 6]

function addMultipleElements(arr, n1, n2, n3) {
    let newArray = arr.concat(n1, n2, n3)
    return newArray
    
  }
  console.log(addMultipleElements([1, 2, 3], 4, 5, 6))



// Parašykite funkciją doubleNumbers, kuri naudoja map() metodą, kad padvigubintų kiekvieną masyvo elementą.
  
// console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]

function doubleNumbers (arr) {
    let newArr = arr.map(item => item * 2)
    return newArr
}
console.log(doubleNumbers([1, 2, 3]))



// Parašykite funkciją findUnique, kuri grąžina unikalius elementus iš masyvo.

// console.log(findUnique([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]


function findUnique(arr) {
    let newArr = []
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

1) function planTrip(arr) {
    let newArr = 0
    for (let i = 0 ; i < arr.length ; i++){
      newArr += arr[i]
    }
    if (newArr < 200){                                 // FOR LOOP
      return 'svoris leistinas'
    } 
      return 'svoris virsija 200kg'
    }
console.log(planTrip([30, 70, 90]))

2) function planTrip(arr) {
    let newArr = 0
    
    arr.forEach(num => newArr += num)                 // FOR EACH 
    
    if (newArr < 200){
      return 'svoris leistinas'                   
    } 
      return 'svoris virsija 200kg'
    }
    console.log(planTrip([30, 70, 90]))

3) function planTrip (arr){
    let newArray = arr.reduce((acc, cur) => {         // REDUCE
      return acc + cur
    })
    if (newArray < 200){
      return 'svoris leistinas'
    } 
      return 'svoris virsija 200kg'
    }
    console.log(planTrip([30, 70, 90]))


    