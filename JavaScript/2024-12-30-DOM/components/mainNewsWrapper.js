import createElement from "./createElement.js";
import newsBig from "./naujienosBigWrap.js";
import newsSmall from "./naujienosSmallWrap.js";
import createPodcasts from "./podcastai.js";
import createRenginiai from "./renginiai.js";
import createVaizdoIrasai from "./vaizdoIrasai.js";


export default function mainNewsWrapper () {
    let mainWrapper = createElement('main')

    let naujienos = createElement('naujienos')
    mainWrapper.append(naujienos)
    
    let naujienosTitle = createElement('', 'Naujienos', 'h1')
    naujienos.append(naujienosTitle)
    
    let naujienosBig = newsBig()
    naujienos.append(naujienosBig)
    
    let naujienosSmall = newsSmall()
    naujienos.append(naujienosSmall)
    
    
    let visosNaujienos = createElement('visos-naujienos')
    naujienos.append(visosNaujienos)
    
    let visosNaujienosTitle = createElement('', 'Visos naujienos', 'h3')
    visosNaujienos.append(visosNaujienosTitle)
    
    let visosNaujienosImage = document.createElement('img')
    visosNaujienosImage.src = "images/arrow.svg"
    visosNaujienos.append(visosNaujienosImage)
    
    
    let podcastai = createPodcasts()
    mainWrapper.append(podcastai)
    
    let vaizdoIrasai = createVaizdoIrasai()
    mainWrapper.append(vaizdoIrasai)
    
    let renginiai = createRenginiai()
    mainWrapper.append(renginiai)

    return mainWrapper
}







