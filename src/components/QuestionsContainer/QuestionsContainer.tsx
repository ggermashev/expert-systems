import { useMemo } from "react";
import { QuestionsContainerStyled } from "./QuestionsContainer.styled";
import Question from "../Question/Question";
import { IQuestion } from "../../types";
import Button from "../Button/Button";


const QuestionsContainer = () => {

    const questions: IQuestion[] = useMemo(() => {
        return [];
    }, [])

    return (
        <QuestionsContainerStyled>
            <Button onClick={() => {}}>Добавить вопрос</Button>
            {questions?.map(q =>
                <Question key={`question-${q.id}`} id={q.id} text={q.text}/>    
            )}
        </QuestionsContainerStyled>
    )
}

export default QuestionsContainer;