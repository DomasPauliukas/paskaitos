// Pridėkite dar vieną modulį, pavadinimu cars.js. Šis modulis turės funkciją, kuri taip pat pasiims app ir nieko negrąžins (t.y. turinį pridės prie app.innerHTML). 

// Tačiau šį kartą – funkcija viduje turės array ["BMW", "VW", "AUDI", "MB"]. Į innerHTML reikia pridėti nerikiuotą sąrašą (<ul>), kuriame automobilio markė bus įrašyta sąrašo elemento viduje (<li>).

export default function createCarsList(element) {

    const carsList = ["BMW", "VW", "AUDI", "MB"]
    const carBrands = carsList.map(brand => `<li>${brand}</li>`)
  
    const brand = carBrands.join('')
  
    const brandListHtml = `<ul>${brand}<ul/>`
  
    element.innerHTML += brandListHtml
  }