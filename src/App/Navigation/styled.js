import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

export const StyledNav = styled.nav`
    background-color: ${({theme}) => theme.colors.navBackground};
    padding: 10px;
`

export const List = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: center;
    padding: 0;
`

export const ListItem = styled.li`
    margin-left: 40px;
`

export const StyledNavLink = styled(NavLink)`
    color: ${({theme}) => theme.colors.navLink};
    text-decoration: none;

    &.active {
        font-weight: bold;
    };

    &:hover {
        border-bottom: 1px solid;
    }
`