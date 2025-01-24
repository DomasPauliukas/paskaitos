export default function createNavigationsList (textArray: string[]) {
    let fragment = document.createDocumentFragment()

    for (let i = 0 ; i < textArray.length ; i++){

        let headerLinks = document.createElement('a')
        headerLinks.href = '#'
        headerLinks.textContent = textArray[i]
        
        fragment.append(headerLinks)
    }
    return fragment
}