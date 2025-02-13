import NewsItem from "../NewsItem/NewsItem"
import './SecondaryNews.css'

function SecondaryNews (props) {

    const {data} = props

    return (
         <div className="naujienos-small">
            {data.map((item, index) => (
                <NewsItem
                key={index}
                data={item}
                />
            ))}
        </div>
    )
}
export default SecondaryNews