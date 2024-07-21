import { List, ListItem, StyledNav, StyledNavLink } from "./styled"

const Nav = () => (
    <StyledNav>
        <List>
            <ListItem>
                <StyledNavLink to="/zadania" activeClassName="active">
                    Zadania
                </StyledNavLink>
            </ListItem>
            <ListItem>
                <StyledNavLink to="/autor" activeClassName="active">
                    O autorze
                </StyledNavLink>
            </ListItem>
        </List>
    </StyledNav>
)

export default Nav