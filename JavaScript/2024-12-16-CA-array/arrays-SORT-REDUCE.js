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
