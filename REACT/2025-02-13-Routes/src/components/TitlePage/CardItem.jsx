import styles from './CardItem.module.css'

function CardItem (props) {
    const {children} = props
    return (

        <div className={styles.CardItem}>
            {children}
        </div>
    )
}
 export default CardItem