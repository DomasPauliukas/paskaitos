const form = document.querySelector('#form')
const jokeParagraph = document.createElement('p')
form.append(jokeParagraph)

const categoryWrap = document.querySelector('#category')

const categoryButton = document.querySelector('#categoryButton')

const randomJoke = document.createElement('button')
randomJoke.type = 'submit'
randomJoke.textContent = 'Get A Random Joke'
form.before(randomJoke)



randomJoke.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(joke => {
        jokeParagraph.textContent = joke.value
    })
})

fetch('https://api.chucknorris.io/jokes/categories')
.then(res => res.json())
.then(joke => {
    const jokeCategoryArr = joke

    jokeCategoryArr.forEach(category => {
        const categoryOption = document.createElement('option')
        categoryOption.textContent = category
        categoryOption.value = category
        categoryWrap.append(categoryOption)
    })

        categoryButton.removeAttribute('disabled')
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const category = event.target.elements.category.value

    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(res => res.json())
        .then(joke => {
            jokeParagraph.textContent = joke.value
        })


})