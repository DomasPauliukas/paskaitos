import './PodcastItem.css'

function PodcastItem (props) {
    const {date, image, image2, time, title} = props.data

    if (!title) {
        return
    }
    return (
                <div className="item">
                    <div className="item-top">
                        <div className="spotify-img">
                            <img src={image} alt="" />
                        </div>
                        <div className="trukme">
                            {time}
                        </div>
                        <div>
                            <img src={image2} alt="" />
                        </div>
                    </div>
                    <div className="item-bottom">
                        <h4>{title}</h4>
                        <span>{date}</span>
                    </div>
                </div>
    )
}
export default PodcastItem