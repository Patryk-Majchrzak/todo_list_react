import Form from "./Form";
import Tasks from "./Tasks";
import Header from "./Header";
import Section from "./Section"
import SectionHeader from "./SectionHeader";
import SectionBody from "./SectionBody";
import ButtonsArea from "./ButtonsArea";
import Container from "./Container";

let tasks = [
    {
        id: 1,
        content: "zrobić coś",
        done: false
    },
    {
        id: 2,
        content: "zrobić coś innego",
        done: true
    }
];

let hideDone = false;

function App() {
    return (
        <Container>
            <Header title="Lista zadań" />
            <Section
                sectionHeader={<SectionHeader title="Dodaj nowe zadanie" />}
                sectionBody={<SectionBody content={<Form />} />} />
            <Section
                sectionHeader={<SectionHeader
                    title="Lista zadań"
                    additionalClass="section__header--withButtons"
                    additionalContent={<ButtonsArea
                        tasks={tasks}
                        hideDone={hideDone}
                    />}
                />}
                sectionBody={<SectionBody
                    additionalClass="section__body--withList"
                    content={<Tasks
                        tasks={tasks}
                        hideDone={hideDone} 
                        />}
                />}
            />
        </Container>
    );
}

export default App;