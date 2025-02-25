import './Position.css'


type PositionProps = {
    position: string
  };

const Position: React.FC<PositionProps> = ({position}) => {
    return (
        <div className='position'>
            <p>{position}</p>
        </div>
    )
}
export default Position