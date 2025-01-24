import createElement from "./createElement.js";
import createNavigationsList from "./createNavigationList.js";

export default function buttonsOnTop () {
    let sectionButtonsOnTop = createElement('buttons-on-top')

    sectionButtonsOnTop.append(createNavigationsList(['Apie Mus', 'Naujienos', 'Karjera', 'ES parama']))

    return sectionButtonsOnTop
}