export default function createElement (className?: string, text?: string, elementType: string = 'div') {
    let element = document.createElement(elementType)

    if (className){
    element.classList.add(className)
    }
    if (text){
    element.textContent = text
    }
    return element
}