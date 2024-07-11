import { Header } from "./styled";

const SectionHeader = ({title, additionalAttribute, additionalContent}) => (
    <Header $additionalAttribute={additionalAttribute}>
        <h2>{title}</h2>
        {additionalContent}
    </Header>
);

export default SectionHeader;