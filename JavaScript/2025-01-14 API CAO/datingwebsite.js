// Įsivazduokite, kad dirbate prie pažinčių portalo produkto – jūsų užduotis greitai sukurti puslapį, kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų puslapyje.

// Svarbu atvaizduoti:

// Nuotrauką
// Vardą 
// Amžių
// El. pašto adresą

const personCard = document.querySelector('#person-card')
const image = document.querySelector('#person-image')
const fullName = document.querySelector('#person-name')
const personAge = document.querySelector('#person-age')
const emailAddress = document.querySelector('#person-email')
const button = document.querySelector('#showPerson')
console.log(button)

getAPersonCard ()

button.addEventListener('click', () => {
    getAPersonCard ()
})


function getAPersonCard () {
    fetch(`https://randomuser.me/api/`)
        .then(res => res.json())
        .then(data => {
            const name = `${data.results[0].name.first} ${data.results[0].name.last}`
            const age = data.results[0].dob.age
            const email = data.results[0].email
            const imageSrc = data.results[0].picture.large
    
            image.src = imageSrc
            image.alt = name
    
            fullName.textContent = name
            personAge.textContent = age
            emailAddress.textContent = email
        })
}
