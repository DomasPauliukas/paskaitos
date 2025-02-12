import ArrowLogo from '../../assets/NaujienosImages/arrow.svg'
import './MoreLink.css'

function MoreLink (props) {
    const {children} = props
    return (
            <div className="visos-naujienos">
                {children}
                <img src={ArrowLogo} alt="" />
            </div>
    )
}
export default MoreLink