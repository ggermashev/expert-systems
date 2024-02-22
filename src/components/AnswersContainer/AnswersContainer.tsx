import { FC, useMemo, useState } from "react";
import { AnswersContainerStyled, Row } from "./AnswersContainer.styled"
import { IQuestion } from "../../types";
import Block from "../Block/Block";
import AnswersStore from "../../store/Answers.store";
import QuestionsStore from "../../store/Questions.store";
import Button from "../Button/Button";
import { observer } from "mobx-react-lite";
import VariantsStore from "../../store/Variants.store";
import Input from "../Input/Input";
import { useNavigate } from "react-router-dom";
import SystemsStore from "../../store/SystemsStore";



interface IAnswersContainer {
    variantId?: number;
}

const AnswersContainer: FC<IAnswersContainer> = observer(({ variantId }) => {
    const navigate = useNavigate()

    const questions: IQuestion[] = useMemo(() => {
        const positiveIds = AnswersStore.getPositiveQuestionsId()
        const negativeIds = AnswersStore.getNegativeQuestionsId()
        return QuestionsStore.getQuestionsByIds([...positiveIds, ...negativeIds])
    }, [AnswersStore.answers, AnswersStore.activeVariantId])

    const variant = useMemo(() => {
        return VariantsStore.getTextById(AnswersStore.activeVariantId) || ""
    }, [AnswersStore.activeVariantId, VariantsStore.variants])

    const [title, setTitle] = useState("")

    return (
        <AnswersContainerStyled>
            <Row>
                <Input value={title} setValue={setTitle} title="Название ЭС"/>
                <Button onClick={() => {
                    SystemsStore.addSystem(title)
                    AnswersStore.addAllVariantsToAnswers(VariantsStore.variants.map(v => v.id))
                    QuestionsStore.loadQuestionsToBase(title);
                    VariantsStore.loadVariantsToBase(title)
                    AnswersStore.loadAnswersToBase(title)
                    navigate('/select')
                }}>Создать ЭС</Button>
            </Row>

            <h1>{variant ? `Условия ответа "${variant}"` : `Выберите ответ, чтобы посмотреть условия`}</h1>
            {questions?.map(q =>
                <Block 
                    key={`answer-${q.id}`} 
                    id={q.id} 
                    text={q.text} 
                    store={AnswersStore} 
                    type="answer"
                    onClick={() => {
                        const type = AnswersStore.removeItem(q.id)
                        if (type === "positive") {
                            AnswersStore.addNegativeItem(q.id)
                        } else {
                            AnswersStore.addPositiveItem(q.id)
                        }
                    }}
                />
            )}
        </AnswersContainerStyled>
    )
});

export default AnswersContainer