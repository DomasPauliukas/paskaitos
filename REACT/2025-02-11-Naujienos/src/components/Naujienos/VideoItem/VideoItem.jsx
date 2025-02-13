import './VideoItem.css'
function VideoItem (props) {
    const {iframe, title} = props.data
    return (
        <div className="item">
            <iframe src={iframe} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3>{title}</h3>
        </div>
    )
}
export default VideoItem