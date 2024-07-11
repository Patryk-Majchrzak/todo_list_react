import styled from "styled-components";

export const SectionBodyContainer = styled.div`
    padding: 25px;

    @media(max-width:${({theme}) => theme.breakpoints.small}px){
        padding:5px;
    }
`