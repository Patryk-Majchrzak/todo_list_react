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

export const Button = styled.button`
    color: ${({theme}) => theme.colors.listInteractionButton};
    border:none;
    background: none;
    transition: color 0.4s;

    @media (max-width:${({theme}) => theme.breakpoints.large}px){
        flex-basis: 100%;
        margin-bottom: 20px;
    }

    &:hover{
        cursor: pointer;
        color: ${({theme}) => theme.colors.listInteractionButtonHover};
    }

    &:active{
        color: ${({theme}) => theme.colors.listInteractionButtonActive};
    }

    &:disabled{
        color: ${({theme}) => theme.colors.ButtonDisabled};
    }
`