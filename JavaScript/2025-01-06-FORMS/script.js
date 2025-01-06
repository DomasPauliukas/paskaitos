let formList = document.querySelector('#contacts')

const studentsList = document.querySelector('#students-list')

formList.addEventListener('submit', (event) => {
    event.preventDefault() //kad nepersikrautu puslapis
   
    const form = event.target

    const name = form['name-text'].value
    const surname = form['surname-text'].value
    const age = form.age.value
    const phone = form.phone.value
    const email = form.email.value
    const ITScore = form['IT-knowledge'].value
    const typeGroup = form['TYPE-number'].value

    const outputText = `Name: ${name}, Surname: ${surname}, Age: ${age}, Phone: ${phone}, Email: ${email}, IT knowledge: ${ITScore}, TYPE group number: ${typeGroup}`

    const studentItem = document.createElement('div')
    studentItem.classList.add('student-item')
    studentsList.prepend(studentItem)

    const studentInfo = document.createElement('p')
    studentInfo.textContent = outputText
    studentItem.append(studentInfo)

    const ITLanguagesElements = form.querySelectorAll('[name="itLanguages"]:checked')

    const languagesList = document.createElement('ul')
    languagesList.textContent = 'Dominančios kalbos: '
    studentInfo.append(languagesList)

    ITLanguagesElements.forEach((element) => {
    element.value
    let languageItem = document.createElement('li')
    languageItem.textContent = element.value
    languagesList.append(languageItem)
    })

})

let ITValue = document.querySelector('.ITFormValue')
ITValue.textContent = formList.querySelector('#IT-knowledge').value + ' balai'

formList.querySelector('#IT-knowledge').addEventListener('input', (event) => {
    ITValue.textContent = event.target.value + ' balai'
})
