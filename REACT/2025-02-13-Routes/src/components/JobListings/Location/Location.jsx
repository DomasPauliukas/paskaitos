import styles from './Location.module.css'

function Location ({postedAt, contract, location}) {
    return (
        <div className={styles.Location}>
            <span>{postedAt}</span>
            <span>{contract}</span>
            <span>{location}</span>
        </div>
    )
}
export default Location