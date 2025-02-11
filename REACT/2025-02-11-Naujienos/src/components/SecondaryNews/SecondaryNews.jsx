import NewsItem from "../NewsItem/NewsItem"
import './SecondaryNews.css'

function SecondaryNews (props) {

    const {data} = props

    return (
         <div className="naujienos-small">
            {data.map((item, index) => (
                <NewsItem
                key={index}
                title={item.title}
                category={item.category}
                image={item.image}
                date={item.date}
                />
            ))}
        </div>
    )
}
export default SecondaryNews