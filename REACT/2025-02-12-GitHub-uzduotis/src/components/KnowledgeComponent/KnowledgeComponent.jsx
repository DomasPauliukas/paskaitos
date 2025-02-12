
import KnowledgeItem from "../KnowledgeItem/KnowledgeItem"


function KnowledgeComponent (props) {
    const {data} = props
    
    return (
        <>
            {data.map((item,index) => (
                <KnowledgeItem key={index} data={item}/>
            ))}

        </> 
    )
}
export default KnowledgeComponent