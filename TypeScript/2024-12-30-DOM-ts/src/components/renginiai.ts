import createElement from "./createElement.js";
import createRenginiaiItem from "./createRenginiaiItem.js";
import { renginiaiData } from "./DATAFILES.js";


export default function createRenginiai () {

    let renginiai = createElement('renginiai')

    let renginiaiTitle = document.createElement('h1')
    renginiaiTitle.textContent = 'Renginiai'
    renginiai.append(renginiaiTitle)
    
    renginiaiData.forEach(element => {
        let renginiaiItem = createRenginiaiItem(element)
        renginiai.append(renginiaiItem)
    })
    
    let renginiaiNaujienos = createElement('visos-naujienos')
    renginiai.append(renginiaiNaujienos)
    
    let renginiaiNaujienosTitle = document.createElement('h3')
    renginiaiNaujienosTitle.textContent = 'Daugiau'
    renginiaiNaujienos.append(renginiaiNaujienosTitle)
    
    let renginiaiNaujienosImage = document.createElement('img')
    renginiaiNaujienosImage.src = "images/arrow.svg"
    renginiaiNaujienos.append(renginiaiNaujienosImage)

    return renginiai
}