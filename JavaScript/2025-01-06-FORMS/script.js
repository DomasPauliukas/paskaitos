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

    //PADARIAU SU REQUIRED PRIE INPUT
    // if (!name || !surname || !age || !email){
    //     if(!name) {
    //         form['name-text'].classList.add('error')
    //     }
    //     if(!surname) {
    //         form['surname-text'].classList.add('error')
    //     }
    //     if(!age) {
    //         form.age.classList.add('error')
    //     }
    //     if(!email) {
    //         form.email.classList.add('error')
    //     }
    //     alert ('Name, Surname, Age and Email are must to fill')
    //     return
    // } else {
    //     form['name-text'].classList.remove('error')
    //     form['surname-text'].classList.remove('error')
    //     form.age.classList.remove('error')
    //     form.email.classList.remove('error')


    // }

    // const outputText = `Name: ${name}, Surname: ${surname}, Age: ${age}, Phone: ****, Email: ****, IT knowledge: ${ITScore}, TYPE group number: ${typeGroup}`


    const studentItem = document.createElement('div')
    studentItem.classList.add('student-item')

    const studentName = document.createElement('h3')
    studentName.textContent = `${name} ${surname} (${age})`
    studentItem.append(studentName)

    const studentPhone = document.createElement('p')
    studentPhone.textContent = 'Phone number: ****'
    studentItem.append(studentPhone)

    const studentEmail = document.createElement('p')
    studentEmail.textContent = 'Email address: ****'
    studentItem.append(studentEmail)

    const ITevaluation = document.createElement('p')
    ITevaluation.textContent = `IT knowledge: ${ITScore}`
    studentItem.append(ITevaluation)

    const groupNumber = document.createElement('p')
    groupNumber.textContent = `Group: TYPE ${typeGroup}gr.`
    studentItem.append(groupNumber)
    
    const ITLanguagesElements = form.querySelectorAll('[name="itLanguages"]:checked')
    
    const ITLanguageWrapper = document.createElement('div')
    studentItem.append(ITLanguageWrapper)

    const ITLanguageTitle = document.createElement('h3')
    ITLanguageTitle.textContent = ITLanguagesElements.length > 0 ? 'Interests: ' : 'No interests yet'
    ITLanguageWrapper.append(ITLanguageTitle)

    if (ITLanguagesElements.length > 0){
    const languagesList = document.createElement('ul')
    studentItem.append(languagesList)

    ITLanguagesElements.forEach((element) => {
    element.value
    let languageItem = document.createElement('li')
    languageItem.textContent = element.value
    languagesList.append(languageItem)
    })
    }

    studentsList.prepend(studentItem)
    form.reset()

    const createdElementAlert = document.createElement('span')
    createdElementAlert.classList.add('alert')
    createdElementAlert.textContent = `Student ${name} ${surname} was created succesfully!`
    studentsList.prepend(createdElementAlert)

    createdElementAlert.addEventListener('animationend', () => {
        createdElementAlert.style.display = "none"
    })


    const showButton = document.createElement('button')
    showButton.textContent = 'Show details'
    studentItem.append(showButton)

    const hideButton = document.createElement('button')
    hideButton.textContent = 'Hide details'
    studentItem.append(hideButton)

    showButton.addEventListener('click', () => {
        // showButton.textContent = 'Hide details'
        studentPhone.textContent = `Phone number: ${phone}`
        studentEmail.textContent = `Email address: ${email}`

    })

    hideButton.addEventListener('click', () => {
        studentPhone.textContent = 'Phone number: ****'
        studentEmail.textContent = 'Email address: ****'
    })

    const deleteStudent = document.createElement('button')
    deleteStudent.textContent = 'Delete Student Information'
    studentItem.append(deleteStudent)

    deleteStudent.addEventListener('click', () => {
        studentItem.style.display = 'none'

    const deletedElementAlert = document.createElement('span')
    deletedElementAlert.textContent = `Student's information is deleted`
    deletedElementAlert.classList.add('alert')
    deletedElementAlert.style.color = 'red'
    studentsList.prepend(deletedElementAlert)

    deletedElementAlert.addEventListener('animationend', () => {
        deletedElementAlert.style.display = "none"
    })
    })
})

let ITValue = document.querySelector('.ITFormValue')
ITValue.textContent = formList.querySelector('#IT-knowledge').value + ' balai'

formList.querySelector('#IT-knowledge').addEventListener('input', (event) => {
    ITValue.textContent = event.target.value + ' balai'
})
