import styled from "styled-components";
import { GREY, RED, WHITE } from "../../constants";


const WrapStyled = styled.div`
    width: 100%;
    min-height: 100px;
    position: relative;

    .close {
        position: absolute;
        width: 1em;
        height: 1em;

        top: 0;
        right: 0;
        color: ${WHITE};

        &:hover {
            cursor: pointer;
            color: ${RED};
        }
    }
`

const BlockStyled = styled.textarea`
    position: relative;
    width: 100%;
    min-height: 100px;
    border: 1px solid solid ${WHITE};
    border-radius: .5em;
    position: relative;
    background-color: ${GREY};
    color: ${WHITE};
    padding: 1em;
    resize: none;
    outline: none;

    &:hover {
        cursor: pointer;
    }

`

export {BlockStyled, WrapStyled}