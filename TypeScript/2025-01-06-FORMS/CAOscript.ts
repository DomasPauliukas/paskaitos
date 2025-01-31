// Kino teatras
// vidutinis
 

// Sukurkite kino teatro kainos apskaičiavimo platformą. Joje turi būti vienas input laukelis, kur žmogus įrašo savo amžių, o JS apskaičiuoja kainą ir išmeta ją h1 elemente. 

// Bilietų kainos:

// Standartinis bilietas 6 eur

// iki 16 metų – 50% nuolaida 

// 1/3 nuolaida vyresniems nei 60 metų

// Kintamieji turi būti aprašyti viršuje, kad būtų lengva keisti.

let formCinema = document.querySelector('#formCinema') as HTMLDivElement

const standardTicket = 6
const juniorTicket = standardTicket / 2
const seniorTicket = standardTicket / 3

const finalPriceWrap = document.createElement('div')
formCinema.after(finalPriceWrap)

const finalPrice = document.createElement('h1')
finalPriceWrap.append(finalPrice)

formCinema.addEventListener('submit', (event) => {
    event.preventDefault()

    const form = event.target

    if (!form.age.value){
        alert('Įveskite savo amžių')
        return
    }

    if (form.age.value < 16){
        finalPrice.textContent = `Bilieto kaina: ${juniorTicket.toFixed(2)} EUR.`
    } else if (form.age.value > 60) {
        finalPrice.textContent = `Bilieto kaina: ${seniorTicket.toFixed(2)} EUR.`
    } else {
        finalPrice.textContent = `Bilieto kaina: ${standardTicket.toFixed(2)} EUR.`
    }
    form.reset()
})