//console.groupcollapse()
//console.groupend()  -> suskleidzia dali consoles
// Matematiniai operatoriai

//Daug operatorių pažįstame iš mokyklos laikų. Tai tokie kaip sudėtis +, daugyba *, atimtis - ir pan.

// Sukurkite du kintamuosius. Vieną kintamąjį a, kuris būtų lygus 10, antrą kintamąjį b su bet kokiu skaičiumi. Pasirašykite JavaScript kodą, kuris sumuoja du skaičius ir išspausdina rezultatą.

let a = 10;
let b = 5;

alert (a + b);

const c = 10;
const d = 12;
const sum = a + b;
console.log(sum);

// Sukurkite kitamąjį year ir iš jo atimkite savo amžių. Nenaudokite jokių papildomų kintamųjų, rezultatas turi būti išvestas naudojant console.log(year).

let year = 2023;
year -= 18
console.log(year);

// Sukurkite du kintamuosius - vieną su savo vardu, kitą su pavarde. Parašykite kodą, kuris sujungs jūsų vardą ir pavardę bei išves rezultatą į konsolę.

let name = 'Domas';
let pavarde = 'Pauliukas';
let fullName = name + ' ' + pavarde

console.log(fullName);

// Sukurkite kintamąjį, kuriame bus nurodyta temperatūra. Parašykite matematinę operaciją, kuri konvertuos Celsijus į Farenheitus.

let celsius = '10';
let farenheit = celsius * 1.8 + 32;
console.log(farenheit)

// Parašykite JavaScript kodą, kuris atlieka finansinę operaciją, remdamasis esamu banko balansu. Operacija yra tokia:
// Pradinis banko balansas yra 999.99 eurų.
// Prie balanso pridedama 9% nuo dabartinio balanso.
// Po to balansas padauginamas iš 2.
// Iš rezultato atimama 50 eurų.
// Išveskite visus tarpinius balansus po kiekvienos operacijos, suapvalinkite rezultatus iki 2 skaičių po kablelio.

let balansas = 999.99;
console.log('Pradinis balansas: ' + balansas.toFixed(2) + ' eur')
let balansas1 = balansas + (balansas * 9 / 100);
console.log('Pradinis balansas + 9%: ' + balansas1.toFixed(2) + ' eur');
let balansas2 = balansas1 * 2;
console.log('Padvigubintas naujas balansas: ' + balansas2.toFixed(2) + ' eur');
let balansas3 = balansas2 - 50;
console.log('Nuo galutinio balanso atimta 50 eur: ' + balansas3.toFixed(2) + ' eur');

// && - and (ir - ar abu lygus)
// || - or (ar bent vienas lygus)
// == -> tik reiksmes ar lygios
// === -> ir reiksmes ir duomenu tipai ar lygus.
// != -> nelygu

alert('A' > 'a') - false //mazoji raide turi didesni indeksa
alert('a' > 'A') - true

// Parašykite kodą, kuris palygina du tekstus ir išspausdina rezultatą, ar jie yra lygūs.


let text = 'apelsinas'
let text2 = 'apelsinas'
let result = text === text2
console.log(result)

// Turite du kintamuosius number ir text, jų reikšmės atitinkamai yra 10 ir "10". Sukurkite tris skirtingus palyginimus ir išveskite juos į konsolę.

// Rezultatas turėtų būti:
// false
// true 
// false
let q = 10
let w = '10'

let ppp = q === w
console.log(ppp)
let ooo = q == w
console.log(ooo)
let iii = q > w
console.log(iii)

// Sukurkite du kintamuosius - currentBalance ir transaction. Palyginkite juos ir išveskite ar užtenka balanso atlikti operacijai.

// currentBalance  - 50, transaction - -50, rezultatas - true

// currentBalance  - 50, transaction - 50, rezultatas - true

// currentBalance  - 50, transaction - -51, rezultatas - false

// currentBalance  - 50, transaction - 51, rezultatas - true

// -----

// Patikrinkite ar du pasirinkti skaičiai dalinasi be liekanos. Rezultatą išveskite ekrane.

let k = 20
let j = 9
let jk = k % j ===0
console.log(jk)