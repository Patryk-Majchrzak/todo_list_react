import styled, {css} from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom";

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

export const TaskContent = styled.span`
    ${({$done}) => $done && css`
        text-decoration: line-through;
    `}
`

export const StyledLink = styled(Link)`
    text-decoration: none;
` 