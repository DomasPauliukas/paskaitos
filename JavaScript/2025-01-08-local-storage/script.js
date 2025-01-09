// localStorage. setItem, getItem, removeItem

localStorage.setItem('test', 'sveikas')
localStorage.setItem('test2', 'labas')

console.log(localStorage.getItem('test'))

const inputText = document.querySelector('#name-text')

inputText.addEventListener('input', () => {
    localStorage.setItem('input', inputText.value)
})

const storageText = localStorage.getItem('input')
console.log(storageText)
// Patikrinam ar yra kazkokia reiksme local storage. nes jei norime prideti value i html is karto, ji nesuveiks, nes storageText is pradziu = null. todel si funkcija patikrina, jei null, suveikia value reiksme, nurodyta html'e prie inputo.
if(storageText){
    inputText.value = storageText
}
const formTest = document.querySelector('form')

formTest.addEventListener('submit', (event) => {
    event.preventDefault()

    const outputText = document.createElement('p')
    outputText.textContent = inputText.value
    formTest.after(outputText)

    formTest.reset()
    localStorage.removeItem('input')

})

// localStorage = duomenys yra tik string tipo.

const number = 6
console.log(number, typeof number) // number tipas

localStorage.setItem('num', number)
const localNumber = localStorage.getItem('num')
console.log(localNumber, typeof localNumber) // grizta string tipas

// Jei taip paduodame Array, Objekta -> localStorage grazina viena bendra string, su kuriuo nebegalime dirbti toliau. todel yra naudojamas JSON.

// JSON //

const testObject = {
    name: 'Domas',
    age: 29
}

// JSON.strigify()  - padaro duomenis i string formata (JSON formatas), bet issaugo ju struktura.

const jsonObject = JSON.stringify(testObject) // parenkame obj kuri norime stringifyint

localStorage.setItem('obj', jsonObject)

const localObj = localStorage.getItem('obj')
console.log(localObj)

//JSON.parse()  - padaro JSON formata i iprasta formata.

const parseObj = JSON.parse(localObj) // parenkame JSON obj, kuri grazinti i iprasta obj.
console.log(parseObj)

// tas pats parasytas, tik nekuriant kintamuju.ww

localStorage.setItem('newObj', JSON.stringify(testObject))
const objBack = JSON.parse(localStorage.getItem('newObj'))

console.log(objBack)
