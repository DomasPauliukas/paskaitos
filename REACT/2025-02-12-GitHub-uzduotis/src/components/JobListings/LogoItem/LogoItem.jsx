import './LogoItem.css'


function LogoItem ({logo}) {
    return (
        <div className='jobLogo'>
            <img src={logo} alt="" />
        </div>
    )
}

export default LogoItem