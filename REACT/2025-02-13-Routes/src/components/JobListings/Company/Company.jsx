import styles from './Company.module.css'

function Company ({company, isNew, featured}) {

const newSign = isNew && <span className={styles.newTag}>NEW!</span>
const featuredSign = featured && <span className={styles.featuredTag}>FEATURED</span>

    return (
        <div className={styles.companyWrap}>
            <span className={styles.companyName}>{company}</span>
            {newSign}
            {featuredSign}
        </div>
    )
}
export default Company