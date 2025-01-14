const form = document.querySelector('#dogs-form')
const breedSection = document.querySelector('#breed')
const imageWrapper = document.querySelector('#dogpic')



fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
        const breedObj = data.message

        for (const mainBreed in breedObj){
            const subBreeds = breedObj[mainBreed]

            
            if (subBreeds.length > 0) {
                subBreeds.forEach(subBreed => {
                    const subBreedValue = document.createElement('option')
                    subBreedValue.textContent = `${mainBreed} (${subBreed})`
                    subBreedValue.value = `${mainBreed}/${subBreed}`
                    breedSection.append(subBreedValue)
                })
            } else {
                const breedValue = document.createElement('option')
                breedValue.value = mainBreed
                breedValue.textContent = mainBreed
                breedSection.append(breedValue)
            }
        }
    })

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const breed = event.target.elements.breed.value
    console.log(breed)

    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(res => res.json())
        .then(data => {
            const imageSrc = data.message
            imageWrapper.src = imageSrc
            imageWrapper.alt = breed
        })
})