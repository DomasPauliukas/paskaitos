const propertyWrap = document.querySelector('#propertyWrapper')

const klaipedaButton = document.querySelector('#klaipėdaButton')
const kaunasButton = document.querySelector('#kaunasButton')
const vilniusButton = document.querySelector('#vilniusButton')


getProperty()


async function getProperty() {
    try{
        const res = await fetch(`https://robust-safe-crafter.glitch.me/`)
        const properties = await res.json()
        properties.forEach(property => {
            const city = property.city
            const price = property.price
            const description = property.description
            const image = property.image

        createPropertyItem (city, price, description, image)

        })
    } catch (error) {
        console.log(error)
    }
}

function createPropertyItem (city, price, description, image) {
    const propertyItem = document.createElement('div')
        propertyItem.classList.add('item')
        propertyWrap.append(propertyItem)

        const imgWrap = document.createElement('div')
        imgWrap.classList.add('imgWrap')
        propertyItem.append(imgWrap)

        const propertyImage = document.createElement('img')
        propertyImage.classList.add('propertyImage')
        propertyImage.src = image
        imgWrap.append(propertyImage)

        const infoWrap = document.createElement('div')
        infoWrap.classList.add('infoWrap')
        propertyItem.append(infoWrap)

        const propertyPrice = document.createElement('span')
        propertyPrice.classList.add('propertyPrice')
        propertyPrice.textContent = `€${price.toLocaleString('en-US')}`
        infoWrap.append(propertyPrice)

        const propertyCity = document.createElement('span')
        propertyCity.classList.add('propertyCity')
        propertyCity.textContent = city
        infoWrap.append(propertyCity)

        const descriptionWrap = document.createElement('div')
        descriptionWrap.classList.add('descriptionWrap')
        propertyItem.append(descriptionWrap)

        const propertyDescription = document.createElement('p')
        propertyDescription.classList.add('propertyDescription')
        propertyDescription.textContent = description
        descriptionWrap.append(propertyDescription)
}