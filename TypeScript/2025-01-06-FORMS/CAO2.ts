// Šauktiniai
// vidutinis

// Kai kuriose šalyse reikia atlikti privalomąją karinę tarnybą, jei esate tarp 18 ir 30 metų, ir, jei neturite kriminalinio įrašo. Sukurkite programą, kuri su input + radio button pasakytų ar tam žmogui gali reikėti eiti į atlikti tarnybą ar ne (h1 elemente). 

// Užuomina

// Pasirinkite su querySelector tik pažymėtą radio input (yra toks CSS selektorius), ir perskaitykite jo reikšmę.

const formArmy = document.querySelector('#formArmy') as HTMLFormElement
const criminalInput = document.querySelector('[name="person-criminal"]') as HTMLInputElement

const formTitle = document.createElement('h1')
formTitle.textContent = 'Pasitikrinkite ar galite būti šauktinių sąrašę'
formArmy.before(formTitle)

const resultTitle = document.createElement('h2')
formArmy.after(resultTitle)


formArmy.addEventListener('submit', (event)=> {
    event.preventDefault()


    const isCriminal = criminalInput.checked


    if (age.value >= 18 && age.value <= 30 && isCriminal){
        resultTitle.textContent = 'Pasitikrinkite! Jūs galite būti šauktinių sąraše.'
    } else {
        resultTitle.textContent = 'Jūs neatitinkate kriterijų, kad galėtumėte būti šautkinių sąraše.'
    }
formArmy.reset()
})