// Sukurkite modulį pavadinimu header.js. Šiame modulyje bus funkcija, kuri paims app kaip argumentą, tačiau nieko negrąžins. 

// Šios funkcijos tikslas – į app.innerHTML pridėti (t.y. +=) header kodą (pasirašykite standartinį HTML su inline CSS). 

// Šį modulį importuokite į pagrindinį failą ir paduokite app, kuris bus document.body. Puslapio viršuje turėtų atsivaizduoti headeris, kuris importuotas iš header.js.

export default function addHeaderToElement(element) {
    element.innerHTML += `
      <header style="background-color: #f5f5f5; padding: 20px;">
        <h1 style="text-align: center;">My Website Header</h1>
      </header>
    `
  }