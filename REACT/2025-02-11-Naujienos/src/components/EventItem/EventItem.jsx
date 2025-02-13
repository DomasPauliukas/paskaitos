import './EventItem.css'
function EventItem (props) {

    const {image, day, month, address, title} = props.data
    // jei day ir month butu objekte, tai cia rasytume date = props data. o paskui antras const { day, month} = date ir isstraukiam.
    console.log(image)

    const imageWrapper = image && <div className="renginiai-photo">
    <img src={image} alt="" />
</div>

    return (

            <div className="item">

                    {imageWrapper}
                    
                    {(day || month) && 
                     <div className="renginiai-data">
                        {day && <div className="data-number">{day}</div>}
                        {month && <div className="data-pink">{month}</div>}
                     </div>
                    }

                    <div className="renginiai-adresas">
                         <div>
                            {address}
                         </div>
                          <div>
                        <h3>{title}</h3>
                           </div>
                    </div>
            </div>
    )
}
export default EventItem