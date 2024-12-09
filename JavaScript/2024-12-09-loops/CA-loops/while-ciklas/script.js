// Su while ciklu pasirašykite, kad jūsų vardą išvestų į console 3 kartus.

// let i = 1

// while (i <= 3){
//     console.log('Domas')
//     i++
// }

// Sukurkite kintamąjį let combo = ''. Kiekvieną kartą paleidus ciklą į combo prisirašo jūsų vardas (t.y. while ciklo viduje darytų combo += "Petras" ). Sukurkite programą, kur bus kintamasis let times = 5, kuris nurodys kiek kartų į combo kintamąjį turėtų būti pridėtas jūsų vardas. Jei times skaičius 0 arba mažiau – vis tiek bent vieną kartą įvyks ciklas ir jūsų vardą įrašys į combo.
// Pvz:
// times = 0; → "Petras"
// times = 1; → "Petras"
// times = 2; → "PetrasPetras"
// times = 3; → "PetrasPetrasPetras"




let combo = ''          //string duomenu tipas. tekstas
let name = 'Domas'
let times = 10

do {
    combo += name   //dabar combo yra tuscias, bet po pirmo loop    taps reiksme 'Domas' ir su kiekvienu ratu prides po 'Domas' (+=)
    times--
} while (times > 0){
    console.log(combo)
}

