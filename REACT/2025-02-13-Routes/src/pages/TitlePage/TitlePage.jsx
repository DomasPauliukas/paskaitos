import { Link } from 'react-router'
import CardItem from '../../components/TitlePage/CardItem'
import styles from './TitlePage.module.css'

function TitlePage () {

    return(
        <>
        <CardItem>
            <h2>Testimonials</h2>
            <Link to="/Testimonial">open</Link>
        </CardItem>

        <CardItem>
        <h2>JobListing</h2>
        <Link to="/JobListing">open</Link>
        </CardItem>

        <CardItem>
        <h2>Naujienos</h2>
        <Link to="/Naujienos">open</Link>
        </CardItem>

        <CardItem>
        <h2>Desserts menu</h2>
        <Link to="/DessertsMenu">open</Link>
        </CardItem>

        </>
    )
}
export default TitlePage