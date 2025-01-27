// cia Apendinau po kiekvienu. bet galima kai sukuri pirma diva, prideti prie jo visus vienu kodu :
// mainwrapper.appent(
// pvz.1,
// pvz.2,
// pvz.3)   ir t.t. ir cia galima keitineti eiles tvarka, kada po kurio elemento append kad butu.

let initialValue = 5
let numberText = document.createElement('h3') as HTMLHeadingElement
numberText.textContent = initialValue.toString()
document.querySelector('#numbers')!.append(numberText)

let buttonPlus = createButton('+')
numberText.after(buttonPlus)

buttonPlus.addEventListener('click', () => {
    let plusOneValue = Number(numberText.textContent)
    plusOneValue++
    numberText.textContent = plusOneValue.toString()
    updateButtonsState()
})

let buttonMinus = createButton('-')
numberText.after(buttonMinus)

buttonMinus.addEventListener('click', () => {
    let minusOneValue = Number(numberText.textContent)
    minusOneValue--
    numberText.textContent = minusOneValue.toString()
    updateButtonsState()
})


let button2Plus = createButton('+2')
buttonPlus.after(button2Plus)

button2Plus.addEventListener('click', () => {
    let newNumber = Number(numberText.textContent)
    newNumber += 2
    numberText.textContent = newNumber.toString()
    updateButtonsState()
})


let button2Minus = createButton('-2')
buttonMinus.before(button2Minus)

button2Minus.addEventListener('click', () => {
    let newNumber = Number(numberText.textContent)
    newNumber -= 2
    numberText.textContent = newNumber.toString()
    updateButtonsState()
})


let buttonPlus5 = createButton('+5')
button2Plus.after(buttonPlus5)

buttonPlus5.addEventListener('click', () => {
    let newNumber = Number(numberText.textContent)
    newNumber += 5
    numberText.textContent = newNumber.toString()
    updateButtonsState()
    
})


let buttonMinus5 = createButton('-5')
button2Minus.before(buttonMinus5)

buttonMinus5.addEventListener('click', () => {
    let newNumber = Number(numberText.textContent)
    newNumber -= 5
    numberText.textContent = newNumber.toString()
    updateButtonsState()

})


let resetButton = createButton('Reset')
buttonPlus5.after(resetButton)
resetButton.addEventListener('click', () => {
    
    numberText.textContent = initialValue.toString()
    updateButtonsState()
})



let inputTask = document.createElement('input')
inputTask.type = 'number'
inputTask.min = '1'
inputTask.max = '10'
numberText.before(inputTask)

inputTask.addEventListener('input', () => {
    numberText.textContent = inputTask.value
    updateButtonsState()
})


let balai = document.createElement('h4')
balai.textContent = 'Balai:'
document.querySelector('#numbers')!.after(balai)


let task15Ul = document.createElement('ul')
balai.after(task15Ul)

let button15 = document.createElement('button')
button15.textContent = 'Įrašyti balą'
balai.before(button15)




let liItems: number[] = []

button15.addEventListener('click', () => {
    let task15Li = document.createElement('li')
    task15Li.textContent = numberText.textContent
    task15Li.style.color = numberText.style.color
    
    let buttonX = document.createElement('button')
    buttonX.textContent = 'x'
    liItems.push(Number(numberText.textContent))
    task15Li.append(buttonX)
    
    task15Ul.append(task15Li)
    
    buttonX.addEventListener('click', () => {
        task15Li.remove()

    })
})



let removeAll = document.createElement('button')
removeAll.textContent = 'Ištrinti visus balus'
task15Ul.after(removeAll)

removeAll.addEventListener('click', () => {
    let allElements = task15Ul.querySelectorAll('li')
    allElements.forEach(li => li.remove())
})


let task18DIV = document.createElement('div')
balai.before(task18DIV)

let vidurkis = document.createElement('p')
vidurkis.textContent = 'Vidurkis: '
task18DIV.append(vidurkis)



let mediana = document.createElement('p')
mediana.textContent = 'Mediana: '
task18DIV.append(mediana)

let BigNum = document.createElement('p')
BigNum.textContent = 'Didziausias skaicius: '
task18DIV.append(BigNum)

let SmallNum = document.createElement('p')
SmallNum.textContent = 'Maziausias skaicius: '
task18DIV.append(SmallNum)





function updateButtonsState() {

    inputTask.value = numberText.textContent || ''

    let currentValue = Number(numberText.textContent);
    
    if (currentValue >= 5) {
        numberText.style.color = 'green';
    } else {
        numberText.style.color = 'red';
    }
    
    
    if (currentValue > 9) {
        buttonPlus.setAttribute('disabled', "true");
    } else {
        buttonPlus.removeAttribute('disabled');
    }
    
    if (currentValue <= 1) {
        buttonMinus.setAttribute('disabled', "true");
    } else {
        buttonMinus.removeAttribute('disabled');
    }
    
    if (currentValue >= 9) {
        button2Plus.setAttribute('disabled', "true");
    } else {
        button2Plus.removeAttribute('disabled');
    }
    
    if (currentValue <= 2) {
        button2Minus.setAttribute('disabled', "true");
    } else {
        button2Minus.removeAttribute('disabled');
    }
    if (currentValue > 5){
        buttonPlus5.setAttribute('disabled', "true")
    } else {
        buttonPlus5.removeAttribute('disabled')
    }
    if (currentValue <= 5){
        buttonMinus5.setAttribute('disabled', "true")
    } else {
        buttonMinus5.removeAttribute('disabled')
    }
}
updateButtonsState()

function createButton (text: string, type = 'button') {
    let element = document.createElement(type)
    element.textContent = text
    
    return element
}

function getAverageNumber () {
    if (liItems.length === 0){
        return 0
    }
    let totalSum = 0
    for(let i = 0 ; i < liItems.length ; i++){
        totalSum += liItems[i]
    }
    return totalSum / liItems.length
}