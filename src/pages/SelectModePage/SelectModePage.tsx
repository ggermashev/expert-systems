import { useNavigate } from "react-router-dom"
import Button from "../../components/Button/Button"
import { SelectModePageStyled } from "./SelectModePage.styled"


const SelectModePage = () => {
    const navigate = useNavigate()

    return (
        <SelectModePageStyled>
            <Button onClick={() => {navigate('/select')}}>Использовать ЭС</Button>
            <Button onClick={() => {navigate('/create')}}>Создать ЭС</Button>
        </SelectModePageStyled>
    )   
}

export default SelectModePage