import createElement from "./createElement.js"
import createPodcastItem from "./createPodcastItem.js"
import { podcastData } from "./DATAFILES.js"


export default function createPodcasts () {
    let podcastai = createElement('podcastai')

    let podcastaiTitle = document.createElement('h1')
    podcastaiTitle.textContent = 'Podcastai ir radijo laidos'
    podcastai.append(podcastaiTitle)
    
    podcastData.forEach(element => {
        let newPodcast = createPodcastItem(element)
        podcastai.append(newPodcast)
    })

    return podcastai
}