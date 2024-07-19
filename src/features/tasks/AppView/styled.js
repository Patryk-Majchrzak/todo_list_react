import styled from "styled-components";

export const Main = styled.main`
    max-width:900px;
    margin:0 auto;
    overflow-wrap: anywhere;
    line-height: 1.15;

    @media(max-width:${({theme}) => theme.breakpoints.large}px){
        max-width: 98%;
    }
`