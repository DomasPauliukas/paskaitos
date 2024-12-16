// SLAPTAŽODIS:
// 1. Jeigu slaptažodis yra trumpesnis už 16 simbolių, tai parašyti jog „Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
// 2. Jeigu slaptažodis yra ilgesnis už 15 simbolių, tai:
// 2.1. Patikrinti ar jis yra ilgesnis už 20 simbolių. Jeigu ilgesnis, tai parašyti: „Slaptažodis tinkamas".
// 2.2. Jeigu jis nėra ilgesnis už 20 simbolių, tai parašyti jog: „Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."

// 3. Jeigu slaptažodis neturi grotažymių (#), tai parašyti: „Slaptažodis privalo turėti grotažymes"

function checkPassword (originalPasword) {
let password = originalPasword.trim() //nuima tuscius stringus priekyje ir gale.

if (!password.includes('#')){
    return 'Slaptazodis privalo tureti # simboli'
}
if (password.length < 16 ){
    return 'slaptazodis yra per trumpas. Jis privalo buti bent 16 simboliu ilgumo'
}
if (password.length <= 20){
    return 'Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.'
}
return 'Slaptažodis tinkamas'
}


console.log(checkPassword('dasdasdasdasd'))

// AMŽIUS
// Pagal amžiu surašyti į kurią klasė eina mokinys:
// 1. Iki 6 metų į mokyklą neina.
// 2. 7-10 metų eina į pradinę klasę.
// 3. 11-14 metų eina į pagrindinę.
// 4. 15-18 metų eina į gimnaziją.
// 5. 19+ mokyklą baigė.


// 8. Jeigu įvestas ne amžius (t.y. ne skaičius), tai parašyti: "Netinkamai nurodytas amžius, amžius privalo būti skaičius."

// 9. Panaudoti prompt funkciją amžiui įvesti.

function checkAge (ages) {

  // let ages = Number(prompt('Iveskite asmens amziu'))
  // console.log(ages)
  // console.log(typeof ages)
  
  if (isNaN(ages)) {
    return ('Netinkamai nurodytas amžius, amžius privalo būti skaičius.')
  }
  if (ages < 0) {
    return ('įvestas amžius yra per mažas')
  }
  if (ages < 6) {
    return ('i mokykla neina')
  }
  if (ages < 7) {
    return ('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.')
  }
  if (ages < 10) {
    return ('eina i pradine klase')
  }
  if (ages < 11) {
    return ('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.')
  }
  if (ages < 14) {
    return ('eina i pagrindine')
  }
  if (ages < 15) {
    return ('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.')
  }
  if (ages < 18) {
    return ('eina i gimnazija')
  }
  if (ages < 19) {
    return ('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.')
  }
  if (ages < 120) {
    return ('mokykla baige')
  }
    return ('ivestas amzius per didelis')
  
}
console.log(checkAge(15))



// GALVOSŪKIS: sukurti galvosūkį su keletu klausimu
// PIRMAS LYGIS:
// 1. Norint patekti į kitą lygį, reikia atsakyti bent į vieną klausimą iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris klausimas buvo neteisingas.

// 1. Patekai i kita lygi: abu atsakymai teisingi.
// 2. Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.
// 3. Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.
// 4. Nepatekai i kita lygi: abu atsakymai buvo neteisingi.

function checkAnswers (playerAnswer11, playerAnswer12) {
  
  let correctAnswer11 = 1
  let correctAnswer12 = 2
  
  if (correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12) {
   return ('Patekai i kita lygi: abu atsakymai teisingi')
  }
  if (correctAnswer11 === playerAnswer11) {
   return ('Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
  }
  if (correctAnswer12 === playerAnswer12) {
   return ('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
  }
   return ('Nepatekai i kita lygi: abu atsakymai buvo neteisingi')
  }

  console.log(checkAnswers())



// ANTRAS LYGIS:
// 1. Norint patekti į kitą lygį, reikia atsakyti į abu klausimus iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris atsakymas buvo neteisingas.

// 1. Patekai i kita lygi: abu atsakymai teisingi.
// 2. Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.
// 3. Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.
// 4. Nepatekai i kita lygi: abu atsakymai buvo neteisingi.
let playerAnswer21 = 2
let playerAnswer22 = 3

let correctAnswer21 = 1
let correctAnswer22 = 2

if (correctAnswer21 === playerAnswer21 && correctAnswer22 === playerAnswer22) {
  console.log('Patekai i kita lygi: abu atsakymai teisingi.')
} else if (correctAnswer22 === playerAnswer22) {
  console.log('Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
} else if (correctAnswer21 === playerAnswer21) {
  console.log('Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
} else {
  console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
}

// TREČIAS LYGIS: 
// 1. Trys klausimai ir į kitą lygį pereinama, jeigu atsakomi bent du klausimai.
// 2. Jeigu atsakomi du klausimai, turi būti parodoma, kuris klausimas buvo neatsakytas.
// 3. Jeigu atsakomi mažiau nei du klausimai, tai turi parodyti, kuris klausimas buvo atsakytas.

let playerAnswer31 = 1
let playerAnswer32 = 1
let playerAnswer33 = 1

let correctAnswer31 = 1
let correctAnswer32 = 3
let correctAnswer33 = 3

if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33) {
  console.log('pateikai i kita lygi: atsakei i visus klausimus teisingai')
} else if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32) {
  console.log('patekai i kita lygi, bet trecias klausimas atsakytas neteisingai')
} else if (correctAnswer31 === playerAnswer31 && correctAnswer33 === playerAnswer33) {
  console.log('patekai i kita lygi, bet antras klausimas atsakytas neteisingai')
} else if (correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33) {
  console.log('patekai i kita lygi, bet pirmas klausimas atsakytas neteisingai')
} else if (correctAnswer31 === playerAnswer31) {
  console.log('nepatekai i kita lygi: tik pirmas klausimas atsakytas teisingai')
} else if (correctAnswer32 === playerAnswer32) {
  console.log('nepatekai i kita lygi: tik antras klausimas atsakytas teisingai')
} else if (correctAnswer33 === playerAnswer33) {
  console.log('nepatekai i kita lygi: tik trecias klausimas atsakytas teisingai')
} else {
  console.log('nepatekai i kita lygi: visi atsakymai neteisingi')
}


// PASISVEIKINIMAS:
// let userLoggedIn = false
// let userName = 'John'
// let time = 10
// let itsBirthday = true
// 1. Jeigu vartotojas prisijungęs (true/false), tai prie pasisveikinimo reikia prirašyti jo vardą, pvz. „Good Morning, John.".
// 2. Jeigu vartotojas nėra prisijungęs, tai išvesti tik tekstą „Good Morning".

// if ((userLoggedIn) && (itsBirthday) && (time >= 5) && (time <= 12)) {
//     console.log(`Good Morning, ${userName} and have a great birthday!`)
//   } else if ((userLoggedIn) && (itsBirthday) && (time > 12) && (time <= 18)) {
//     console.log(`Good Afternoon, ${userName} and have a great birthday!`)
//   } else if ((userLoggedIn) && (itsBirthday) && (time >= 19) || (time <= 4)) {
//     console.log(`Good Evening, ${userName} and have a great birthday!`)
//   } else if ((userLoggedIn) && (!itsBirthday) && (time >= 5) && (time <= 12)) {
//     console.log(`Good Morning, ${userName}`)
//   } else if ((userLoggedIn) && (!itsBirthday) && (time > 12) && (time <= 18)) {
//     console.log(`Good Afternoon, ${userName}`)
//   } else if ((userLoggedIn) && (!itsBirthday) && (time >= 19) || (time <= 4)) {
//     console.log(`Good Evening, ${userName}`)
//   } else if (!userLoggedIn && (time >= 5) && (time <= 12)) {
//     console.log(`Good Morning`)
//   } else if (!userLoggedIn && (time > 12) && (time <= 18)) {
//     console.log(`Good Afternoon`)
//   } else if (!userLoggedIn && (time >= 19) || (time <= 4)) {
//     console.log(`Good Evening`)
//   }

// 3. Priklausomai nuo paros laiko, pasisveikinimas turėtų būti skirtingas:
// 3.1. 5-12 val. „Good Morning"
// 3.2. 13-18 val. „Good Afternoon"
// 3.3. 19-4 val. „Good Evening"
// 4. Jeigu vartotojas yra ir prisijungęs, ir šiandien yra jo gimtadienis, tai prie pasisveikinimo dar turi būti parašytas ir pasveikinimas, pvz.: „Good Morning, Tom and have a great birthday!"

function greeting(userLoggedIn, userName, time, itsBirthday) {

  let name = ``
  let birthdayText = ``
  let greetingText = ``

  if (time >= 5 && time < 13) {
    greetingText = `Good Morning`
  } else if (time >= 13 && time < 19) {
    greetingText = `Good Afternoon`
  } else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {
    greetingText = `Good Evening`
  } else {
    greetingText = `Helo`
  }

  if (userLoggedIn && userName) {
    name = `, ${userName}`
  }

  if (userLoggedIn && itsBirthday) {
    birthdayText = `  and have a great birthday!`
  }

  let output = greetingText + name + birthdayText
  return output
}
console.log(greeting(true, 'Domas', 19, true))




// Sukurti ciklus su skaičiais nuo 1 iki 100 ir nuo 100 iki 1. Šie ciklai:
// Kiekvienos užduoties išvesties tekstą suformuluoti, jog būtų parašytas užduoties sprendimas, pvz.: 
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ir t.t.


// 1. Padaugina skaičių iš 2.



function task1(start, end, multiplier) {
  if (start <= end) {
    for (let i = start; i <= end; i++) {
      let answer = i * multiplier
      let output = `${i} * ${multiplier} = ${answer}`
      console.log(output)
    }
  } else {
    for (let i = start; i >= end; i--) {
      let times2 = i * multiplier
      console.log(`${i}* ${multiplier} = ${times2}`)
    }
  }

}
task1(20, 10, 2)


function task2(start, end, multiplier) {
  if (start <= end) {
    for (let i = start; i <= end; i++) {
      let answer = i * multiplier
      let output = `${i} * ${multiplier} = ${answer}`
      console.log(output)
    }
  } else {
    for (let i = start; i >= end; i--) {
      let times2 = i * multiplier
      console.log(`${i}* ${multiplier} = ${times2}`)
    }
  }

}
task2(20, 10, 5)

// 3. Prideda prie skaičiaus 5.
// 4. Atima iš skaičiaus 2.


function task3(start, end, change) {

  let symbol = change >= 0 ? '+' : '-'
    let changeDisplay = Math.abs(change)
  
    if (start <= 100) {
      for (let i = start; i <= end; i++) {
        let plus5 = i + change
        console.log(`${i} ${symbol} ${changeDisplay} = ${plus5}`)
      }
    } else {
      for (let i = start; i > end; i--) {
        let plus5 = i + change
        console.log(`${i} ${symbol} ${changeDisplay} = ${plus5}`)
      }
    }
  }
  
  task3 (1, 100, -2)


// 5. Pakelia skaičių kvadratu.
// 6. Pakelia skaičių kūbu.

function task4(start, end, degree) {



  if (start <= end) {
    for (let i = start; i <= end; i = i + 1) {
      let square2 = i ** degree
      console.log(`${i}*${degree}*${degree} = ${square2}`)
    }
  } else {
    for (let i = start; i > end; i--) {
      let square2 = i ** degree
      console.log(`${i}*${degree}*${degree} = ${square2}`)
    }
  }
}
task4(1, 100, 2)