import { toAuthorView, toTasksView } from "../routing"
import { List, ListItem, StyledNav, StyledNavLink } from "./styled"

const Nav = () => (
    <StyledNav>
        <List>
            <ListItem>
                <StyledNavLink to={toTasksView()} activeClassName="active">
                    Zadania
                </StyledNavLink>
            </ListItem>
            <ListItem>
                <StyledNavLink to={toAuthorView()} activeClassName="active">
                    O autorze
                </StyledNavLink>
            </ListItem>
        </List>
    </StyledNav>
)

export default Nav