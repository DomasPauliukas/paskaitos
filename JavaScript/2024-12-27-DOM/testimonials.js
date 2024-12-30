let mainTestimonialsData = [
    {   
        name: 'Daniel Clifford',
        title: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
        paragraph: '“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”',
        imageSrc: 'images/image-daniel.jpg',
        verified: false
    },
    {   
        name: 'Jonathan Walters',
        title: 'The team was very supportive and kept me motivated',
        paragraph: '“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”',
        imageSrc: "images/image-jonathan.jpg",
        verified: true
    },
    {
        name: 'Jeanette Harmon',
        title: 'An overall wonderful and rewarding experience',
        paragraph: '“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”',
        imageSrc: "images/image-jeanette.jpg",
        verified: true
    },
    {
        name: 'Patrick Abrams',
        title: 'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.',
        paragraph: '“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”',
        imageSrc: "images/image-patrick.jpg",
        verified: true
    }
]

let secondaryTestimonialsData = [
    {
        name: 'Kira Whittle',
        title: 'Such a life-changing experience. Highly recommended!',
        paragraph: '“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”',
        imageSrc: "images/image-kira.jpg",
        verified: true
    }
]

function init () {

    let content = document.querySelector('#content')
    
    let outerBox = createElement('outer-box')
    content.append(outerBox)
    
    let mainBox = createElement('main-box')
    outerBox.append(mainBox)
    
    let innerBox1 = createMainTestimonialsComponent()
    mainBox.append(innerBox1)
    
    let innerBox2 = createSecondaryTestimonialsComponent()
    mainBox.append(innerBox2)
}

init ()

function createMainTestimonialsComponent () {
    let innerBox1 = createElement('inner-box')

    mainTestimonialsData.forEach(testimonialData => {
    let testimonialItem = createTestimonialItem(testimonialData)
    innerBox1.append(testimonialItem)
    })

    return innerBox1
}

function createSecondaryTestimonialsComponent () {
    let innerBox2 = createElement('inner-box')

    secondaryTestimonialsData.forEach(testimonialData => {
    let testimonialItem = createTestimonialItem(testimonialData)
    innerBox2.append(testimonialItem)
    })

    return innerBox2
}

function createTestimonialItem (data) {

    let {name, title, paragraph, imageSrc, verified} = data

    if (!name || !paragraph){
        return ''
    }

    let item = createElement('item')
    
    let header = createElement('', '', 'header')
    item.append(header)
    
    if (imageSrc){
    
    let imgWrapper = document.createElement('img')
    imgWrapper.src = imageSrc
    header.append(imgWrapper)
    }
    
    let initials = createElement('initials')
    header.append(initials)
    
    let span1 = createElement('', name, 'span')
    initials.append(span1)
    
    let verifiedText = verified ? 'Verified Graduate' : 'Not Verified'
    let span2 = createElement('', verifiedText, 'span')
    initials.append(span2)
    
    let mainItem = document.createElement('main')
    item.append(mainItem)
    
    if (title){

    let section1 = document.createElement('section')
    mainItem.append(section1)
    
    let section1Title = createElement('', title, 'h2')
    section1.append(section1Title)
    }
    
    if (paragraph) {
        
    let section2 = document.createElement('section')
    mainItem.append(section2)
    
    let section2Paragraph = createElement('', paragraph, 'p')
    section2.append(section2Paragraph)
    }

    return item
}

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