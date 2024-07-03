import "./style.css"

const SectionBody = ({content, additionalClass}) => (
    <div className = {`section__body ${additionalClass}`}>
        {content}
    </div>
);

export default SectionBody;