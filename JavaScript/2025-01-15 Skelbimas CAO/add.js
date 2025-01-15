const form = document.querySelector('#addPropertyForm')
const addButton = document.querySelector('#addPropertyButton')

const cities = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys']
cities.forEach(city => {
    const citiesInput = document.querySelector('#city')
    const cityOption = document.createElement('option')
    cityOption.value = city
    cityOption.textContent = city
    citiesInput.append(cityOption)
})

createLocalStorage()

form.addEventListener('submit', (event)=>{
    event.preventDefault()

    const image = event.target.elements.image.value
    const price = Number(event.target.elements.price.value)
    const description = event.target.elements.description.value
    const city = event.target.elements.city.value
    

    if (!image || !price || !description || !city){
        const errorParagraph = document.createElement('p')
        errorParagraph.classList.add('errorText')
        form.append(errorParagraph)
        errorParagraph.textContent = 'All fields must be filled!'
        
        return setTimeout(()=>{
            errorParagraph.textContent = ''
            errorParagraph.remove()
        }, 2000)
    }

    const newProperty = {
        image,
        price,
        description,
        city
    }
    addProperty(newProperty)
    removeLocalStorage ()
    form.reset()

    if (image && price && description && city){
        setTimeout(() => {
            window.location.href = 'http://127.0.0.1:5500/2025-01-15%20Skelbimas%20CAO/index.html'
        }, 1000);
    }
})

async function addProperty (newProperty) {
    try{
        const res = await fetch ('https://robust-safe-crafter.glitch.me/', {
        method : 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(newProperty)
    })
    const data = await res.json()
    } catch (error) {
        const errorParagraph = document.createElement('p')
        errorParagraph.textContent = error
        form.append(errorParagraph)
    }
}

function createLocalStorage () {

    form.addEventListener('input', (event) => {
        const input = event.target
        const value = input.value
        const name = input.name
        const type = input.type

        localStorage.setItem(name, value)
    })

    const image = document.querySelector('#image')
    const imageStorage = localStorage.getItem('image')
    if (imageStorage){
        image.value = imageStorage
    }

    const price = document.querySelector('#price')
    const priceStorage = localStorage.getItem('price')
    if (priceStorage){
        price.value = priceStorage
    }

    const city = document.querySelector('#city')
    const cityStorage = localStorage.getItem('city')
    if (cityStorage){
        city.value = cityStorage
    }

    const description = document.querySelector('#description')
    const descriptionStorage = localStorage.getItem('description')
    if (descriptionStorage){
        description.value = descriptionStorage
    }
}

function removeLocalStorage () {

    localStorage.removeItem('image')
    localStorage.removeItem('city')
    localStorage.removeItem('description')
    localStorage.removeItem('price')
}

