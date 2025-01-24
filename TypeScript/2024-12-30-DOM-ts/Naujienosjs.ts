import createElement from "./components/createElement.js"
import createPageHeader from "./components/header.js"
import buttonsOnTop from "./components/buttonsOnTop.js"
import mainNewsWrapper from "./components/mainNewsWrapper.js"
import stickerNavigation from "./components/sticker.js"


function init () {

    let content = document.querySelector('#content') as HTMLDivElement
    
    let header = document.createElement('header')
    content.append(header)
    
    let container1 = createElement('container')
    header.append(container1)
    
    let pageHeader = createPageHeader()
    container1.append(pageHeader)
    
    let container2 = createElement('container')
    content.append(container2)
    
    let sectionButtonsOnTop = buttonsOnTop()
    container2.append(sectionButtonsOnTop)
    
    let mainWrapper = mainNewsWrapper()
    container2.append(mainWrapper)
    
    let stickerNavigator = stickerNavigation()
    content.append(stickerNavigator)
    
    let footer = document.createElement('footer')
    content.append(footer)
}

init ()