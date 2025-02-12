import './LogoItem.css'


function LogoItem (props) {
    const {logo} = props.data
    console.log(logo)
    return (
        
        <div>
            <img src={logo} alt="" />
        </div>
    )
}

export default LogoItem