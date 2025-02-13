import CreateTestimonialItem from "../CreateTestimonialItem/CreateTestimonialItem"
import './SecondaryTestimonials.css'
function SecondaryTestimonials (props) {
    const {data} = props

    return (
        <div className="innerBox2">

        {data.map((item, index) => (
            <CreateTestimonialItem
            key={index}
            data={item}
            />
        ))}
        </div>
    )
}

export default SecondaryTestimonials