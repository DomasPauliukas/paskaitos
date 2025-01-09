
let formList = document.querySelector('#contacts')
const studentsList = document.querySelector('#students-list')

createLocalStorate ()
setITKnowledgeOutputHandler ()




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


    const studentData = {
        name,
        surname,
        age,
        phone,
        email,
        ITScore,
        typeGroup,
    }

    const studentsStorage = JSON.parse(localStorage.getItem('students')) || [];
    studentsStorage.push(studentData);
    localStorage.setItem('students', JSON.stringify(studentsStorage));
    
    // function createStudentList () {
    //     const element = document.createElement('div')
    //     element.classList.add('student-item')
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

    resetLocalStorage ()
    setITKnowledgeOutputHandler ()
    
    
    const showButton = document.createElement('button')
    showButton.textContent = 'Show details'
    studentItem.append(showButton)

    let privateInfoHidden = true
    
    showButton.addEventListener('click', () => {

        if (privateInfoHidden){
            showButton.textContent = 'Hide details'
            studentPhone.textContent = `Phone number: ${phone}`
            studentEmail.textContent = `Email address: ${email}`
        } else {
            showButton.textContent = 'Show details'
            studentPhone.textContent = `Phone number: ****`
            studentEmail.textContent = `Email address: ****`
        }
        privateInfoHidden = !privateInfoHidden
    })


    const createOutputText = `Student ${name} ${surname} was created succesfully!`
    alertText(createOutputText, 'green') 

    const deleteStudent = document.createElement('button')
    deleteStudent.textContent = 'Delete Student Information'
    studentItem.append(deleteStudent)
    
    deleteStudent.addEventListener('click', () => {
        const deleteOutputText = `Student's information is deleted`
        alertText(deleteOutputText, 'red') 

        studentItem.remove()
    })
})




function alertText (text, colour) {
    let element = document.createElement('div')
    element.textContent = text
    element.style.color = colour
    studentsList.prepend(element)

    setTimeout(()=>{
        element.textContent = ''
        element.remove()
    }, 5000)
}

function setITKnowledgeOutputHandler () {
    const ITValueInput = document.querySelector('#IT-knowledge')
    const ITValueOutput = document.querySelector('.ITFormValue')

    ITValueOutput.textContent = ITValueInput.value

    ITValueInput.addEventListener('input', () => {
        ITValueOutput.textContent = ITValueInput.value
    })
}

function createLocalStorate () {
    
const name = document.querySelector('#name-text')
name.addEventListener('input', ()=>{
    localStorage.setItem('name', name.value)    
})
const nameStorage = localStorage.getItem('name')
if (nameStorage) {
name.value = nameStorage
}


const surname = document.querySelector('#surname-text')
surname.addEventListener('input', ()=>{
    localStorage.setItem('surname', surname.value)
})
const surnameStorage = localStorage.getItem('surname')
if (surnameStorage) {
    surname.value = surnameStorage
}


const age = document.querySelector('#age')
age.addEventListener('input', ()=> {
    localStorage.setItem('age', age.value)
})
const ageStorage = localStorage.getItem('age')
if (ageStorage){
    age.value = ageStorage
}


const phone = document.querySelector('#phone')
phone.addEventListener('input', ()=>{
    localStorage.setItem('phone', phone.value)
})
const phoneStorage = localStorage.getItem('phone')
if (phoneStorage){
    phone.value = phoneStorage
}


const email = document.querySelector('#email')
email.addEventListener('input', ()=>{
    localStorage.setItem('email', email.value)
})
const emailStorage = localStorage.getItem('email')
if (emailStorage){
    email.value = emailStorage
}


const ITKnowledge = document.querySelector('#IT-knowledge')
ITKnowledge.addEventListener('input', ()=>{
    localStorage.setItem('ITKnowledge', ITKnowledge.value)
})
const ITKnowledgeStorage = localStorage.getItem('ITKnowledge')
if (ITKnowledgeStorage) {
    ITKnowledge.value = ITKnowledgeStorage
}


const typeNum = document.querySelectorAll('[name="TYPE-number"]')
typeNum.forEach((radio) => {
    radio.addEventListener('input', ()=> {
        localStorage.setItem('typeNum', radio.value)
    })
})
const typeNumStorage = localStorage.getItem('typeNum')
if (typeNumStorage) {
    typeNum.forEach(radio => {
        if (radio.value === typeNumStorage) {
            radio.checked = true;
        }
    })
}


// const testing = JSON.parse(localStorage.getItem('itLanguages')) || [];


const ITLanguages = document.querySelectorAll('[name="itLanguages"]')
ITLanguages.forEach((inputLanguage) => {
    inputLanguage.addEventListener('input', ()=>{
        const languagesNode = document.querySelectorAll('[name="itLanguages"]:checked')
        const languagesChecked = [...languagesNode].map(language => language.value)
        localStorage.setItem('languages', JSON.stringify(languagesChecked))
    })
})
// languageNode - yra node listas, kuriame yra pazymeti inputai, bet per ji negalime leisti map ciklo. todel sukuriamas naujas masyvas - languagesChecked, i kuri yra isberiamas languagesNode ([...]) ir tada per naujai gauta masyva leidziame map cikla, kurio metu pasiimame kiekviena inputa ir gauname to inputo value.


const checkedLanguagesStorage = JSON.parse(localStorage.getItem('languages'))
if (checkedLanguagesStorage){
    // ***
    checkedLanguagesStorage.forEach(language => {
        const checkedInput =  document.querySelector(`[name="itLanguages"][value="${language}"]`)
        checkedInput.checked = true
    })
}

// is storage susigraziname languages masyva, leidziame cikla, gauname viena language value, tada paselectiname checkbox inputa pagal name ir value, kur value nurodome ta kalba kuria gauname is ciklo. ir tada pazymime checkboxe ta kalba, nes ji yra issaugota locastorage.

//Jei butu checkbox inputai uzcheckinti by default html'e, tada reiktu po parsinimo is local storage, patikrinti ar turime issaugotu reiksmiu (if (checkedLanguagesStorage)) ir paleisti cikla per inputus, paimti kiekviena inputa ir ji nucheckinti, -> ITLanguages.forEach(languages => languages.checked = false) ir toliau vykdome koda kur pazymeta ***

}

function resetLocalStorage () {
    localStorage.removeItem('name')
    localStorage.removeItem('surname')
    localStorage.removeItem('age')
    localStorage.removeItem('phone')
    localStorage.removeItem('email')
    localStorage.removeItem('ITKnowledge')
    localStorage.removeItem('typeNum')
    localStorage.removeItem('languages')
}
