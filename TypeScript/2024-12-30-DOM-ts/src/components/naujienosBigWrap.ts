import createElement from "./createElement.js";
import createNaujienosItems from "./createNaujienosItems.js";
import { naujienosBigData } from "./DATAFILES.js";


export default function newsBig () {
    let naujienosBig = createElement('naujienos-big')

    naujienosBigData.forEach(naujiena => {
        let naujienaItem = createNaujienosItems(naujiena)
        naujienosBig.append(naujienaItem)
    })

    return naujienosBig
}