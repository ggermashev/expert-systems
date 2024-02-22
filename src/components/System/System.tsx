import { FC } from "react"
import { SystemStyled } from "./System.styled"
import { useNavigate } from "react-router-dom"
import { observer } from "mobx-react-lite"
import SystemsStore from "../../store/SystemsStore"
import CloseIcon from '@mui/icons-material/Close';
import AnswersStore from "../../store/Answers.store"
import QuestionsStore from "../../store/Questions.store"
import VariantsStore from "../../store/Variants.store"

interface ISystem {
    title: string
}

const System: FC<ISystem> = observer(({title}) => {
    const navigate = useNavigate()

    return (
        <SystemStyled
            onClick={() => {
                SystemsStore.currentSystem = title
                navigate('/use')
            }}
        >
            <CloseIcon 
                className="close"
                onClick={(e) => {
                    e.stopPropagation()
                    AnswersStore.removeSystem(title)
                    QuestionsStore.removeSystem(title)
                    VariantsStore.removeSystem(title)
                    SystemsStore.removeSystem(title)
                    SystemsStore.hasChanged = !SystemsStore.hasChanged
                }}
            />
            <h3>{title}</h3>
        </SystemStyled>
    )
});

export default System