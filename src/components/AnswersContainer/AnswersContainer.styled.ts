import styled from "styled-components";
import { WHITE } from "../../constants";

const AnswersContainerStyled = styled.div`
    position: relative;
    height: 100vh;
    width: calc(100%/3);
    padding: .5em;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;

    overflow-y: auto;

    h1 {
        color: ${WHITE};
        text-align: center;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;

`

export {AnswersContainerStyled, Row}