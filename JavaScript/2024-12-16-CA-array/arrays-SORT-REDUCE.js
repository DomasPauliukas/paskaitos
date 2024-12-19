// Vardai

// Pasirašykite sąrašą su draugų vardais. Išrikiuokite A-Z tvarka. 

let names = ['DoMAS', 'ToMaS', 'DautARE', 'LauryNAS', 'ARTURas']

console.log(names.sort())


// Z-A

// Pakoreguokite pirmame pratime esantį sort, kad išrikiuotumėte Z-A tvarka.

let names = ['Domas', 'Tomas', 'Dautare', 'Laurynas', 'Arturas']

console.log(names.sort((a, b) => b.localeCompare(a)))


// Mažėjimo tvarka

// Nusikopijuokite seką [5, 10, 20, 11, 12, 1, 0, 14, 25] ir su JS surūšiuokite ją mažėjimo tvarka (nuo didžiausio iki mažiausio).

let arr = [5, 10, 20, 11, 12, 1, 0, 14, 25]

arr.sort((a,b) => b - a)
console.log(arr)


// Didžiausias

// Nusikopijuokite seką [10, 5, 20, 4] ir grąžinkite didžiausią skaičių (vieną skaičių).

let arr = [10, 5, 20, 4]

arr.sort((a,b) => a - b)
console.log(arr[arr.length - 1])


--------------------- REDUCE ============================

const people = [
    {
      name: "Petras",
      age: "18"
    },
    {
      name: "Jonas",
      age: 15
    },
    {
      name: "Antanas",
      age: 20
    },
    {
      name: "Urtė",
      age: 10
    },
    {
      name: "Diana",
      age: 25
    },
    {
      name: "Ieva",
      age: 16
    }
  ];

// 1.  Prafiltruokite masyvą, kad rodytų tik pilnamečius. 

let function1 = function (item) {
  item.forEach(num => {
    if (num.age >= 18){
      console.log(num)
    }
  })
}
function1(people)

// Pakoreguokite aukščiau nurodytą pratimą, kad pilnamečių array rodytų tik vardus (amžius jau nesvarbu). Rezultatas turi būti: ["Petras", "Antanas", "Diana"].

let function2 = function (item) {
  let nameArray = []
item.forEach(num => {
  if (num.age >= 18) {
    nameArray.push(num.name)
  }
})
return nameArray
}
console.log(function2(people))


// Antro pratimo array išrikiuokite A-Z tvarka. Optimizuokite kodą, kad visas veiksmas tilptų į vieną eilutę.

let function3 = function (item) {
  let nameArray = []
item.forEach(num => {
  if (num.age >= 18) {
    nameArray.push(num.name)
  }
})
return nameArray.sort()
}
console.log(function3(people))


// Sukurkite funkciją. Ji priims vieną argumentą – array su objektais, kurie turės du parametrus:

// name 

// ir price. 

// Grąžinkite – brangiausią ir pigiausią prekes. 

// Turi veikti padavus neribotą kiekį elementų (pavyzdyje apačioje – tik du).

// Pvz:

// iškvietimas: fn([{name: "lemonade", price: 50}, {name: "lime", price: 10}])

// grąžins: {brangiausias: "lemonade", pigausias: "lime"}

let function4 = function (array) {
  array.sort((a,b) => a.price - b.price)
  return console.log(`Brangiausias: ` + array.at(-1).name + `, pigiausias: ` + array[0].name)
}
function4([{ name: "lemonade", price: 50 }, { name: "lime", price: 10 }, {name: "strawberry", price: 65}])