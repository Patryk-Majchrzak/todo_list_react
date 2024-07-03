import "./style.css";

const SectionHeader = ({title, additionalClass, additionalContent}) => (
    <header className={`section__header ${additionalClass}`}>
        <h2>{title}</h2>
        {additionalContent}
    </header>
);

export default SectionHeader;