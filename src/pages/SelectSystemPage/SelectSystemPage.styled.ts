import styled from "styled-components"
import { BLACK, BLUE, WHITE } from "../../constants"

const SelectSystemPageStyled = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding: 1em;

    background-color: ${BLACK};
    color: ${WHITE};

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;

    h1 {
        color: ${BLUE};
    }
`

export {SelectSystemPageStyled}