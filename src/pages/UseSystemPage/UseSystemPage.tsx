import { observer } from "mobx-react-lite"
import Button from "../../components/Button/Button"
import { QuestionWrap, Row, UseSystemPageStyled } from "./UseSystemPage.styled"
import SystemsStore from "../../store/SystemsStore";
import { useEffect, useState } from "react";
import QuestionsStore from "../../store/Questions.store";
import VariantsStore from "../../store/Variants.store";
import AnswersStore from "../../store/Answers.store";
import { useNavigate } from "react-router-dom";
import { LIGHT_BLUE } from "../../constants";


const UseSystemPage = observer(() => {
    const navigate = useNavigate()

    useEffect(() => {
        if (!SystemsStore.currentSystem) {
            navigate('/select')
        }
    }, [SystemsStore.currentSystem])

    useEffect(() => {
        const title = SystemsStore.currentSystem
        QuestionsStore.loadQuestionsFromBase(title)
        VariantsStore.loadVariantsFromBase(title)
        AnswersStore.loadAnswersFromBase(title)
    }, [SystemsStore.currentSystem])

    const [questionIndex, setQuestionIndex] = useState(0)
    const [positiveAnswersId, setPositiveAnswersId] = useState<number[]>([])

    return (
        <UseSystemPageStyled>
            <h1>ЭС {SystemsStore.currentSystem}</h1>
            <QuestionWrap>
                {questionIndex < QuestionsStore.questions.length && <p>{QuestionsStore.questions[questionIndex]?.text}</p>}
                {questionIndex < QuestionsStore.questions.length
                    ? <Row>
                        <Button onClick={() => {
                            setQuestionIndex(questionIndex+1)
                            setPositiveAnswersId([...positiveAnswersId, QuestionsStore.questions[questionIndex]?.id || -1])
                        }}>Да</Button>
                        <Button onClick={() => {
                            setQuestionIndex(questionIndex+1)
                        }}>Нет</Button>
                    </Row>
                    : <>
                        {AnswersStore.getVariantsIdByQuestions(positiveAnswersId).map(id =>
                            <p>
                                <span style={{color: LIGHT_BLUE, fontSize: '1.5em'}}>{"Ответ: "}</span>
                                {VariantsStore.getTextById(id)}
                            </p>
                        ) || <p>Ответа не найдено</p>}
                        
                        <Button onClick={() => {navigate('/select')}}>Спасибо!</Button>
                    </>
                }
                <Row>
                    
                </Row>
            </QuestionWrap>
            
        </UseSystemPageStyled>
    )
});

export default UseSystemPage