import './LogoItem.css'

type LogoItemProps = {
    logo: string
}

const LogoItem: React.FC<LogoItemProps> = ({logo}) => {
    return (
        <div className='jobLogo'>
            <img src={logo} alt="" />
        </div>
    )
}

export default LogoItem