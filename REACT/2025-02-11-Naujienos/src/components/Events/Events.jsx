import './Events.css'
import EventItem from '../EventItem/EventItem'

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
        </div>    
        
    )
}
export default Events