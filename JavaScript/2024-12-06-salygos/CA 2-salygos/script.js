// Naudodami if..else konstrukciją, parašykite kodą, kuris klausia: „Kokia yra mažiausia pasaulyje šalis?“
// Jei lankytojas įveda „Vatikanas“, išveskite „Teisingai!“, kitu atveju – išveskite: „Rimtai? Taigi Vatikanas!”.

let value = prompt ('Kokia yra maziausia pasaulyje valstybe?')

if (value === 'Vatikanas'){
    alert('Teisingai!')
} else {
    alert('Rimtai? Taigi Vatikanas!')
}

// Perrašykite if naudodami sąlyginį operatorių ?:


// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }
let a = 1
let b = 2
let result = (a + b < 4) ? 'Below' : 'Over'

// Perrašykite if..else naudojant kelis ternary operatorius ?.

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
let login ;
let message = (login == 'Employee') ? 'Hello':
(login == 'Director') ? 'Greetings':
(login == '') ? 'No login' : '';

// Sukurkite du kintamuosius. Vieną kintamąjį legalAge, kuris būtų lygus 20, antrą kintamąjį clientAge su bet kokiu skaičiumi. Pasirašykite if...else sąlygą, kuri alert išvestų ar klientas jau pasiekęs 20 šį legalAge, ar dar ne.

let legalAge = 20;
let clientAge = 22;

if (clientAge >= legalAge){
    console.log ('legalus amzius')
} else{
    console.log('Per jaunas')
}

// Pasirašykite kintamąjį su savo vardu. Sukurkite if...else sąlygą, kuri pasakys "Ilgas vardas", jei jūsų vardas ilgesnis nei 6 raidės. Kitu atveju, nieko neišves. String ilgį galite susižinoti prirašant length savybę (pvz.: "Gedas".length arba su kintamuoju: name.length).

let name = 'Domas';
if (name.length > 6){
    console.log ('ilgas vardas')
}

// Sukurkite kintamąjį su savo amžiumi. Patikrinkite: jei amžius didesnis nei 100, arba mažesnis nei 0 - tegul išmeta "Invalid age"; jei amžius tarp 1 ir 18 - "Child"; jei tarp 19 ir 99 - "Adult".

let names = 105;
if (names >= 1 && names <= 18){
    console.log ('Child')
} else if (names >= 19 && names <= 99){
    console.log ('Adult')
} else {
    console.log ('Invalid age')
}

// Sukurkite kintamąjį car, kuris bus lygus automobilio prekės ženklui. Parašykite if...else sąlygą, kuri pasakys ar prekės ženklas priklauso VW Group, BMW Group, ar nei vienam.
// VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
// BMW group priklauso: BMW, Mini, Rolls-Royce.


let car = ('Mini')
if (car === 'VW' || car === 'Audi' || car === 'Bentley' || car === 'Bugatti' || car === 'Lamborghini' || car === 'Porche'){
    console.log ('Automobilis priklauso VW group')
} else if (car === 'BMW' || car === 'Mini' || car ==='Rolls-Royce'){
    console.log('Automobilis priklauso BMW group')
} else {
    console.log('Automobilis nepriklauso nei vienai is siu grupiu')
}

// Susikurkite kintamąjį su jūsų vardu. Pasiklauskite, ar vardo ilgis trumpesnis nei 5 simboliai – jei taip, tegul išveda konsolėje "Short Name", kitu atveju – "Long Name".

let vardas = 'Domas'
console.log (vardas.length < 5 ? 'Short Name' : 'Long Name')

// Sukurkite du kintamuosius clientAge ir legalAge. Patikriname ar vartotojas gali vairuoti automobilį – t.y. clientAge didesnis arba lygus legalAge. Jei taip – išveda Can Drive, kitu atveju Can't drive.
//++++++
// Hmm, o jeigu antrame pratime įvesti -1 kaip amžių? Darom double ternary operator – t.y. operatorius operatoriuje. Pirma paklausiame – ar amžius mažesnis nei 0; arba didesnis nei 120 – išvedame "Invalid Age". Jei vis tik ne – tada false statement'e bus dar vienas operatorius su antro pratimo klausimu.

let legalAGE = 18;
let clientAGE = 99;

clientAGE <= 0 || clientAge > 120 ? console.log('Invalid Age') : clientAGE >= legalAGE ? console.log (`Can Drive`) : console.log (`Can't Drive`)

// Sukurkite kintamąjį phone, kuris būtų lygus iPhone. Taip pat sukurkite kintamąjį isIphoneUser, kuris turėtų būti prilygintas Boolean reikšmei (t.y. true arba false) priklausomai ar phone yra iPhone ar bet koks kitas.

let phone = 'iPhone'
console.log(iPhoneUser = phone === 'iPhone')
