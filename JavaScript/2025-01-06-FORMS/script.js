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

    
    const showButton = document.createElement('button')
    showButton.textContent = 'Show details'
    studentItem.append(showButton)
    
    showButton.addEventListener('click', () => {
        if (studentPhone.textContent === `Phone number: ${phone}` && studentEmail.textContent === `Email address: ${email}`) {
            showButton.textContent = 'Show details'
            studentPhone.textContent = `Phone number: ****`
            studentEmail.textContent = `Email address: ****`
        } else {
            showButton.textContent = 'Hide details'
            studentPhone.textContent = `Phone number: ${phone}`
            studentEmail.textContent = `Email address: ${email}`
        }
    })
    const createOutputText = `Student ${name} ${surname} was created succesfully!`
    const createdElementAlert = alertText(createOutputText, 'green') 

    const deleteStudent = document.createElement('button')
    deleteStudent.textContent = 'Delete Student Information'
    studentItem.append(deleteStudent)
    
    deleteStudent.addEventListener('click', () => {
        studentItem.style.display = 'none'
        
    const deleteOutputText = `Student's information is deleted`
    const deletedElementAlert = alertText(deleteOutputText, 'red') 
    })
})
function alertText (text, colour) {
    let element = document.createElement('div')
    element.classList.add('alert')
    element.textContent = text
    element.style.color = colour
    studentsList.prepend(element)

    element.addEventListener('animationed', () => {
        element.style.display = "none"
    })
}

let ITValue = document.querySelector('.ITFormValue')
ITValue.textContent = formList.querySelector('#IT-knowledge').value + ' balai'

formList.querySelector('#IT-knowledge').addEventListener('input', (event) => {
    ITValue.textContent = event.target.value + ' balai'
})