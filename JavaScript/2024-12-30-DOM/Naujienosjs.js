let naujienosBigData = [
    {
        imageSrc: "images/kas-yra-dirbtinis-intelektas.jpg",
        imageAlt: "DI",
        notification: 'TECHNOLOGIJOS',
        title: 'Dirbtinis intelektas: viskas, ką norėjote sužinoti',
        date: '2024-10-30'
    },
    {
        imageSrc: "images/20240916_112845-1-scaled-e1728646393611.jpg",
        imageAlt: "PIC",
        notification: 'SĖKMĖS ISTORIJOS',
        title: 'Sėkmės istorija - įsidarbinimas į Shipzee',
        date: '2024-10-11'
    }
]
let naujienosSmallData = [
    {
        imageSrc: "images/automation.jpg",
        imageAlt: "DI",
        notification: 'CODEACADEMY STUDENTAI',
        title: 'Susipažink su mūsų įdarbinimo partneriais - Vention!',
        date: '2024-10-04'
    },
    {
        imageSrc: "images/CA_podcast_10_2024_YT-thumbnail-300x169.jpg",
        imageAlt: "DI",
        notification: 'TECHNOLOGIJŲ RITMU',
        title: '#10 potencialus darbdavys ir karjeros galimybės: "Hostinger',
        date: '2024-10-04'
    },
    {
        imageSrc: "images/CA_podcast_10_2024_YT-thumbnail-300x169.jpg",
        imageAlt: "DI",
        notification: 'TECHNOLOGIJŲ RITMU',
        title: '#9 Python džiunglės: istorija, perspektyvos ir pranašumai',
        date: '2024-10-04'
    },
    {
        imageSrc: "images/IMG_6582-scaled-e1724159397334-300x191.jpg",
        imageAlt: "DI",
        notification: 'SĖKMĖS ISTORIJOS',
        title: 'Sėkmės istorija - įsidarbinimas į Nacionalinio Kibernetinio Saugumo Centrą',
        date: '2024-08-20'
    }
]
let podcastData = [
    {
        duration: 'Trukmė: 7:55',
        bottomText: 'Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas'
    },
    {
        duration: 'Trukmė: 9:22',
        bottomText: 'Kaip gyvensime 2031-aisiais? 10 esminių prognozių'
    },
    {
        duration: 'Trukmė: 7:54',
        bottomText: 'Elektrinių povandeninių dronų kompanija pasirengusi tapti vandenynų „SpaceX“'
    },
    {
        duration: 'Trukmė: 8:32',
        bottomText: 'Jei virtualus pasaulis taps realybe, jos neturėtų valdyti „Facebook“'
    }
]
let vaizdoIrasaiData = [
    {
        iframeSrc: "https://www.youtube.com/embed/Rz6bswWbPqw?si=nf5fhZNypFFrYuuP",
        title: '#6 Studentės istorija: sėkmė slypi disciplinoje'
    },
    {
        iframeSrc: "https://www.youtube.com/embed/yovsPjuDElw?si=gp4nNtJRMYS0BAOW",
        title: '#4 Ctrl+Alt+Defend: Kibernetinis saugumas šiandien'
    },
    {
        iframeSrc: "https://www.youtube.com/embed/7X4iX-D6ymQ?si=b9b_2J-f-JpfzcAE",
        title: 'Susipažink su mūsų įdarbinimo partneriais – Danske Bank!'
    }
]
let renginiaiData = [
    {
        imageSrc: "images/CA_event_dirbtuves-su-Mariumi-Paresiumi_2024-10-26_FB-post_1080x1080-768x768 (1).jpg",
        day: '13',
        month: 'LAP',
        address: 'UPĖS G. 21, GREENHALL 1, 10 AUKŠTAS',
        title: 'Vadovų dirbtinio intelekto įrankių dirbtuvės su Mariumi Pareščiumi'
    },
    {
        day: '12',
        month: 'LAP',
        address: 'MOXY KAUNAS CENTER (MAIRONIO G. 19, KAUNAS)',
        title: 'Ar visos TECH karjeros galimybės tik Vilniuje'
    },
    {
        day: '7',
        month: 'LAP',
        address: 'UPĖS G. 21, GREENHALL 1, 10 AUKŠTAS',
        title: 'IT karjera be kodo: Naujos projektų valdymo programos pristatymas'
    }
]



let content = document.querySelector('#content')

let header = document.createElement('header')
content.append(header)

let container1 = createElement('container')
header.append(container1)

let pageHeader = createElement('header')
container1.append(pageHeader)




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





let container2 = createElement('container')
content.append(container2)



let sectionButtonsOnTop = createElement('buttons-on-top')
container2.append(sectionButtonsOnTop)

sectionButtonsOnTop.append(createNavigationsList(['Apie Mus', 'Naujienos', 'Karjera', 'ES parama']))



let mainWrapper = createElement('main')
container2.append(mainWrapper)

let naujienos = createElement('naujienos')
mainWrapper.append(naujienos)

let naujienosTitle = createElement('', 'Naujienos', 'h1')
naujienos.append(naujienosTitle)

let naujienosBig = createElement('naujienos-big')
naujienos.append(naujienosBig)

naujienosBigData.forEach(naujiena => {
    let naujienaItem = createNaujienosItems(naujiena)
    naujienosBig.append(naujienaItem)
})



let naujienosSmall = createElement('naujienos-small')
naujienos.append(naujienosSmall)

naujienosSmallData.forEach(naujiena => {
    let naujienaItem = createNaujienosItems(naujiena)
    naujienosSmall.append(naujienaItem)
})

let visosNaujienos = createElement('visos-naujienos')
naujienos.append(visosNaujienos)

let visosNaujienosTitle = createElement('', 'Visos naujienos', 'h3')
visosNaujienos.append(visosNaujienosTitle)

let visosNaujienosImage = document.createElement('img')
visosNaujienosImage.src = "images/arrow.svg"
visosNaujienos.append(visosNaujienosImage)




let podcastai = createElement('podcastai')
mainWrapper.append(podcastai)

let podcastaiTitle = document.createElement('h1')
podcastaiTitle.textContent = 'Podcastai ir radijo laidos'

podcastData.forEach(element => {
    let newPodcast = createPodcastItem(element)
    podcastai.append(newPodcast)
})






let vaizdoIrasai = createElement('vaizdo-irasai')
mainWrapper.append(vaizdoIrasai)

let vaizdoIrasaiTitle = document.createElement('h1')
vaizdoIrasaiTitle.textContent = 'Vaizdo įrašai'
vaizdoIrasai.append(vaizdoIrasaiTitle)

vaizdoIrasaiData.forEach(element => {
    let vaizdoIrasaiItem = createVaizdoIrasaiItem(element)
    vaizdoIrasai.append(vaizdoIrasaiItem)
})





let renginiai = createElement('renginiai')
mainWrapper.append(renginiai)

let renginiaiTitle = document.createElement('h1')
renginiaiTitle.textContent = 'Renginiai'
renginiai.append(renginiaiTitle)

renginiaiData.forEach(element => {
    let renginiaiItem = createRenginiaiItem(element)
    renginiai.append(renginiaiItem)
})

let renginiaiNaujienos = createElement('visos-naujienos')
renginiai.append(renginiaiNaujienos)

let renginiaiNaujienosTitle = document.createElement('h3')
renginiaiNaujienosTitle = 'Daugiau'
renginiaiNaujienos.append(naujienosTitle)

let renginiaiNaujienosImage = document.createElement('img')
renginiaiNaujienosImage.src = "images/arrow.svg"
renginiaiNaujienos.append(renginiaiNaujienosImage)











let stickerNavigation = document.createElement('a')
stickerNavigation.href = '#'
content.append(stickerNavigation)



let footer = document.createElement('footer')
content.append(footer)




function createElement (className, text, elementType = 'div') {
    let element = document.createElement(elementType)

    if (className){
    element.classList.add(className)
    }
    if (text){
    element.textContent = text
    }
    return element
}

function createNavigationsList (text) {
    let headerLinks = document.createElement('a')
    headerLinks.href = '#'
    headerLinks.textContent = text
    return headerLinks
}

function createNaujienosItems (data) {
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

function createPodcastItem (data) {
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

    let itemBottom = createElement('item-bottom')
    item.append(itemBottom)

    let itemBottomText = document.createElement('h4')
    itemBottomText.textContent = bottomText
    itemBottom.append(itemBottomText)

    return item
}

function createVaizdoIrasaiItem (data) {
    let {iframeSrc, title} = data
    let item = createElement('item')

    let itemIframe = document.createElement('iframe')
    itemIframe.src = iframeSrc
    itemIframe.title = "YouTube video player"
    itemIframe.frameborder = "0"
    itemIframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    itemIframe.referrerPolicy = "strict-origin-when-cross-origin"
    itemIframe.allowFullscreen
    item.append(itemIframe)

    let itemTitle = document.createElement('h3')
    itemTitle.textContent = title
    item.append(itemTitle)

    return item
}

function createRenginiaiItem (data) {
    let {imageSrc, day, month, address, title} = data

    let item = createElement()

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