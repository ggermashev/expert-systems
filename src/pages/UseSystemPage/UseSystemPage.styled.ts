import styled from "styled-components";
import { BLACK, GREY, WHITE } from "../../constants";

const UseSystemPageStyled = styled.div`
    min-height: 100vh;
    overflow-y: auto;
    width: 100%;
    background-color: ${BLACK};
    color: ${WHITE};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const QuestionWrap = styled.div`
    height: 100%;
    width: 90%;
    max-width: 600px;
    padding-top: 3em;

    display: flex;
    flex-direction: column;
    justify-content: start;
    min-height: 400px;
    gap: 3em;

    p {
        background-color: ${GREY};
        padding: 2em;
        width: 100%;
        text-align: center;
        box-shadow: 0 0 1em ${WHITE};
    }
`

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export {UseSystemPageStyled, QuestionWrap, Row}