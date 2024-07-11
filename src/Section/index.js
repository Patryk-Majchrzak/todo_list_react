import { SectionContainer } from "./styled";

const Section = ({ sectionHeader, sectionBody}) => (
    <SectionContainer>
        {sectionHeader}
        {sectionBody}
    </SectionContainer>
);

export default Section;