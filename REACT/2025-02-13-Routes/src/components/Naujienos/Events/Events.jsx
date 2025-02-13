import './Events.css'
import EventItem from '../EventItem/EventItem'
import MoreLink from '../MoreLink/MoreLink'

function Events (props) {
    const {data} = props
    return (

       <div className="renginiai">
            <h1>Renginiai</h1>

            {data.map((item,index) => (
                <EventItem
                key={index}
                data={item}
                />
            ))}

            <MoreLink><h3>Daugiau renginių</h3></MoreLink>
        </div>    
        
    )
}
export default Events