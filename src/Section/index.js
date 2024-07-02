import "./style.css"

const Section = ({ title, body, extraHeaderContent, extraHeaderClass, extraBodyClass }) => (
    <section className="section">
        <header className={`section__header ${extraHeaderClass}`}>
            <h2>{title}</h2>
            {extraHeaderContent}
        </header>
        <div className={`section__body ${extraBodyClass}`}>
            {body}
        </div>
    </section>
);

export default Section;