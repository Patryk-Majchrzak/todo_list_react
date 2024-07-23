import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom";
import { useTranslation } from "react-i18next";
import Section from "../../../common/Section";
import SectionHeader from "../../../common/Section/SectionHeader";
import SectionBody from "../../../common/Section/SectionBody";
import { Main } from "../../tasks/TasksView/styled";
import { getTaskById } from "../tasksSlice";
import { Image, Strong } from "./style";
import arrow from "./arrow.png"
import { toTasksView } from "../../../App/routing";

export const SingleTaskView = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id))

    const [t] = useTranslation("translation");

    return (
        <Main>
            <Section
                sectionHeader=
                {<SectionHeader
                    title={
                        <>
                            <Link to={toTasksView()}>
                                <Image src={arrow} />
                            </Link>
                            {task ? task.content : t("SingleTaskView.error")}
                        </>
                    }
                    additionalAttribute="flex"
                />}
                sectionBody=
                {<SectionBody content=
                    {!!task && (
                        <>
                            <Strong>
                                {t("SingleTaskView.done")}
                            </Strong>
                            {" "}
                            {task.done ? t("SingleTaskView.confirmation") : t("SingleTaskView.negation")}
                        </>
                    )}
                />}
            />
        </Main>
    )
}