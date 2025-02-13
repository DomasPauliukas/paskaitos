import MainNews from "../MainNews/MainNews"
import MoreLink from "../MoreLink/MoreLink"
import SecondaryNews from "../SecondaryNews/SecondaryNews"


function News (props) {
    const {mainNewsData, secondaryNewsData} = props

    return (

        <div className="naujienos">
            <h1>Naujienos</h1>
            <MainNews data={mainNewsData}></MainNews>
            <SecondaryNews data={secondaryNewsData}></SecondaryNews>
            <MoreLink><h3>Visos naujienos</h3></MoreLink>
        </div>
    )
}
export default News