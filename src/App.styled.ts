import styled from "styled-components";
import { BLACK, BLUE, WHITE } from "./constants";

const AppStyled = styled.div`
    .back {
        position: absolute;
        width: 2em;
        height: 2em;
        color: ${WHITE};
        z-index: 100;

        &:hover {
            cursor: pointer;
            color: ${BLUE};
        }
    }
`

export {AppStyled}