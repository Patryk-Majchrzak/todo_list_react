import LanguageSelector from "../LanguageSelector";
import { toAuthorView, toTasksView } from "../routing"
import { List, ListItem, StyledNav, StyledNavLink, Container, StyledSpan } from "./styled"
import { useTranslation } from "react-i18next";

const Navigation = () => {

    const [t] = useTranslation("translation");
        
    return (
        <Container>
            <StyledNav>
                <List>
                    <ListItem>
                        <StyledNavLink to={toTasksView(t("Navigation.section_1"))} activeClassName="active">
                            {t("Navigation.section_1")}
                        </StyledNavLink>
                    </ListItem>
                    <ListItem>
                        <StyledNavLink to={toAuthorView(t("Navigation.section_2"))} activeClassName="active">
                            {t("Navigation.section_2")}
                        </StyledNavLink>
                    </ListItem>
                </List>
            </StyledNav>
            <StyledSpan>{t("Navigation.language")}</StyledSpan> <LanguageSelector />
        </Container>
    );
};

export default Navigation;