import styled from "styled-components";

export const FormContainer = styled.form`
    display:grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width:${({theme}) => theme.breakpoints.large}px){
        grid-template-columns: 1fr
    }
`