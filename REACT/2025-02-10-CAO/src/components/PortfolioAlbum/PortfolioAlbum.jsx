import PortfolioAlbumItem from "../PortfolioAlbumItem/PortfolioAlbumItem"
import './PortfolioAlbum.css'

function PortfolioAlbum (props) {
    const {data} = props
    return (
        <div className="portfolioAlbum">
            {data.map((item, index) => (
                <PortfolioAlbumItem
                key={index}
                data={item}
                />
            ))}
        </div>
    )
}
export default PortfolioAlbum