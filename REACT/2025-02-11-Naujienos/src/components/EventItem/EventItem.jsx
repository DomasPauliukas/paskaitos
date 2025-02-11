import './EventItem.css'
function EventItem (props) {

    const {image, day, month, address, title} = props.data
    console.log(image)

    const imageWrapper = image && <div className="renginiai-photo">
    <img src={image} alt="" />
</div>

    return (

            <div className="item">

                    {imageWrapper}

                    <div className="renginiai-data">
                            <div className="data-number">
                                {day}
                            </div>
                            <div className="data-pink">
                                {month}
                            </div>
                    </div>

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