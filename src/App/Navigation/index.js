import LanguageSelector from "../LanguageSelector";
import { toAuthorView, toTasksView } from "../routing"
import { List, ListItem, StyledNav, StyledNavLink, Container, StyledSpan } from "./styled"

const Navigation = () => (
    <Container>
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
        <StyledSpan>Lang:</StyledSpan> <LanguageSelector />
    </Container>
);

export default Navigation;