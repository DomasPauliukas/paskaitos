import createElement from "./createElement.js"


export default function createRenginiaiItem (data) {
    
    let {imageSrc, day, month, address, title} = data
    
    let item = createElement('item')
    
    if (imageSrc) {
    
        let renginiaiPhotoWrapper = createElement('renginiai-photo')
        item.append(renginiaiPhotoWrapper)
   
        let renginiaiPhoto = document.createElement('img')
        renginiaiPhoto.src = imageSrc
        renginiaiPhotoWrapper.append(renginiaiPhoto)
    }

    let renginiaiDateWrapper = createElement('renginiai-data')
    item.append(renginiaiDateWrapper)
    
    let renginiaiData = document.createElement('div')
    renginiaiData.classList.add('data-number')
    renginiaiData.textContent = day
    renginiaiDateWrapper.append(renginiaiData)
    
    let dataPink = document.createElement('div')
    dataPink.classList.add('data-pink')
    dataPink.textContent = month
    renginiaiDateWrapper.append(dataPink)
    
    let renginiaiAdressWrapper = createElement('renginiai-adresas')
    item.append(renginiaiAdressWrapper)
    
    let renginiaiAdress = document.createElement('div')
    renginiaiAdress.textContent = address
    renginiaiAdressWrapper.append(renginiaiAdress)
    
    let renginiaiTitleWrapper = createElement()
    renginiaiAdressWrapper.append(renginiaiTitleWrapper)
    
    let renginiaiTitle = document.createElement('h3')
    renginiaiTitle.textContent = title
    renginiaiAdressWrapper.append(renginiaiTitle)
    
    return item
}