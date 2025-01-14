// Įsivaizduokite, kad organizuojate vestuves. Pasiimkite informaciją iš https://party-wedding.glitch.me/v1/wedding ir atvaizduokite lentelėje: name, plusOne ir attending. Parašykite taip, kad plusOne ir attending būtų ne true/false, bet + arba -.
const table = document.querySelector('#tableForm')
const tableBody = document.querySelector('#tableBody')


fetch(`https://party-wedding.glitch.me/v1/wedding`)
    .then(res => res.json())
    .then(data => {

        data.forEach(object => {
            console.log(object)
            const name = object.name
            const plusOne = object.plusOne
            const attend = object.attending

            const singleLine = document.createElement('tr')
            tableBody.append(singleLine)

            const firstTD = document.createElement('td')
            firstTD.classList.add('first')
            firstTD.textContent = name
            singleLine.append(firstTD)
            const secondTD = document.createElement('td')
            secondTD.classList.add('second')
            if (plusOne){
                secondTD.classList.add('green')
                secondTD.textContent = '+'
            } else {
                secondTD.classList.add('red')
                secondTD.textContent = '-'
            }
            singleLine.append(secondTD)
            const thirdTD = document.createElement('td')
            thirdTD.classList.add('second')
            if (attend) {
                thirdTD.classList.add('green')
                thirdTD.textContent = '+'
            } else {
                thirdTD.classList.add('red')
                thirdTD.textContent = '-'
            }
            singleLine.append(thirdTD)
        })
    })
