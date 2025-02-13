import styles from './Header.module.css'
import HeaderLogo from '../../../assets/JobListing/bg-header-desktop.svg'

function Header () {
    return (
        <img className={styles.headerLogo} src={HeaderLogo} alt="" />
    )
}
export default Header