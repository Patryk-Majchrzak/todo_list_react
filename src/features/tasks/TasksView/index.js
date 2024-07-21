import { useDispatch } from "react-redux";
import Form from "../Form";
import Tasks from "../TaskList";
import MainHeader from "../../../common/MainHeader";
import Section from "../../../common/Section"
import SectionHeader from "../../../common/Section/SectionHeader";
import SectionBody from "../../../common/Section/SectionBody";
import ButtonsArea from "../ButtonsArea";
import { welcome } from "../../../utils/welcome"
import { Main } from "./styled";
import { Button } from "../Buttons/styled";
import { fetchExampleTasks } from "../tasksSlice";

welcome();

function TasksView() {

    const dispatch = useDispatch();

    return (
        <Main>
            <MainHeader title="Lista zadań" />
            <Section
                sectionHeader=
                {<SectionHeader
                    title="Dodaj nowe zadanie"
                    additionalAttribute="withButtons"
                    additionalContent=
                    {<Button
                        onClick={() => dispatch(fetchExampleTasks())} >
                        Pobierz przykładowe zadania
                    </Button>}
                />}
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
                    {<ButtonsArea />}
                />}
                sectionBody=
                {<SectionBody
                    content=
                    {<Tasks />}
                />}
            />
        </Main>
    );
}

export default TasksView;