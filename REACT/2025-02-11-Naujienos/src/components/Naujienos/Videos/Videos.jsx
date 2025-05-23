import MoreLink from "../MoreLink/MoreLink"
import VideoItem from "../VideoItem/VideoItem"
import './Videos.css'
function Videos (props) {
const {data} = props

    return (
            <div className="vaizdo-irasai">
                <h1>Vaizdo įrašai</h1>

                {data.map((video,index) => (
                    <VideoItem
                    key={index}
                    data={video}
                    />
                ))}

                <MoreLink><h3>Visi vaizdo įrašai</h3></MoreLink>
            </div>
    )
}
export default Videos