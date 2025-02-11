import PodcastItem from "../PodcastItem/PodcastItem"
import './Podcasts.css'
function Podcasts (props) {
    const {data} = props

    return (
        <>
        {data.map((podcast,index) => (
            <PodcastItem
            key={index}
            date={podcast.date}
            image={podcast.image}
            image2={podcast.image2}
            time={podcast.time}
            title={podcast.title}
            />
        ))}
        </>
    )
}
export default Podcasts