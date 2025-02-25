import './KnowledgeItem.css'

type KnowledgeItemType = {
    role: string
    level: string
    languages: string[]
    tools: string []
}

const KnowledgeItem: React.FC<KnowledgeItemType> = ({role, level, languages, tools}) => {

    const roleTag = role ? <span>{role}</span> : ''
    const levelTag = level ? <span>{level}</span> : ''

    return (

        <div className='knowledgeItem'>
            
            {roleTag}
            {levelTag}
            {languages.length > 0 && languages.map((language,index) => <span key={index}>{language}</span>)}
            {tools.length > 0 && tools.map((tool, index) => <span key={index}>{tool}</span>)}

        </div>
    )
}

export default KnowledgeItem