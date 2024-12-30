// Teksto elemento kūrimas
// lengvas

// Susikurkite projektą be jokių HTML elementų <body> viduje. 

// Sukurkite funkciją createTextElement, kuri sukuria ir grąžina naują DOM elementą p su pateiktu tekstu  ir pridėkite į <body>.



function createTextElement (text) {
    
    let newText = document.createElement('p')
    newText.textContent = text
    document.body.append(newText)
}

createTextElement('Hey Hello, How Are You?')
createTextElement('Hey Hello, Are You Ok?')


// Elemento atnaujinimas
// lengvas

// Sukurkite HTML faile <h1> žymą su id="name" ir tekstu "unknown". Naudodami JavaScript pakeiskite šio elemento tekstą į savo vardą .

document.querySelector('h1').textContent = 'Domas'


// Klaida DOM’e
// lengvas

// Nusikopijuokite apačioje esantį kodą ir su JavaScript pasikeiskite antrame paragrafe esančio <span> tekstą - iš 'red' į 'blue':


document.querySelector('.bluetext > span').textContent = 'blue'



// Sukurkite ordered list su trimis list item duota eilės tvarka: "BMW group", "VW group" ir "GE".

// <ol>
//   <li>BMW group</li>
//   <li>VW group</li>
//   <li>GE</li>
// </ol>
// Naudodami JavaScript apkeiskite pirmus du sąrašo elementus vietomis. Tačiau, kabliukas - negalima JavaScript įrašyti teksto (kitaip tariant hard-codinti). Pirma, Jūs turite pasiimt pirmo ir antro sąrašo elemento reikšmes ir jas išsisaugoti į kintamuosius.

let firstItem = document.querySelector('ol > li:nth-child(1)').textContent
let secondItem = document.querySelector('ol > li:nth-child(2)').textContent

document.querySelector('ol > li:nth-child(1)').textContent = secondItem
document.querySelector('ol > li:nth-child(2)').textContent = firstItem





// Sukurkite funkciją createList, kuri priima masyvą su tekstu ir sukuria DOM ul elementą su li vaikais, atitinkančiais masyvo elementus.

// Pavyzdys, kaip galime naudoti šią funkciją:


// document.body.appendChild(createList(["Pienas", "Duona", "Kiaušiniai"]));


function createList (items) {
    let ul = document.createElement('ul')
    items.forEach(item => {
        let li = document.createElement('li')
        li.textContent = item
        ul.append(li)
    })
    document.body.append(ul)
    return ul
}
createList(['Miltai', 'Citrina', 'Pienas', 2])



// Jūs turite HTML dokumentą su 3x3 Tic-Tac-Toe žaidimo dydžio lentelę. Kiekvienas lentelės langelis (<td>) turi būti pažymėtas arba "X", arba "O". Sukurkite JavaScript funkciją highlightWinner, kuri patikrina, ar yra trys vienodi ženklai iš eilės (eilutėje, stulpelyje arba įstrižainėje) ir, jei taip, nuspalvina atitinkamas lentelės eilutę, stulpelį, arba įstrižainę.

/* <table id="tictactoe">
            <tr>
                <td>X</td>
                <td>O</td>
                <td>O</td>
            </tr>
            <tr>
                <td>O</td>
                <td>X</td>
                <td>O</td>
            </tr>
            <tr>
                <td>X</td>
                <td>O</td>
                <td>X</td>
            </tr>
        </table> */


function highlightWinner () {
}


console.log(document.querySelector('tr:nth-child(1) > td:nth-child(1)').textContent)
console.log(document.querySelector('tr:nth-child(1) > td:nth-child(2)').textContent)
console.log(document.querySelector('tr:nth-child(1) > td:nth-child(3)').textContent)
console.log(document.querySelector('tr:nth-child(2) > td:nth-child(1)').textContent)
console.log(document.querySelector('tr:nth-child(2) > td:nth-child(2)').textContent)
console.log(document.querySelector('tr:nth-child(2) > td:nth-child(3)').textContent)
console.log(document.querySelector('tr:nth-child(3) > td:nth-child(1)').textContent)
console.log(document.querySelector('tr:nth-child(3) > td:nth-child(2)').textContent)
console.log(document.querySelector('tr:nth-child(3) > td:nth-child(3)').textContent)

