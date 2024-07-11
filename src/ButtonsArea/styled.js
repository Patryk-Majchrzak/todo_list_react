import styled from "styled-components";

export const StyledButtonsArea = styled.div`
    display: flex;
    flex-wrap:wrap;
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