import createElement from "./createElement.js"

export type ItemData = {
    imageSrc: string
    imageAlt: string
    notification: string
    title: string
    date: string
}

export default function createNaujienosItems (data: ItemData) {
    let {imageSrc, imageAlt, notification, title, date} = data

    let item = createElement('item')

    let itemImageWrapper = createElement()
    item.append(itemImageWrapper)

    let itemImage = document.createElement('img')
    itemImage.src = imageSrc
    itemImage.alt = imageAlt
    itemImageWrapper.append(itemImage)

    let itemInfo = createElement('item-info')
    item.append(itemInfo)

    let itemInfoNotification = document.createElement('span')
    itemInfoNotification.textContent = notification
    itemInfo.append(itemInfoNotification)

    let itemInfoTitleWrapper = createElement()
    itemInfo.append(itemInfoTitleWrapper)

    let itemInfoTitle = document.createElement('h3')
    itemInfoTitle.textContent = title
    itemInfo.append(itemInfoTitle)

    let itemInfoDate = document.createElement('span')
    itemInfoDate.textContent = date
    itemInfo.append(itemInfoDate)

    return item
}
