import createElement from "./createElement.js";
import createNavigationsList from "./createNavigationList.js";

export default function createPageHeader () {
    let pageHeader = createElement('header')

    let headerLogo = createElement('header-logo')
    pageHeader.append(headerLogo)
    
    let headerLogoImage = document.createElement('img')
    headerLogoImage.src = "images/codeacademy-black.svg"
    headerLogo.append(headerLogoImage)
    
    
    
    let headerNav = createElement('header-nav')
    pageHeader.append(headerNav)
    
    let headerNavLinks = document.createElement('nav')
    headerNav.append(headerNavLinks)
    
    
    headerNavLinks.append(createNavigationsList(['Studentams', 'Karjeros centras', 'Programos', 'IT testas', 'Apie Mus', 'Verslui', 'Kontaktai', 'EN']))
    
    let specialHeaderLink = document.createElement('a')
    specialHeaderLink.classList.add('button')
    specialHeaderLink.href = '#'
    specialHeaderLink.textContent = 'Skambinti'
    headerNavLinks.append(specialHeaderLink)

    return pageHeader
}