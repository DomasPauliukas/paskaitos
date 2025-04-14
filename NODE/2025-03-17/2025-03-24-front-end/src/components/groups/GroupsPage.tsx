import { useAuth } from "../../AuthContext"
import ROLES from "../../config/roles"

const GroupsPage = () => {
    const { user } = useAuth()

    if(user?.role !== ROLES.ADMIN){
        return (
            <p>Access denied</p>
            )
        
    }

    return (
        <div>
            <h1>Groups page</h1>
        </div>
    )
}

export default GroupsPage