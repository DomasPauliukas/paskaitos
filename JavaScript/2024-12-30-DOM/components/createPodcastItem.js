import createElement from "./createElement.js"

export default function createPodcastItem (data) {
    let {duration, bottomText} = data

    let item = createElement('item')

    let itemTop = createElement('item-top')
    item.append(itemTop)

    let spotifyImgWrapper = createElement('spotify-img')
    itemTop.append(spotifyImgWrapper)

    let spotifyImg = document.createElement('img')
    spotifyImg.src = "images/Spotify-260x260.png"
    spotifyImgWrapper.append(spotifyImg)

    let durationWrapper = document.createElement('div')
    durationWrapper.textContent = duration
    itemTop.append(durationWrapper)

    let playIconWrapper = createElement()
    itemTop.append(playIconWrapper)

    let playIcon = document.createElement('img')
    playIcon.src = "images/8666551_play_circle_icon.svg"
    playIconWrapper.append(playIcon)

    let itemBottom = createElement('item-bottom')
    item.append(itemBottom)

    let itemBottomText = document.createElement('h4')
    itemBottomText.textContent = bottomText
    itemBottom.append(itemBottomText)

    return item
}