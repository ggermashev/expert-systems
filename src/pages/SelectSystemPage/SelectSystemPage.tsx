import { useMemo } from "react"
import { SelectSystemPageStyled } from "./SelectSystemPage.styled"
import SystemsStore from "../../store/SystemsStore"
import System from "../../components/System/System"
import { observer } from "mobx-react-lite"


const SelectSystemPage = observer(() => {

    const systems: string[] = useMemo(() => {
        return SystemsStore.getAllSystems()
    }, [SystemsStore.hasChanged])

    return (
        <SelectSystemPageStyled>
            <h1>Выберите экспертную систему</h1>
            {systems.map(sys => 
                <System title={sys}/>
            )}
        </SelectSystemPageStyled>
    )
})

export default SelectSystemPage