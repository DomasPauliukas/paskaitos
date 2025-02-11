import NewsItem from "../NewsItem/NewsItem"
import './MainNews.css'

function MainNews (props) {
   const { data } = props
    return (
         <div className="naujienos-big">

          {data.map((item,index) => (
               <NewsItem
               key={index}
               image={item.image}
               category={item.category}
               title={item.title}
               date={item.date}
               />
          ))}

         </div>
    )
}
export default MainNews