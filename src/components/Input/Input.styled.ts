import styled from "styled-components"
import { BLACK, BLUE, GOLD, WHITE } from "../../constants"

const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: start;

    p {
        margin: 0;
        padding: 0;
        color: ${WHITE};
    }
`

const InputStyled = styled.input`
    padding: .5em;
    background-color: ${WHITE};
    border-radius: .5em;
    width: 100%;
    color: ${BLACK};

    &:focus {
        outline-color: ${BLUE};
    }
`

export { InputWrap, InputStyled}