import BlackLogo from '../../assets/NaujienosImages/codeacademy-black.svg'
import './Header.css'

function Header () {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="header-logo">
                         <img src={BlackLogo} alt="" />
                    </div>

                    <div className="header-nav">
                        <nav>
                            <a href="#">Studentams</a>
                            <a href="#">Karjerjos centras</a>
                            <a href="#">Programos</a>
                            <a href="#">IT testas</a>
                            <a href="#">Apie mus</a>
                            <a href="#">Verslui</a>
                            <a href="#">Kontaktai</a>
                            <a href="#">EN</a>
                            <a href="#" className="button">Skambinti</a>
                 
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header