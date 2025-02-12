import './PortfolioHeader.css'
import EverestLogo from '../../assets/mount-everest-at-sunset-1.webp'

function PortfolioHeader () {
    return (
        <div className="portfolioHeader">
            <div className='image-wrapper'>
                <img src={EverestLogo} alt="" />
            </div>
            <div className='text-wrapper'>
                <h1>Title</h1>
                <span>Some about text</span>
                <span>in two lines</span>
                <button>Button</button>
            </div>
        </div>
    )
}
export default PortfolioHeader