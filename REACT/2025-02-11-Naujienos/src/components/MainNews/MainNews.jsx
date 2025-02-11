import NewsItem from "../NewsItem/NewsItem"
import './MainNews.css'

function MainNews (props) {
   const { data } = props
    return (
         <div className="naujienos-big">

          {data.map((item,index) => (
               <NewsItem
               key={index}
               data={item}
               />
          ))}

         </div>
    )
}
export default MainNews