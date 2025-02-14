import styles from './CitiesItem.module.css'

function CitiesItem (props) {

    const {isCapital, location, name, population, touristAttractions} = props.data
    const {continent, country} = location

    const capitalTag = isCapital ? <span>(capital)</span> : ''
    const capitalSentence = isCapital ? <span>{name} is the capital of {country}.</span> : ''


    return (

        <div className={styles.cityItem}>

            <div className={styles.cityDescription}>

            <p>{name} {capitalTag} city is located in {continent}, {country} and has population of {population} people. {capitalSentence}
            </p>

            </div>
        {touristAttractions.length === 1 ? 
            (<div className={styles.cityActivities}>
                <p>Main tourist attraction in {name} is {touristAttractions[0]}</p>
            </div>
            ) :
        touristAttractions.length > 1 ? 
            (<div className={styles.cityActivities}>
                <p>Main tourist attractions in {name} are: {touristAttractions.join(', ')}</p>
            </div>
            ) : ''
        }
 
            </div>
    )
}
export default CitiesItem