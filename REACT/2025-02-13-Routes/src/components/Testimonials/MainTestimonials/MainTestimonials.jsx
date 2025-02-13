import CreateTestimonialItem from "../CreateTestimonialItem/CreateTestimonialItem"
import './MainTestimonials.css'

function MainTestimonials (props) {
    const {data} = props

    return (
        <div className="innerBox1">

        {data.map((item, index) => (
            <CreateTestimonialItem
            key={index}
            data={item}
            />
        ))}

        </div>
    )
}

export default MainTestimonials