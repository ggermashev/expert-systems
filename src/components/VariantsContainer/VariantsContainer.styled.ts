import styled from "styled-components";

const VariantsContainerStyled = styled.div`
    position: relative;
    height: 100vh;
    width: calc(100%/3);
    padding: .5em;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;

    overflow-y: auto;
`

export {VariantsContainerStyled}