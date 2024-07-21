import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

export const StyledNav = styled.nav`
    background-color: teal;
    padding: 10px;
`

export const List = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: center;
`

export const ListItem = styled.li`
    margin-left: 10px;
`

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;

    &.active {
        color: #c6eca3;
    }
`