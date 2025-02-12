import Logo1 from './assets/field-6574455_640.jpg'
import Logo2 from './assets/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg'
import PortfolioAlbum from './components/PortfolioAlbum/PortfolioAlbum'
import PortfolioHeader from './components/PortfolioHeader/PortfolioHeader'
import PortfolioTitle from './components/PortfolioTitle/PortfolioTitle'

const PortfolioAlbumData = [
    {
        image: Logo1,
        title: 'Vienas'
    },
    {
        image: Logo1,
        title: 'Du'
    },
    {
        image: Logo1,
        title: 'Trys'
    },
    {
        image: Logo2,
        title: 'Keturi'
    },
    {
        image: Logo2,
        title: 'Penki'
    },
    {
        image: Logo2,
        title: 'Šeši'
    },
]

function Portfolio () {
    return (
        <>
        <header>
            <PortfolioHeader></PortfolioHeader>
        </header>
        <main>
            <PortfolioTitle></PortfolioTitle>
            <PortfolioAlbum data={PortfolioAlbumData}></PortfolioAlbum> 
        </main>
        
        
        
        
        
        </>
    )
}
export default Portfolio

