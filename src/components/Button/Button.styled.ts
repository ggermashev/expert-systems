import styled from "styled-components"
import { BLUE, GOLD, LIGHT_BLUE, WHITE } from "../../constants"

const ButtonStyled = styled.button`
    background-color: ${BLUE};
    color: ${WHITE};
    border: none;
    padding: 1em;
    border-radius: .5em;
    min-width: 200px;

    &:hover {
        cursor: pointer;
        background-color: ${LIGHT_BLUE};
    }
`

export {ButtonStyled}