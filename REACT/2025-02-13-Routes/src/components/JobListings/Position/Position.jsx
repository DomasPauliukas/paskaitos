import styles from './Position.module.css'

function Position ({position}) {
    return (
        <div className={styles.position}>
            <p>{position}</p>
        </div>
    )
}
export default Position