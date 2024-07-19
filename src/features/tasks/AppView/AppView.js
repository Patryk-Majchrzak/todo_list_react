import Form from "../Form";
import Tasks from "../Tasks";
import MainHeader from "../../../common/MainHeader";
import Section from "../../../common/Section"
import SectionHeader from "../../../common/Section/SectionHeader";
import SectionBody from "../../../common/Section/SectionBody";
import ButtonsArea from "../ButtonsArea";
import { useTasks } from "../useTasks";
import { welcome } from "../../../utils/welcome"
import { Main } from "./styled";

welcome();

function AppView() {

    const {
        // tasks,
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
                    {<Form />}
                />}
            />
            <Section
                sectionHeader=
                {<SectionHeader
                    title="Lista zadań"
                    additionalAttribute="withButtons"
                    additionalContent=
                    {<ButtonsArea
                        hideDone={hideDone}
                        hideDoneTasks={hideDoneTasks}
                        setAllDone={setAllDone}
                    />}
                />}
                sectionBody=
                {<SectionBody
                    content=
                    {<Tasks
                        hideDone={hideDone}
                        toggleTaskDone={toggleTaskDone}
                        removeTask={removeTask}
                    />}
                />}
            />
        </Main>
    );
}

export default AppView;