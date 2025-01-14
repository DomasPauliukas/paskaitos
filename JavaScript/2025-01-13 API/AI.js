// DIRBTINIO INTELEKTO API UŽDUOTIS:
// 1. Sukurti formą, kurioje galima įrašyti asmens vardą.
// 2. Formos submit metu, pagal įrašytą vardą, ekrane atvaizduoti tikėtiną asmens lyti, amžių ir tautybę. Naudoti šiuos API:
// Amžiui - https://agify.io/
// Tautybei - https://nationalize.io/
// Lyčiai - https://genderize.io/

const nameForm = document.querySelector('#name-form')
const outputParagraph = document.querySelector('#name-output')

nameForm.addEventListener('submit', async(event) => {
    event.preventDefault()

    const name = event.target.elements.name.value

    if (!name) {
        outputParagraph.textContent = 'Name must be entered'
        return
    }

    const age = await getAge(name)
    const country = await getCountry(name)
    const gender = await getGender(name)

    outputParagraph.textContent = `${name} is ${age} years old ${gender}, from ${country}.`
})

async function getAge (name) {
    try{
        const res = await fetch(`https://api.agify.io?name=${name}`)
        const data = await res.json()
        const age = data.age
        return age
    } catch (err){
       return outputParagraph.textContent = 'Something went wrong...'
    }
}

async function getCountry(name) {
    try{
        const res = await fetch(`https://api.nationalize.io/?name=${name}`)
        const data = await res.json()
        const country = data.country[0]['country_id']
        return country
    } catch {
        return outputParagraph.textContent = 'Something went wrong...'
    }
}

async function getGender(name) {
    try{
        const res = await fetch(`https://api.genderize.io?name=${name}`)
        const data = await res.json()
        const gender = data.gender
        return gender
    } catch {
        return outputParagraph.textContent = 'Something went wrong...'
    }
}

// ******** FETCH NESTINIMAS *********** 

// nameForm.addEventListener('submit', (event) => {
//     event.preventDefault()

//     const name = event.target.elements.name.value

//     fetch(`https://api.agify.io?name=${name}`)
//         .then(res => res.json())
//         .then(data => {
//             const age = data.age

//             fetch(`https://api.nationalize.io/?name=${name}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     const country = data.country[0]['country_id']

//                     fetch(`https://api.genderize.io?name=${name}`)
//                         .then(res => res.json())
//                         .then(data => {
//                             const gender = data.gender

//                             outputParagraph.textContent = `${name} is ${age} years old ${gender}, from ${country}.`
//                         })
//                 })
//         })
// })