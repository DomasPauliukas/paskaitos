import './Header.css'
import HeaderLogo from '../../assets/bg-header-desktop.svg'

function Header () {
    return (
        <img className="header-logo" src={HeaderLogo} alt="" />
    )
}
export default Header