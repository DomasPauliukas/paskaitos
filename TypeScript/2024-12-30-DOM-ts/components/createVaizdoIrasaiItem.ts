import createElement from "./createElement.js"

export default function createVaizdoIrasaiItem (data: {iframeSrc: string, title: string}) {
    let {iframeSrc, title} = data
    let item = createElement('item')

    let itemIframe = document.createElement('iframe')
    itemIframe.src = iframeSrc
    itemIframe.title = "YouTube video player"
    // itemIframe.frameBorder = "0"
    itemIframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    itemIframe.referrerPolicy = "strict-origin-when-cross-origin"
    itemIframe.allowFullscreen
    item.append(itemIframe)

    let itemTitle = document.createElement('h3')
    itemTitle.textContent = title
    item.append(itemTitle)

    return item
}