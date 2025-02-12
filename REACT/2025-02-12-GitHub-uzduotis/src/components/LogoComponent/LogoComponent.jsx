import LogoItem from '../LogoItem/LogoItem'
import './LogoComponent.css'

function LogoComponent (props) {
    const {data} = props
    
    return (
        <>
            {data.map((item, index) => (
                <LogoItem key={index} data={item}/>
            ))}
    
        </>
    )
}
export default LogoComponent