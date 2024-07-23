import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom";
import Section from "../../../common/Section";
import SectionHeader from "../../../common/Section/SectionHeader";
import SectionBody from "../../../common/Section/SectionBody";
import { Main } from "../../tasks/TasksView/styled";
import { getTaskById, selectLanguage } from "../tasksSlice";
import { Image, Strong } from "./style";
import arrow from "./arrow.png"
import { toTasksView } from "../../../App/routing";
import { translations } from "../../../translations";

export const SingleTaskView = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id))

    const language = useSelector(selectLanguage);
    const tTask = translations["SingleTaskView"][language];
    const tNav = translations["Navigation"][language];

    return (
        <Main>
            <Section
                sectionHeader=
                {<SectionHeader
                    title={
                        <>
                            <Link to={toTasksView(tNav.section_1)}>
                                <Image src={arrow} />
                            </Link>
                            {task ? task.content : tTask.error}
                        </>
                    }
                    additionalAttribute="flex"
                />}
                sectionBody=
                {<SectionBody content=
                    {!!task && (
                        <>
                            <Strong>
                                {tTask.done}
                            </Strong>
                            {" "}
                            {task.done ? tTask.confirmation : tTask.negation}
                        </>
                    )}
                />}
            />
        </Main>
    )
}