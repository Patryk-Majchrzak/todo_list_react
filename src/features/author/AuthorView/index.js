import Section from "../../../common/Section";
import SectionHeader from "../../../common/Section/SectionHeader";
import SectionBody from "../../../common/Section/SectionBody";
import { Main } from "../../tasks/TasksView/styled";
import { Paragraph, Photo } from "./styled";
import photo_main from "./photo_main.jpg"

const Author = () => (
    <Main>
        <Section
            sectionHeader=
            {<SectionHeader
                title="O autorze"
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
                            Cześć! 🖐️
                        </Paragraph>
                        <Paragraph>Nazywam się <strong>Patryk Majchrzak</strong> i mam 29 lat. Przez około 6 lat
                            pracowałem
                            w
                            <em>Infosysie</em> jako księgowy dla zagranicznych klientów (głównie dla filii angielskich,
                            irlandzkich
                            oraz
                            kanadyjskich).
                        </Paragraph>
                        <Paragraph>
                            Postanowiłem spróbować swoich sił jako front-end developer, a w przyszłości być może
                            full-stack
                        </Paragraph>
                    </>
                }
            />}
        />
    </Main>
)

export default Author;