import createElement from "./createElement.js";
import createVaizdoIrasaiItem from "./createVaizdoIrasaiItem.js";
import { vaizdoIrasaiData } from "./DATAFILES.js";


export default function createVaizdoIrasai() {

    let vaizdoIrasai = createElement('vaizdo-irasai')

    let vaizdoIrasaiTitle = document.createElement('h1')
    vaizdoIrasaiTitle.textContent = 'Vaizdo įrašai'
    vaizdoIrasai.append(vaizdoIrasaiTitle)
    
    vaizdoIrasaiData.forEach(element => {
    let vaizdoIrasaiItem = createVaizdoIrasaiItem(element)
    vaizdoIrasai.append(vaizdoIrasaiItem)
    })


    return vaizdoIrasai
}