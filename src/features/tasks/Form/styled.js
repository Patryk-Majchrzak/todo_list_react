import styled from "styled-components";

export const FormContainer = styled.form`
    display:grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width:${({theme}) => theme.breakpoints.large}px){
        grid-template-columns: 1fr
    }
`

export const Input = styled.input`
    border: 2px solid #eee;
    padding: 10px;
`

export const Button = styled.button`
    background-color: ${({theme}) => theme.colors.submitButtonBackground};
    color: ${({theme}) => theme.colors.submitButtonFont};
    padding:10px;
    border: none;
    transition: background 1s, transform 1.5s;

    &:hover{
        background-color: ${({theme}) => theme.colors.submitButtonBackgroundHover};
        transform: scale(1.2);
    }

    &:active{
        background-color: ${({theme}) => theme.colors.submitButtonBackgroundActive};
    }
`