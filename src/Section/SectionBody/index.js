import { SectionBodyContainer } from "./styled";

const SectionBody = ({content, additionalAttribute}) => (
    <SectionBodyContainer $additionalAtribute={additionalAttribute}>
        {content}
    </SectionBodyContainer>
);

export default SectionBody;