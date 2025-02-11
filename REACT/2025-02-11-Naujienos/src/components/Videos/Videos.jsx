import VideoItem from "../VideoItem/VideoItem"
import ArrowLogo from "../../assets/NaujienosImages/arrow.svg"
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
                
                <div className="visos-naujienos">
                    <h3>Visi vaizdo įrašai</h3>
                    <img src={ArrowLogo} alt="" />
                </div>  
            </div>
    )
}
export default Videos