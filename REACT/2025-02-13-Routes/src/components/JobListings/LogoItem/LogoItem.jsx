import styles from './LogoItem.module.css'


function LogoItem ({logo}) {
    return (
        <div className={styles.jobLogo}>
            <img src={logo} alt="" />
        </div>
    )
}

export default LogoItem