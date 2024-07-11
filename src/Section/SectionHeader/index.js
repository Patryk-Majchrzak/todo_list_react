import { Header, SectionTitle } from "./styled";

const SectionHeader = ({title, additionalAttribute, additionalContent}) => (
    <Header $additionalAttribute={additionalAttribute}>
        <SectionTitle>{title}</SectionTitle>
        {additionalContent}
    </Header>
);

export default SectionHeader;