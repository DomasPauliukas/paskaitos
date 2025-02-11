import './NaujienosPage.css'
import PlayCircleLogo from '../assets/NaujienosImages/8666551_play_circle_icon.svg'
import Photo1 from '../assets/NaujienosImages/20240916_112845-1-scaled-e1728646393611.jpg'
import ArrowLogo from '../assets/NaujienosImages/arrow.svg'
import Photo2 from '../assets/NaujienosImages/automation.jpg'
import Photo3 from '../assets/NaujienosImages/CA_event_dirbtuves-su-Mariumi-Paresiumi_2024-10-26_FB-post_1080x1080-768x768 (1).jpg'
import ThumbnailLogo1 from '../assets/NaujienosImages/CA_podcast_09_2024_YT-thumbnail-300x169.jpg'
import ThumbnailLogo2 from '../assets/NaujienosImages/CA_podcast_10_2024_YT-thumbnail-300x169.jpg'
import WhiteLogo from '../assets/NaujienosImages/codeacademy-white.svg'
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

function NaujienosPage () {
    return (
    <>
        <Header></Header>

    <div className="contaier">

        <ButtonsOnTop></ButtonsOnTop>

        <div className="main">

            <div className="naujienos">
                <h1>Naujienos</h1>
                <MainNews data={mainNewsData}></MainNews>
                <SecondaryNews data={secondaryNewsData}></SecondaryNews>

                <div className="visos-naujienos">
                    <h3>Visos naujienos</h3>
                    <img src={ArrowLogo} alt="" />
                </div>
            </div>

                <Podcasts data={podcastData}></Podcasts>
                <Videos data={videoData}></Videos>


 <div className="renginiai">
     <h1>Renginiai</h1>
         <div className="item">
                 <div className="renginiai-photo">
                     <img src={Photo3} alt="" />
                 </div>
                 <div className="renginiai-data">
                         <div className="data-number">
                             13
                         </div>
                         <div className="data-pink">
                             LAP
                         </div>
                 </div>
                 <div className="renginiai-adresas">
                      <div>
                     UPĖS G. 21, GREENHALL 1, 10 AUKŠTAS
                      </div>
                       <div>
                     <h3>Vadovų dirbtinio intelekto įrankių dirbtuvės su Mariumi Pareščiumi</h3>
                        </div>
                 </div>
         </div>

         <div className="item">
             <div className="renginiai-data">
                     <div className="data-number">
                         12
                     </div>
                     <div className="data-pink">
                         LAP
                     </div>
             </div>
             <div className="renginiai-adresas">
                  <div>
                 MOXY KAUNAS CENTER (MAIRONIO G. 19, KAUNAS)
                  </div>
                   <div>
                 <h3>Ar visos TECH karjeros galimybės tik Vilniuje</h3>
                    </div>
             </div>
        </div>

        <div className="item">
         <div className="renginiai-data">
                 <div className="data-number">
                     7
                 </div>
                 <div className="data-pink">
                     LAP
                 </div>
         </div>
         <div className="renginiai-adresas">
              <div>
             UPĖS G. 21, GREENHALL 1, 10 AUKŠTAS
              </div>
               <div>
             <h3>IT karjera be kodo: Naujos projektų valdymo programos pristatymas</h3>
                </div>
         </div>
        </div>

        <div className="visos-naujienos">
         <h3>Daugiau</h3>
         <img src={ArrowLogo} alt="" />
     </div>  
 </div>

</div>

</div>
                <StickerNavigation></StickerNavigation>


         <footer>
                 <div className="container">

                     <div className="footer-wrap">
                          <div className="footer-logo">
                             <img src={WhiteLogo} alt="" />
                         </div>

                       <div className="footer-links">
                         <ul>
                             <li className="a">Studentams</li>
                             <li className="a">Karjeros centras</li>
                             <li className="a">Programos</li>
                             <li className="a">Užt 100% finansavimas</li>
                             <li className="a">Programavimo kalbos</li>                                        <li className="a">Apie mus</li>
                             <li className="a">Naujienos</li>
                             <li className="a">Karjera - We are hiring!</li>
                             <li className="a">Verslui</li>
                             <li className="a">ES parama</li>
                             <li className="a">IT būreliai moksleiviams</li>
                             <li className="a">Kontaktai</li>
                         </ul>
                       </div>

                      <div className="footer-address">
                         <span>Vilnius</span>
                           <a href="">Upės g. 21, Vilnius</a>
                           <a href="">Antakalnio g. 17, Vilnius</a>
                      </div>

                      <div className="footer-socials">
                         <a href="#">Instagram</a>
                         <a href="#">Facebook</a>
                          <a href="#">Lindedin</a>
                      </div>

                      <div className="footer-rights">
                        © By UAB Programuok | CodeAcademy šeimos narys – <a href="">CodeAcademy Kids</a>
                      </div>

                      <div className="footer-privacy">
                          <a href="">Privatumo politika</a>
                     </div>
                  </div>
             </div>
      </footer>
    </>

    )
}

export default NaujienosPage