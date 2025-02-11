import PodcastItem from "../PodcastItem/PodcastItem"
import './Podcasts.css'
function Podcasts (props) {
    const {data} = props

    return (

        <div className="podcastai">
            <h1>Podcastai ir radijo laidos</h1>

        {data.map((podcast,index) => (
            <PodcastItem
            key={index}
            data={podcast}
            // date={podcast.date}
            // image={podcast.image}
            // image2={podcast.image2}
            // time={podcast.time}
            // title={podcast.title}
            />
        ))}
        
        </div>
    )
}
export default Podcasts