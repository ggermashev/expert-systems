import { FC } from "react";
import { ButtonStyled } from "./Button.styled"

interface IButton {
    children: React.ReactNode;
    onClick: () => void;
}

const Button: FC<IButton> = ({children, onClick}) => {
    return (
        <ButtonStyled onClick={onClick}>
            <h2>{children}</h2>
        </ButtonStyled>
    )
}

export default Button