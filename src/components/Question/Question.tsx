import { FC } from "react"
import { QuestionStyled } from "./Question.styled"
import { IQuestion } from "../../types"




const Question: FC<IQuestion> = ({text}) => {
    return (
        <QuestionStyled>
            <p>{text}</p>
        </QuestionStyled>
    )
}

export default Question