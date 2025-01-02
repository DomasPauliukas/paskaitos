import createElement from "./createElement.js";
import createNaujienosItems from "./createNaujienosItems.js";
import { naujienosSmallData } from "./DATAFILES.js";


export default function newsSmall () {
    let naujienosSmall = createElement('naujienos-small')

    naujienosSmallData.forEach(naujiena => {
        let naujienaItem = createNaujienosItems(naujiena)
        naujienosSmall.append(naujienaItem)
        })

    return naujienosSmall
}