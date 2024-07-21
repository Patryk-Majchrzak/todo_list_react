import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Section from "../../../common/Section";
import SectionHeader from "../../../common/Section/SectionHeader";
import SectionBody from "../../../common/Section/SectionBody";
import { Main } from "../../tasks/TasksView/styled";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { getTaskById } from "../tasksSlice";
import { Image, Strong } from "./style";
import arrow from "./arrow.png"

export const SingleTaskView = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id))

    return (
        <Main>
            <Section
                sectionHeader=
                {<SectionHeader
                    title={
                        <>
                            <Link to="/zadania">
                                <Image src={arrow} />
                            </Link>
                            {task ? task.content : "Nie znaleziono zadania 😢"}
                        </>
                    }
                    additionalAttribute="flex"
                />}
                sectionBody=
                {<SectionBody content=
                    {!!task && (
                        <>
                            <Strong>
                                Ukończono:
                            </Strong>
                            {" "}
                            {task.done ? "tak" : "nie"}
                        </>
                    )}
                />}
            />
        </Main>
    )
}