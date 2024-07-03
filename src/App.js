import Form from "./Form";
import Tasks from "./Tasks";
import Header from "./Header";
import Section from "./Section"
import SectionHeader from "./SectionHeader";
import SectionBody from "./SectionBody";
import ButtonsArea from "./ButtonsArea";
import Container from "./Container";
import { useState } from "react";

function App() {

    const [tasks, setTasks] = useState(
        [
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
        ]
    );

    const [hideDone, setHideDone] = useState(false)

    const toggleTaskDone = (id) => {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            return task;
        }));
    };

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
                        toggleTaskDone={toggleTaskDone}
                    />}
                />}
            />
        </Container>
    );
}

export default App;