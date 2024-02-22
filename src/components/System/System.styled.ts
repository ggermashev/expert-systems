import styled from "styled-components";
import { BLUE, DARK_BLUE, GREY, LIGHT_BLUE, RED, WHITE } from "../../constants";

const SystemStyled = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1em;
    min-height: 100px;
    width: 80%;
    max-width: 800px;
    background-color: ${GREY};

    &:hover {
        cursor: pointer;
        background-color: ${DARK_BLUE};
    }

    .close {
        position: absolute;
        height: 1em;
        width: 1em;
        top: 0;
        right:0;
        color: ${WHITE};

        &:hover {
            cursor: pointer;
            color: ${RED};
        }
    }
`

export {SystemStyled}