/* eslint-disable no-case-declarations */
import GradesList from "./GradesList"
import GradeControls from "./GradeControls"
import { GradesContextProvider } from "./GradesContextProvide"

const GradesPage: React.FC = () => {

    return (
        <>
        <GradesContextProvider>

            <GradeControls />
            <GradesList/>

        </GradesContextProvider>
        </>

    )
}

export default GradesPage