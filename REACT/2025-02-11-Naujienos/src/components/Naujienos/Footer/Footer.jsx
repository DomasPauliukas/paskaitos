import WhiteLogo from '../../../assets/NaujienosImages/codeacademy-white.svg'
import './Footer.css'

function Footer () {
    return (
        <footer>
            <div className="container">

                <div className="footer-wrap">
                    <div className="footer-logo">
                        <img src={WhiteLogo} alt="" />
                    </div>

                    <div className="footer-links">
                    <ul>
                        <li className="a">Studentams</li>
                        <li className="a">Karjeros centras</li>
                        <li className="a">Programos</li>
                        <li className="a">Užt 100% finansavimas</li>
                        <li className="a">Programavimo kalbos</li>                                        <li className="a">Apie mus</li>
                        <li className="a">Naujienos</li>
                        <li className="a">Karjera - We are hiring!</li>
                        <li className="a">Verslui</li>
                        <li className="a">ES parama</li>
                        <li className="a">IT būreliai moksleiviams</li>
                        <li className="a">Kontaktai</li>
                    </ul>
                    </div>

                    <div className="footer-address">
                        <span>Vilnius</span>
                        <a href="">Upės g. 21, Vilnius</a>
                        <a href="">Antakalnio g. 17, Vilnius</a>
                    </div>

                    <div className="footer-socials">
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">Lindedin</a>
                    </div>

                    <div className="footer-rights">
                        © By UAB Programuok | CodeAcademy šeimos narys – <a href="">CodeAcademy Kids</a>
                    </div>

                    <div className="footer-privacy">
                        <a href="">Privatumo politika</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer