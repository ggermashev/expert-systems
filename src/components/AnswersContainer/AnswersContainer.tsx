import { FC, useMemo } from "react";
import { AnswersContainerStyled } from "./AnswersContainer.styled"
import { IQuestion } from "../../types";
import Question from "../Question/Question";


interface IAnswersContainer {
    variantId?: number;
}

const AnswersContainer: FC<IAnswersContainer> = ({variantId}) => {

    const answers: IQuestion[] = useMemo(() => {
        //get by wariant id - get questions
        return []
    }, [])

    return (
        <AnswersContainerStyled>
            {answers?.map(ans => 
                <Question key={`answer-${ans.id}`} id={ans.id} text={ans.text}/>    
            )}
        </AnswersContainerStyled>
    )
}

export default AnswersContainer