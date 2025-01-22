// Sukurkite modulį (t.y. failą – multi.js), kuriame būtų viena eksportuota (default) funkcija – multiplikacija. Ji priims du skaičius kaip parametrus ir grąžins šiuos skaičius jau sudaugintus. Pagrindiniame JS faile (script.js) importuokite ir panaudokite šį modulį.

import createCarsList from "./tasks/cars.js"
import addHeaderToElement from "./tasks/header.js"
import multiplication from "./tasks/multi.js"

const num1 = 2
const num2 = 5

let answer = multiplication(num1,num2)

console.log(answer)



// Sukurkite modulį pavadinimu header.js. Šiame modulyje bus funkcija, kuri paims app kaip argumentą, tačiau nieko negrąžins. 

// Šios funkcijos tikslas – į app.innerHTML pridėti (t.y. +=) header kodą (pasirašykite standartinį HTML su inline CSS). 

// Šį modulį importuokite į pagrindinį failą ir paduokite app, kuris bus document.body. Puslapio viršuje turėtų atsivaizduoti headeris, kuris importuotas iš header.js.

addHeaderToElement(document.body)


// Pridėkite dar vieną modulį, pavadinimu cars.js. Šis modulis turės funkciją, kuri taip pat pasiims app ir nieko negrąžins (t.y. turinį pridės prie app.innerHTML). 

// Tačiau šį kartą – funkcija viduje turės array ["BMW", "VW", "AUDI", "MB"]. Į innerHTML reikia pridėti nerikiuotą sąrašą (<ul>), kuriame automobilio markė bus įrašyta sąrašo elemento viduje (<li>).

createCarsList(document.body)