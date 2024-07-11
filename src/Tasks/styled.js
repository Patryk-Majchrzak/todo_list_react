import styled, {css} from "styled-components";

export const ListItem = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    text-decoration: none;
    align-items: center;
    margin-bottom: 10px;
    grid-gap: 10px;
    padding:5px;
    border-bottom: 2px solid #ddd;

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
        background-color: hsl(160, 76%, 25%);

        &:hover{
            background-color: hsl(124, 83%, 40%);;
        }

        &:active{
            background-color: hsl(124, 83%, 55%);
        }
    `}

    ${({$remove}) => $remove && css`
        background-color: hsl(10, 96%, 53%);

        &:hover{
            background-color: hsl(10, 96%, 75%);
        }

        &:active{
            background-color: hsl(10, 96%, 85%);
        }
    `}
`

export const TaskContent = styled.span`
    ${({$done}) => $done && css`
        text-decoration: line-through;
    `}
`