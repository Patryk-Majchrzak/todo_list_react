import "./style.css"

const Section = ({ sectionHeader, sectionBody}) => (
    <section className="section">
        {sectionHeader}
        {sectionBody}
    </section>
);

export default Section;