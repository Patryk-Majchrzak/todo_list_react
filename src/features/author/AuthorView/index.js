import { useTranslation } from "react-i18next";
import Section from "../../../common/Section";
import SectionHeader from "../../../common/Section/SectionHeader";
import SectionBody from "../../../common/Section/SectionBody";
import { Main } from "../../tasks/TasksView/styled";
import { Paragraph, Photo } from "./styled";
import photo_main from "./photo_main.jpg";

const AuthorView = () => {

    const [t] = useTranslation("translation");

    return (
        <Main>
            <Section
                sectionHeader=
                {<SectionHeader
                    title={t("Author.title")}
                    additionalAttribute="centered"
                />}
                sectionBody=
                {<SectionBody content=
                    {
                        <>
                            <Paragraph $centered>
                                <Photo src={photo_main} />
                            </Paragraph>
                            <Paragraph $centered>
                                {t("Author.greeting")}
                            </Paragraph>
                            <Paragraph>
                                {t("Author.name")} {" "} <strong>Patryk Majchrzak</strong> {" "} 
                                {t("Author.age")} 
                                {t("Author.workPlace")}
                                <em>{t("Author.Infosys")}</em> {" "} 
                                {t("Author.workPosition")}
                            </Paragraph>
                            <Paragraph>
                                {t("Author.future")}
                            </Paragraph>
                        </>
                    }
                />}
            />
        </Main>
    )
}

export default AuthorView;