import styled, {css} from "styled-components";

export const List = styled.ul`
    padding-left: 0;
`

export const ListItem = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    text-decoration: none;
    align-items: center;
    margin-bottom: 10px;
    grid-gap: 10px;
    padding:5px;
    border-bottom: 2px solid ${({theme}) => theme.colors.borders};

    ${({$hidden}) => $hidden && css`
        display: none;
    `}
`  

export const Button = styled.button`
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

export const TaskContent = styled.span`
    ${({$done}) => $done && css`
        text-decoration: line-through;
    `}
`