import styled, {css} from "styled-components";

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

export const FormButton = styled.button`
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

export const TaskButton = styled.button`
    width:30px;
    height:30px;
    border:none;
    color: white;
    transition: background 1s;

    ${({$toggleDone}) => $toggleDone && css`
        background-color: ${({theme}) => theme.colors.toggleDoneButton};

        &:hover{
            background-color: ${({theme}) => theme.colors.toggleDoneButtonHover};
        }

        &:active{
            background-color: ${({theme}) => theme.colors.toggleDoneButtonActive};
        }
    `}

    ${({$remove}) => $remove && css`
        background-color: ${({theme}) => theme.colors.removeButton};

        &:hover{
            background-color: ${({theme}) => theme.colors.removeButtonHover};
        }

        &:active{
            background-color: ${({theme}) => theme.colors.removeButtonActive};
        }
    `}
`
