// SLAPTAŽODIS:
// 1. Jeigu slaptažodis yra trumpesnis už 16 simbolių, tai parašyti jog „Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
// 2. Jeigu slaptažodis yra ilgesnis už 15 simbolių, tai:
// 2.1. Patikrinti ar jis yra ilgesnis už 20 simbolių. Jeigu ilgesnis, tai parašyti: „Slaptažodis tinkamas".
// 2.2. Jeigu jis nėra ilgesnis už 20 simbolių, tai parašyti jog: „Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."

// 3. Jeigu slaptažodis neturi grotažymių (#), tai parašyti: „Slaptažodis privalo turėti grotažymes"

let password = 'fsdfdfsdf'
if (password.length < 16 ){
    console.log ('slaptazodis yra per trumpas. Jis privalo buti bent 16 simboliu ilgumo')
} else if (password.length <= 20){
    console.log ('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
} else {
    console.log ('Slaptažodis tinkamas')
}

if (password.length >= 21 && password.includes('#')){
    console.log ('Slaptažodis tinkamas');
} else if (password.length >= 16 && password.includes('#')){
    console.log ('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.');
} else {
    console.log ('Slaptazodis privalo buti bent 16 simboliu ir tureti "#" simboli')
}

// AMŽIUS
// Pagal amžiu surašyti į kurią klasė eina mokinys:
// 1. Iki 6 metų į mokyklą neina.
// 2. 7-10 metų eina į pradinę klasę.
// 3. 11-14 metų eina į pagrindinę.
// 4. 15-18 metų eina į gimnaziją.
// 5. 19+ mokyklą baigė.
let age = 6


if (age <= 6) {
    console.log('i mokykla neina')
} else if (age <= 10) {
    console.log('eina i pradine klase')
} else if (age <= 14) {
    console.log('ein i pagrindine')
} else if (age <= 18) {
    console.log('eina i gimnazija')
} else {
    console.log('mokykla baige')
}

// 6.1. Jeigu amžius yra mažiau nei 0, tai parašyti jog įvestas amžius yra per mažas.
// 6.2. Jeigu amžius yra daugau nei 120, tai parašyti jog įvestas amžius yra per didelis.

if (age < 0) {
    console.log ('įvestas amžius yra per mažas') 
} else if (age <= 6) {
    console.log('i mokykla neina')
} else if (age <= 10) {
    console.log('eina i pradine klase')
} else if (age <= 14) {
    console.log('eina i pagrindine')
} else if (age <= 18) {
    console.log('eina i gimnazija')
} else if (age > 120){
    console.log('įvestas amžius yra per didelis')
} else {
    console.log('mokykla baige')
}



// 7.1. Jeigu amžius yra 6 metai, tai parašyti: "Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas."
// 7.2. Jeigu amžius yra 10 metai, tai parašyti: "Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas."
// 7.3. Jeigu amžius yra 14 metai, tai parašyti: "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas."
// 7.4. Jeigu amžius yra 18 metai, tai parašyti: "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."
if (typeof age !== "number"){
    console.log('Netinkamai nurodytas amžius, amžius privalo būti skaičius.')
} else if (age < 0) {
    console.log ('įvestas amžius yra per mažas') 
} else if (age < 6) {
    console.log('i mokykla neina')
} else if (age === 6) {
    console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.')
} else if (age < 10) {
    console.log('eina i pradine klase')
} else if (age === 10) {
    console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.')
} else if (age < 14) {
    console.log('eina i pagrindine')
} else if (age === 14){
    console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.')
} else if (age < 18) {
    console.log('eina i gimnazija')
} else if (age === 18) {
    console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.')
} else if (age > 120){
    console.log('įvestas amžius yra per didelis')
} else {
    console.log('mokykla baige')
}

// 8. Jeigu įvestas ne amžius (t.y. ne skaičius), tai parašyti: "Netinkamai nurodytas amžius, amžius privalo būti skaičius."
if (typeof age !== "number"){
    console.log('Netinkamai nurodytas amžius, amžius privalo būti skaičius.')
}
// 9. Panaudoti prompt funkciją amžiui įvesti.

let ages = prompt ('Iveskite asmens amziu', '')


if (ages < 0) {
    console.log ('įvestas amžius yra per mažas') 
} else if (ages < 6) {
    console.log('i mokykla neina')
} else if (ages == 6) {
    console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.')
} else if (ages < 10) {
    console.log('eina i pradine klase')
} else if (ages == 10) {
    console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.')
} else if (ages < 14) {
    console.log('eina i pagrindine')
} else if (ages == 14){
    console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.')
} else if (ages < 18) {
    console.log('eina i gimnazija')
} else if (ages == 18) {
    console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.')
} else if (ages > 120){
    console.log('įvestas amžius yra per didelis')
} else {
    console.log('mokykla baige')
}

// GALVOSŪKIS: sukurti galvosūkį su keletu klausimu
// PIRMAS LYGIS:
// 1. Norint patekti į kitą lygį, reikia atsakyti bent į vieną klausimą iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris klausimas buvo neteisingas.

// 1. Patekai i kita lygi: abu atsakymai teisingi.
// 2. Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.
// 3. Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.
// 4. Nepatekai i kita lygi: abu atsakymai buvo neteisingi.

let playerAnswer11 = 1
let playerAnswer12 = 1

let correctAnswer11 = 1
let correctAnswer12 = 2

if (correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12) {
    console.log('Patekai i kita lygi: abu atsakymai teisingi')
} else if (correctAnswer11 === playerAnswer11 && correctAnswer12 !== playerAnswer12){
    console.log('Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
} else if (correctAnswer11 !== playerAnswer11 && correctAnswer12 === playerAnswer12){
    console.log('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
} else{
    console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi')
}

// ANTRAS LYGIS:
// 1. Norint patekti į kitą lygį, reikia atsakyti į abu klausimus iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris atsakymas buvo neteisingas.

// 1. Patekai i kita lygi: abu atsakymai teisingi.
// 2. Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.
// 3. Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.
// 4. Nepatekai i kita lygi: abu atsakymai buvo neteisingi.

let playerAnswer21 = 1
let playerAnswer22 = 1

let correctAnswer21 = 1
let correctAnswer22 = 2

if (correctAnswer21 === playerAnswer21 && correctAnswer22 === playerAnswer22) {
    console.log('Patekai i kita lygi: abu atsakymai teisingi.')
} else if (correctAnswer21 !== playerAnswer21 && correctAnswer22 === playerAnswer22){
    console.log('Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
} else if (correctAnswer21 === playerAnswer21 && correctAnswer22 !== playerAnswer22){
    console.log('Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
} else{
    console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
}

// TREČIAS LYGIS: 
// 1. Trys klausimai ir į kitą lygį pereinama, jeigu atsakomi bent du klausimai.
// 2. Jeigu atsakomi du klausimai, turi būti parodoma, kuris klausimas buvo neatsakytas.
// 3. Jeigu atsakomi mažiau nei du klausimai, tai turi parodyti, kuris klausimas buvo atsakytas.

let playerAnswer31 = 1
let playerAnswer32 = 1
let playerAnswer33 = 2

let correctAnswer31 = 1
let correctAnswer32 = 1
let correctAnswer33 = 1

if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33){
    console.log('pateikai i kita lygi: atsakei i visus klausimus teisingai')
} else if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 !== playerAnswer33){
    console.log('patekai i kita lygi, bet trecias klausimas atsakytas neteisingai')
} else if (correctAnswer31 === playerAnswer31 && correctAnswer32 !== playerAnswer32 && correctAnswer33 === playerAnswer33){
    console.log('patekai i kita lygi, bet antras klausimas atsakytas neteisingai')
} else if (correctAnswer31 !== playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33){
    console.log('patekai i kita lygi, bet pirmas klausimas atsakytas neteisingai')
} else if (correctAnswer31 === playerAnswer31 && correctAnswer32 !== playerAnswer32 && correctAnswer33 !== playerAnswer33){
    console.log('nepatekai i kita lygi: tik pirmas klausimas atsakytas teisingai')
} else if (correctAnswer31 !== playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 !== playerAnswer33){
    console.log('nepatekai i kita lygi: tik antras klausimas atsakytas teisingai')
} else if (correctAnswer31 !== playerAnswer31 && correctAnswer32 !== playerAnswer32 && correctAnswer33 === playerAnswer33){
    console.log('nepatekai i kita lygi: tik trecias klausimas atsakytas teisingai')
} else {
    console.log('nepatekai i kita lygi: visi atsakymai neteisingi')
}


// PASISVEIKINIMAS:
let userLoggedIn = false
let userName = 'John'
let time = 10
let itsBirthday = true
// 1. Jeigu vartotojas prisijungęs (true/false), tai prie pasisveikinimo reikia prirašyti jo vardą, pvz. „Good Morning, John.".
// 2. Jeigu vartotojas nėra prisijungęs, tai išvesti tik tekstą „Good Morning".

if ((userLoggedIn === true) && (itsBirthday === true) && (time >= 5) && (time <=12)){
    console.log(`Good Morning, ${userName} and have a great birthday!`)
} else if ((userLoggedIn === true) && (itsBirthday === true) && (time > 12) && (time <=18)){
    console.log(`Good Afternoon, ${userName} and have a great birthday!`)
} else if ((userLoggedIn === true) && (itsBirthday === true) && (time >= 19) || (time <=4)){
    console.log(`Good Evening, ${userName} and have a great birthday!`)
} else if ((userLoggedIn === true) && (itsBirthday !== true) && (time >= 5) && (time <=12)){
    console.log(`Good Morning, ${userName}`)
} else if ((userLoggedIn === true) && (itsBirthday !== true) && (time > 12) && (time <=18)){
    console.log(`Good Afternoon, ${userName}`)
} else if ((userLoggedIn === true) && (itsBirthday !== true) && (time >= 19) || (time <=4)){
    console.log(`Good Evening, ${userName}`)
} else if (userLoggedIn !== true && (time >= 5) && (time <=12)){
    console.log(`Good Morning`)
} else if (userLoggedIn !== true && (time > 12) && (time <=18)){
    console.log(`Good Afternoon`)
} else if (userLoggedIn !== true && (time >= 19) || (time <=4)){
    console.log(`Good Evening`)
}


// 3. Priklausomai nuo paros laiko, pasisveikinimas turėtų būti skirtingas:
// 3.1. 5-12 val. „Good Morning"
// 3.2. 13-18 val. „Good Afternoon"
// 3.3. 19-4 val. „Good Evening"
// 4. Jeigu vartotojas yra ir prisijungęs, ir šiandien yra jo gimtadienis, tai prie pasisveikinimo dar turi būti parašytas ir pasveikinimas, pvz.: „Good Morning, Tom and have a great birthday!"