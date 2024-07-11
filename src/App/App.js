import Form from "../Form";
import Tasks from "../Tasks";
import MainHeader from "../MainHeader";
import Section from "../Section"
import SectionHeader from "../Section/SectionHeader";
import SectionBody from "../Section/SectionBody";
import ButtonsArea from "../ButtonsArea";
import { useTasks } from "../useTasks";
import { welcome } from "../utils/welcome";
import { Main } from "./styled";

welcome();

function App() {

    const {
        tasks,
        hideDone,
        toggleTaskDone,
        removeTask,
        hideDoneTasks,
        setAllDone,
        addNewTask,
    } = useTasks();

    return (
        <Main>
            <MainHeader title="Lista zadań" />
            <Section
                sectionHeader={<SectionHeader title="Dodaj nowe zadanie" />}
                sectionBody=
                {<SectionBody content=
                    {<Form addNewTask={addNewTask} />}
                />}
            />
            <Section
                sectionHeader=
                {<SectionHeader
                    title="Lista zadań"
                    additionalAttribute="withButtons"
                    additionalContent=
                    {<ButtonsArea
                        tasks={tasks}
                        hideDone={hideDone}
                        hideDoneTasks={hideDoneTasks}
                        setAllDone={setAllDone}
                    />}
                />}
                sectionBody=
                {<SectionBody
                    content=
                    {<Tasks
                        tasks={tasks}
                        hideDone={hideDone}
                        toggleTaskDone={toggleTaskDone}
                        removeTask={removeTask}
                    />}
                />}
            />
        </Main>
    );
}

export default App;