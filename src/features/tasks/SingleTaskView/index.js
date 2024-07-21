import Section from "../../../common/Section";
import SectionHeader from "../../../common/Section/SectionHeader";
import SectionBody from "../../../common/Section/SectionBody";
import { Main } from "../../tasks/TasksView/styled";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

export const SingleTaskView = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id))

    return (
        <Main>
            <Section
                sectionHeader=
                {<SectionHeader
                    title={task ? task.content : "Nie znaleziono zadania 😢"}
                />}
                sectionBody=
                {<SectionBody content=
                    {
                    <>
                    <strong>
                        Ukończono:
                    </strong>
                    {" "}
                    {task.done ? "tak" : "nie"}
                    </>
                    }
                />}
            />
        </Main>
    )
}