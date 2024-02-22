import { DndProvider } from 'react-dnd-multi-backend'
import AnswersContainer from "../../components/AnswersContainer/AnswersContainer"
import QuestionsContainer from "../../components/QuestionsContainer/QuestionsContainer"
import VariantsContainer from "../../components/VariantsContainer/VariantsContainer"
import { CreateSystemPageStyled } from "./CreateSystemPage.styled"
import { HTML5toTouch } from 'rdndmb-html5-to-touch'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import QuestionsStore from '../../store/Questions.store'
import VariantsStore from '../../store/Variants.store'
import AnswersStore from '../../store/Answers.store'


const CreateSystemPage = observer(() => {

    useEffect(() => {
        QuestionsStore.questions = []
        VariantsStore.variants = []
        AnswersStore.answers = []
    }, [])

    return (
        <CreateSystemPageStyled>
            <DndProvider options={HTML5toTouch}>
                <QuestionsContainer/>
                <VariantsContainer/>
                <AnswersContainer/>
            </DndProvider>
        </CreateSystemPageStyled>
    )
});

export {CreateSystemPage}