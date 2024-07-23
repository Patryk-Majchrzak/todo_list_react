import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

export const Container = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.navBackground};
    padding: 10px;
`

export const StyledNav = styled.nav`
    flex-grow: 1;
`

export const List = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: center;
    padding: 0;

    @media(max-width:${({theme}) => theme.breakpoints.small}px){
        justify-content: flex-start;
    }
`

export const ListItem = styled.li`
    margin-left: 40px;
`

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.navLink};
    text-decoration: none;

    &.active {
        font-weight: bold;
    };

    &:hover {
        border-bottom: 1px solid;
    }
`

export const StyledSpan = styled.span`
    color: ${({ theme }) => theme.colors.navLink};
    margin-right: 10px;
`