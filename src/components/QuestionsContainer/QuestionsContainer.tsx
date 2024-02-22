import { useMemo } from "react";
import { QuestionsContainerStyled } from "./QuestionsContainer.styled";
import Block from "../Block/Block";
import { IQuestion } from "../../types";
import Button from "../Button/Button";
import QuestionsStore from "../../store/Questions.store";
import { observer } from "mobx-react-lite";


const QuestionsContainer = observer(() => {

    return (
        <QuestionsContainerStyled>
            <Button onClick={() => {
                QuestionsStore.questions = [...QuestionsStore.questions, { id: Math.random(), text: "" }]
            }}>Добавить вопрос</Button>
            {QuestionsStore.questions?.map(q =>
                <Block key={`question-${q.id}`} id={q.id} text={q.text} store={QuestionsStore} type="question"/>
            )}
        </QuestionsContainerStyled>
    )
});

export default QuestionsContainer;