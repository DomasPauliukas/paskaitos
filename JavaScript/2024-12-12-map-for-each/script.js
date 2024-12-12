//  ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

let data = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

console.log(data)
// 4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map/forEach metodą. Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map/forEach metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:

// 4.1. Tik skaičius (number tipo duomenis).

for (let i = 0; i < data.length; i++){
    if (!isNaN(Number(data[i]))) {
      console.log(data[i])
    }
  }

  data.forEach(function (num) {
    if (!isNaN(Number(num))){ 
    console.log(num)
    }
  })

// 4.2. Tik tekstą (string tipo duomenis).

for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'string') {
      console.log(data[i])
    }
  }

  data.forEach(function(num){
    if (typeof num === 'string'){
      console.log(num)
    }
  })

// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.

for (let i = 0 ; i < data.length ; i++){
    if(typeof data[i] === 'number'){
        data[i] ** 4
        console.log(data[i])
    }
}




// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.

for (let i = 0 ; i < data.length ; i++){
    if (typeof data[i] === 'number'){
        data[i] = data[i] + 55
        console.log(data[i])
    }
}


// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.

for (let i = 0 ; i < data.length ; i++){
    if (typeof data[i] === 'number'){
        data[i] = data[i] / 2
        console.log(data[i])
    }
}



// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".

for (let i = 0 ; i < data.length ; i++){
    if (typeof data[i] === 'number'){
        data[i] = `Number: ` + data[i] 
        console.log(data[i])
    }
}


// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
//   "Index: 0, Number: 2"
//   "Index: 1, Number: 3"
//   "Index: 2, Number: 5"
//   Ir t.t.

for (let i = 0 ; i < data.length ; i++){
    if (typeof data[i] === 'number'){
        data[i] = `Index: ` + i + `, Number: ` + data[i] 
        console.log(data[i])
    }
}



// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.

for (let i = 0 ; i < data.length ; i++){
    if (typeof data[i] === 'number'){
        data[i] = data[i] * i
        console.log(data[i])
    }
}


// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.
let onlyNumbers = []
for (let i = 0; i < data.length; i++) {
  if (typeof data[i] === 'number') {
    onlyNumbers.push(data[i])
  }
}
    console.log(onlyNumbers)

    for (let i = 1; i < onlyNumbers.length; i++) {
        let result = onlyNumbers[i] * onlyNumbers[i - 1]
        console.log(result)
      }

// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.

for (let i = 0; i < onlyNumbers.length; i++) {
    if (onlyNumbers[i] * 5 > 350) {
      console.log(onlyNumbers[i])
    }
  }



// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".
// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".
// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";
// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".