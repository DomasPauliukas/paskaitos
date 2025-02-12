import './PortfolioAlbumItem.css'
function PortfolioAlbumItem (props) {
    const {image, title} = props.data
    console.log()
    return (
        
        <div className="portfolioAlbumItem">
            <div className="imageWrapper">
                <img src={image} alt="" />
            </div>
            <div className="titleWrapper">
                <h3>{title}</h3>
            </div>
        </div>
    )
}
 export default PortfolioAlbumItem