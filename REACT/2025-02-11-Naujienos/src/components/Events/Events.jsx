import ArrowLogo from '../../assets/NaujienosImages/arrow.svg'
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
            
           <div className="visos-naujienos">
            <h3>Daugiau</h3>
            <img src={ArrowLogo} alt="" />
        </div>  
    </div>    
        
    )
}
export default Events