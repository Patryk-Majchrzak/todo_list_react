import LanguageSelector from "../LanguageSelector";
import { toAuthorView, toTasksView } from "../routing"
import { List, ListItem, StyledNav, StyledNavLink, Container, StyledSpan } from "./styled"
import { translations } from "../../translations";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../features/tasks/tasksSlice";

const Navigation = () => {

    const language = useSelector(selectLanguage);
    const t = translations["Navigation"][language];
        
    return (
        <Container>
            <StyledNav>
                <List>
                    <ListItem>
                        <StyledNavLink to={toTasksView(t.section_1)} activeClassName="active">
                            {t.section_1}
                        </StyledNavLink>
                    </ListItem>
                    <ListItem>
                        <StyledNavLink to={toAuthorView(t.section_2)} activeClassName="active">
                            {t.section_2}
                        </StyledNavLink>
                    </ListItem>
                </List>
            </StyledNav>
            <StyledSpan>{t.language}</StyledSpan> <LanguageSelector />
        </Container>
    );
};

export default Navigation;