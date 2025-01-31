import createElement from "./createElement.js";

export default function stickerNavigation() {
    let stickerNavigator = createElement('a') as HTMLAnchorElement
    stickerNavigator.classList.add('sticker-navigation')
    stickerNavigator.href = '#'

    let stickerImage = document.createElement('img')
    stickerImage.classList.add('sticker-image')
    stickerImage.src = "images/site-contact-form-button.png"
    stickerNavigator.append(stickerImage)

    return stickerNavigator
}