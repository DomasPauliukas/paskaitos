import './NaujienosPage.css'
import PlayCircleLogo from '../assets/NaujienosImages/8666551_play_circle_icon.svg'
import Photo1 from '../assets/NaujienosImages/20240916_112845-1-scaled-e1728646393611.jpg'
import Photo2 from '../assets/NaujienosImages/automation.jpg'
import Photo3 from '../assets/NaujienosImages/CA_event_dirbtuves-su-Mariumi-Paresiumi_2024-10-26_FB-post_1080x1080-768x768 (1).jpg'
import ThumbnailLogo1 from '../assets/NaujienosImages/CA_podcast_09_2024_YT-thumbnail-300x169.jpg'
import ThumbnailLogo2 from '../assets/NaujienosImages/CA_podcast_10_2024_YT-thumbnail-300x169.jpg'
import Photo4 from '../assets/NaujienosImages/IMG_6582-scaled-e1724159397334-300x191.jpg'
import DILogo from '../assets/NaujienosImages/kas-yra-dirbtinis-intelektas.jpg'
import SpotifyLogo from '../assets/NaujienosImages/Spotify-260x260.png'

import Header from '../components/NaujienosHeader/Header'
import ButtonsOnTop from '../components/NaujienosButtonsOnTop/ButtonsOnTop'
import MainNews from '../components/MainNews/MainNews'
import SecondaryNews from '../components/SecondaryNews/SecondaryNews'
import Podcasts from '../components/Podcasts/Podcasts'
import Videos from '../components/Videos/Videos'
import StickerNavigation from '../components/StickerNavigation/StickerNavigation'
import Events from '../components/Events/Events'
import Footer from '../components/Footer/Footer'
import MoreLink from '../components/MoreLink/MoreLink'

const mainNewsData = [
    {
    image: DILogo,
    category: 'TECHNOLOGIJOS',
    title: 'Dirbtinis intelektas: viskas, ką norėjote sužinoti',
    date: '2024-10-30'
    },
    {
    image: Photo1,
    category: 'SĖKMĖS ISTORIJOS',
    title: 'Sėkmės istorija - įsidarbinimas į Shipzee',
    date: '2024-10-11'
    },
]
const secondaryNewsData = [
    {
    image: Photo2,
    category: 'CODEACADEMY STUDENTAI',
    title: 'Susipažink su mūsų įdarbinimo partneriais - Vention!',
    date: '2024-10-04'
    },
    {
    image: ThumbnailLogo1,
    category: 'TECHNOLOGIJŲ RITMU',
    title: '#10 potencialus darbdavys ir karjeros galimybės: "Hostinger"',
    date: '2024-10-04'
    },
    {
    image: ThumbnailLogo2,
    category: 'TECHNOLOGIJŲ RITMU',
    title: '#9 Python džiunglės: istorija, perspektyvos ir pranašumai',
    date: '2024-10-04'
    },
    {
    image: Photo4,
    category: 'SĖKMĖS ISTORIJOS',
    title: 'Sėkmės istorija - įsidarbinimas į Nacionalinio Kibernetinio Saugumo Centrą',
    date: '2024-08-20'
    },
]
const podcastData = [
    {
    image: SpotifyLogo,
    image2: PlayCircleLogo,
    time: 'Trukmė: 7:55',
    title: 'Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas',
    date: '2021-09-02',
    },
    {
    image: SpotifyLogo,
    image2: PlayCircleLogo,
    time: 'Trukmė: 9:22',
    title: 'Kaip gyvensime 2031-aisiais? 10 esminių prognozių',
    date: '2021-08-18',
    },
    {
    image: SpotifyLogo,
    image2: PlayCircleLogo,
    time: 'Trukmė: 7:54',
    title: 'Elektrinių povandeninių dronų kompanija pasirengusi tapti vandenynų „SpaceX“',
    date: '2021-08-25',
    },
    {
    image: SpotifyLogo,
    image2: PlayCircleLogo,
    time: 'Trukmė: 8:32',
    title: 'Jei virtualus pasaulis taps realybe, jos neturėtų valdyti „Facebook“',
    date: '2021-08-11',
    },
    
]
const videoData = [
    {
    iframe: 'https://www.youtube.com/embed/Rz6bswWbPqw?si=nf5fhZNypFFrYuuP',
    title: '#6 Studentės istorija: sėkmė slypi disciplinoje'
    },
    {
    iframe: 'https://www.youtube.com/embed/yovsPjuDElw?si=gp4nNtJRMYS0BAOW',
    title: '#4 Ctrl+Alt+Defend: Kibernetinis saugumas šiandien'
    },
    {
    iframe: 'https://www.youtube.com/embed/7X4iX-D6ymQ?si=b9b_2J-f-JpfzcAE',
    title: 'Susipažink su mūsų įdarbinimo partneriais – Danske Bank!'
    },
]
const eventsData = [
    {
        image: Photo3,
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

function NaujienosPage () {
    return (
    <>
        <Header></Header>
        <ButtonsOnTop></ButtonsOnTop>

        <div className="main">
            
                <div className="naujienos">
                <h1>Naujienos</h1>
                <MainNews data={mainNewsData}></MainNews>
                <SecondaryNews data={secondaryNewsData}></SecondaryNews>
                <MoreLink><h3>Visos naujienos</h3></MoreLink>
                </div>

                <Podcasts data={podcastData}></Podcasts>
                <Videos data={videoData}></Videos>
                <Events data={eventsData}></Events>
        </div>
                <StickerNavigation></StickerNavigation>
                <Footer></Footer>
    </>
    )
}
export default NaujienosPage