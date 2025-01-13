// 2025-01-09 paskaita


let formList = document.querySelector('#contacts')
const studentsList = document.querySelector('#students-list')

loadStudentDataLocalStorage ()
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

    const ITLanguagesElements = form.querySelectorAll('[name="itLanguages"]:checked')

    const programmingLanguages = [...ITLanguagesElements].map(languageElement => languageElement.value)

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
    
    const ITLanguageWrapper = document.createElement('div')
    studentItem.append(ITLanguageWrapper)

    const ITLanguageTitle = document.createElement('h3')
    ITLanguageTitle.textContent = programmingLanguages.length > 0 ? 'Interests: ' : 'No interests yet'
    ITLanguageWrapper.append(ITLanguageTitle)

    if (programmingLanguages.length > 0){
    const languagesList = document.createElement('ul')
    studentItem.append(languagesList)

    programmingLanguages.forEach((element) => {
    let languageItem = document.createElement('li')
    languageItem.textContent = element
    languagesList.append(languageItem)
    })
    }

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

    studentsList.prepend(studentItem)
    form.reset()


    
    const newStudentData = {
        id: Math.random(),
        name,
        surname,
        age,
        phone,
        email,
        ITScore,
        typeGroup,
        programmingLanguages,
    }

    // paimam is localstorage, jei yra kazkas tada isparsinam, jei nera, paliekam tuscia masyva. sita darom, kad neperrasytu naujas masyvas kas karta kai submit spaudziame, o liktu visi masyvai issaugoti localstorage.

    const studentDataStorage = localStorage.getItem('student-data')

    const studentData = studentDataStorage ? JSON.parse(studentDataStorage) : []
    studentData.push(newStudentData)

    localStorage.setItem('student-data', JSON.stringify(studentData))

    resetLocalStorage ()
    setITKnowledgeOutputHandler ()
    
})




function loadStudentDataLocalStorage () {
    const initialstudentData = JSON.parse(localStorage.getItem('student-data'))

    if (initialstudentData) {
        initialstudentData.map(studentData => {

    const {name, surname, age, phone, email, ITScore, typeGroup, programmingLanguages} = studentData

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
    
    const ITLanguageWrapper = document.createElement('div')
    studentItem.append(ITLanguageWrapper)

    const ITLanguageTitle = document.createElement('h3')
    ITLanguageTitle.textContent = programmingLanguages.length > 0 ? 'Interests: ' : 'No interests yet'
    ITLanguageWrapper.append(ITLanguageTitle)

    if (programmingLanguages.length > 0){
    const languagesList = document.createElement('ul')
    studentItem.append(languagesList)

    programmingLanguages.forEach((element) => {
    let languageItem = document.createElement('li')
    languageItem.textContent = element
    languagesList.append(languageItem)
    })
    }

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

    studentsList.prepend(studentItem)
    
        })
    }
}

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

    formList.addEventListener('input', (event) => {
        const input = event.target
        const value = input.value
        const name = input.name
        const type = input.type

        if (type === 'checkbox'){

        const languagesInputs = document.querySelectorAll(`[name="${name}"]:checked`)
        const languagesChecked = [...languagesInputs].map(language => language.value)
        localStorage.setItem(name, JSON.stringify(languagesChecked))
        } else {
            localStorage.setItem(name, value)
        }
    })

    
const name = document.querySelector('#name-text')

const nameStorage = localStorage.getItem('person-name')
if (nameStorage) {
name.value = nameStorage
}


const surname = document.querySelector('#surname-text')

const surnameStorage = localStorage.getItem('person-surname')
if (surnameStorage) {
    surname.value = surnameStorage
}


const age = document.querySelector('#age')

const ageStorage = localStorage.getItem('person-age')
if (ageStorage){
    age.value = ageStorage
}


const phone = document.querySelector('#phone')

const phoneStorage = localStorage.getItem('person-phone')
if (phoneStorage){
    phone.value = phoneStorage
}


const email = document.querySelector('#email')

const emailStorage = localStorage.getItem('person-email')
if (emailStorage){
    email.value = emailStorage
}


const ITKnowledge = document.querySelector('#IT-knowledge')

const ITKnowledgeStorage = localStorage.getItem('person-knowledge')
if (ITKnowledgeStorage) {
    ITKnowledge.value = ITKnowledgeStorage
}


const typeNum = document.querySelectorAll('[name="TYPE-number"]')

const typeNumStorage = localStorage.getItem('TYPE-number')
if (typeNumStorage) {
    typeNum.forEach(radio => {
        if (radio.value === typeNumStorage) {
            radio.checked = true;
        }
    })
}

const ITLanguagesStorage = JSON.parse(localStorage.getItem('itLanguages'))

if (ITLanguagesStorage){
ITLanguagesStorage.forEach(item => {
    const checkedLanguageInput = document.querySelector(`[name="itLanguages"][value="${item}"]`)
    checkedLanguageInput.checked = true
})
}



// ******** APIE CHECKBOX LOCALSTORAGE ***********


// // const testing = JSON.parse(localStorage.getItem('itLanguages')) || [];


// const ITLanguages = document.querySelectorAll('[name="itLanguages"]')
// ITLanguages.forEach((inputLanguage) => {
//     inputLanguage.addEventListener('input', ()=>{
//         const languagesNode = document.querySelectorAll('[name="itLanguages"]:checked')
//         const languagesChecked = [...languagesNode].map(language => language.value)
//         localStorage.setItem('languages', JSON.stringify(languagesChecked))
//     })
// })
// // languageNode - yra node listas, kuriame yra pazymeti inputai, bet per ji negalime leisti map ciklo. todel sukuriamas naujas masyvas - languagesChecked, i kuri yra isberiamas languagesNode ([...]) ir tada per naujai gauta masyva leidziame map cikla, kurio metu pasiimame kiekviena inputa ir gauname to inputo value.


// const checkedLanguagesStorage = JSON.parse(localStorage.getItem('languages'))
// if (checkedLanguagesStorage){
//     // ***
//     checkedLanguagesStorage.forEach(language => {
//         const checkedInput =  document.querySelector(`[name="itLanguages"][value="${language}"]`)
//         checkedInput.checked = true
//     })
// }

// // is storage susigraziname languages masyva, leidziame cikla, gauname viena language value, tada paselectiname checkbox inputa pagal name ir value, kur value nurodome ta kalba kuria gauname is ciklo. ir tada pazymime checkboxe ta kalba, nes ji yra issaugota locastorage.

// //Jei butu checkbox inputai uzcheckinti by default html'e, tada reiktu po parsinimo is local storage, patikrinti ar turime issaugotu reiksmiu (if (checkedLanguagesStorage)) ir paleisti cikla per inputus, paimti kiekviena inputa ir ji nucheckinti, -> ITLanguages.forEach(languages => languages.checked = false) ir toliau vykdome koda kur pazymeta ***

}

function resetLocalStorage () {
    localStorage.removeItem('person-name')
    localStorage.removeItem('person-surname')
    localStorage.removeItem('person-age')
    localStorage.removeItem('person-phone')
    localStorage.removeItem('person-email')
    localStorage.removeItem('person-knowledge')
    localStorage.removeItem('TYPE-number')
    localStorage.removeItem('itLanguages')
}