import styles from './CitiesItem.module.css'

function CitiesItem (props) {
    const { fullWidth } = props
    const {isCapital, location, name, population, touristAttractions} = props.data
    const {continent, country} = location

    const capitalTag = isCapital ? <span>(capital)</span> : ''
    const capitalSentence = isCapital ? <span>{name} is the capital of {country}.</span> : ''

    const cityItemCardStyle = {
        width: fullWidth ? '98%' : '48%',
        border: isCapital ? '2px solid green' : '2px solid red',
        padding: '15px'
    }

    return (

        // <div className={`${styles.cityItem} ${isCapital ? `${styles.capital}` : ''} ` }>
        <div style={cityItemCardStyle} className={`${styles.cityItem} ${isCapital ? `${styles.capital}` : ''} ` }>

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