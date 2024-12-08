// Parašykite kodą naudodami if..else, pagal šį switch:


// switch (browser) {
//   case 'Edge':
//     alert( "RIP Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Šios naršykles palaikomos' );
//     break;

//   default:
//     alert( 'Tikimės, kad šis puslapis atrodys puikiai!' );
// }

let browser = 'Opera';

if (browser === 'Edge'){
    alert('RIP Edge!')
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'){
    alert('Sios narsykles palaikomos')
} else {
    alert('Tikimes, kad sis puslapis atrodys puikiai!')
}

// Perrašykite if į switch

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }
let a = +prompt('a?', '')
switch (a){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1)
        break;
    case 2:
    case 3:
        alert('2.3')
        break;
}

// Ar atsimenate paskutinį if...else pratimą? Būtent jį efektyviau apsirašyti su switch.
// Sukurkite kintamąjį car, kuris bus lygus automobilio prekės ženklui. Aprašykite switch sąlygą, kuri pasakys ar prekės ženklas priklauso VW Group, BMW Group, ar nei vienam.
// VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
// BMW group priklauso: BMW, Mini, Rolls-Royce.

// let car = prompt('VW ar BMW grupei priklauso automobilio prekes zenklas?') ---> klausimas ir irasyti paciam marke
let car = 'Audi'
switch (car){
    case 'VW':
    case 'Audi':
    case 'Bentley':
    case 'Bugatti':
    case 'Lamborghini':
    case 'Porche':
        alert('Priklauso VW grupei')
        break;
    case 'BMW':
    case 'Mini':
    case 'Rolls-Royce':
        alert('Priklauso BWM grupei')
        break;
    default:
        alert('nei vienai')
        break;

}

// Sukurkite kintamąjį userInput ir pradžioje prilyginkite Obuolys. Su switch sąlyga apsirašykite, kad userInput reikšmė yra – vaisius ar daržovė. Pridėkite bent 5 kiekvienos kategorijos

let userInput = 'Obuolys'

switch (userInput){
    case 'Obuolys':
    case 'Kriause':
    case 'Bananas':
    case 'Kivis':
    case 'Ananasas':
        console.log('Tai yra vaisius')
        break;
    case 'Bulve':
    case 'Morka':
    case 'Burokas':
    case 'Cukinija':
    case 'Paprika':
        console.log('tai yra darzove')
        break;
}

// Sukurkite variable weekDay, kuris būtų lygus skaičiui – savaitės dienai, skaičiuojant nuo 0 (t.y. pirmadienis - 0; antradienis - 1; trečiadienis - 2 ir t.t.). Parašykite switch sąlygą, kuri paimtų skaičių ir jį pakeistų (ne sukurtų naują kintamąjį, o pakeistų weekDay reikšmę) į savaitės dieną žodžiu. Vėliau kintamąjį išveskite.

let weekDay = new Date().getDay();
switch (weekDay) {
  case 0:
    weekDay = 'Sekmadienis';
    break;
  case 1:
    weekDay = 'Pirmadienis';
    break;
  case 2:
    weekDay = 'Antradienis';
    break;
  case 3:
    weekDay = 'Trečiadienis';
    break;
  case 4:
    weekDay = 'Ketvirtadienis';
    break;
  case 5:
    weekDay = 'Penktadienis';
    break;
  case 6:
    weekDay = 'Šeštadienis';
    break;
}
console.log(weekDay);