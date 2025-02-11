function NewsItem (props) {

    const { image, category, title, date } = props.data
  
    return (
                <div className="item">
            <div>
                <img src={image} alt="" />
            </div>

            <div className="item-info">
                <span>{category}</span>
                <div>
                    <h3>{title}</h3>
                </div>
                <span>{date}</span>
            </div>
        </div>
    )
}
export default NewsItem