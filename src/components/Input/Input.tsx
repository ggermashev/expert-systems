import React, {FC} from "react"
import { InputStyled, InputWrap } from "./Input.styled"

interface IInput {
    title: string;
    value: string;
    setValue: (val: string) => void;
    type?: "text" | "password",
    style?: Record<string, string>
}

const Input: FC<IInput> = ({title, value, setValue, type, style}) => {
    if (!type) {
        type = "text";
    }

    return (    
        <InputWrap style={style}>
            <p>{title}</p>
            <InputStyled 
                type={type} 
                value={value}
                onChange={(e) => {setValue(e.target.value)}}
            />
        </InputWrap>
    )
}

export default Input