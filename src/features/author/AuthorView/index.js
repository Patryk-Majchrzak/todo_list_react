import { useSelector } from "react-redux";
import { translations } from "../../../translations";
import { selectLanguage } from "../../tasks/tasksSlice";
import Section from "../../../common/Section";
import SectionHeader from "../../../common/Section/SectionHeader";
import SectionBody from "../../../common/Section/SectionBody";
import { Main } from "../../tasks/TasksView/styled";
import { Paragraph, Photo } from "./styled";
import photo_main from "./photo_main.jpg";

const AuthorView = () => {

    const language = useSelector(selectLanguage);
    const t = translations["Author"][language];

    return (
        <Main>
            <Section
                sectionHeader=
                {<SectionHeader
                    title={t.title}
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
                                {t.greeting}
                            </Paragraph>
                            <Paragraph>
                                {t.name} {" "} <strong>Patryk Majchrzak</strong> {" "} 
                                {t.age} 
                                {t.workPlace}
                                <em>{t.Infosys}</em> {" "} 
                                {t.workPosition}
                            </Paragraph>
                            <Paragraph>
                                {t.future}
                            </Paragraph>
                        </>
                    }
                />}
            />
        </Main>
    )
}

export default AuthorView;