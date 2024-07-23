import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Form from "./Form";
import TaskList from "./TaskList";
import MainHeader from "../../../common/MainHeader";
import Section from "../../../common/Section"
import SectionHeader from "../../../common/Section/SectionHeader";
import SectionBody from "../../../common/Section/SectionBody";
import ButtonsArea from "./ButtonsArea";
import { welcome } from "../../../utils/welcome"
import { Main } from "./styled";
import { Button } from "./Buttons/styled";
import { fetchExampleTasks, selectError, selectLoading } from "../tasksSlice";
import SearchTasks from "./SearchTasks";

welcome();

function TasksView() {

    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    const [t] = useTranslation("translation");

    if (!error) {
        return (
            <Main>
                <MainHeader title={t("tasksView.header")} />
                <Section
                    sectionHeader=
                    {<SectionHeader
                        title={t("tasksView.formTitle")}
                        additionalAttribute="grid"
                        additionalContent=
                        {<Button
                            onClick={() => dispatch(fetchExampleTasks())}
                            disabled={loading}
                        >
                            {loading ? t("tasksView.loadingExampleTasks") : t("tasksView.downloadExampleTasks")}
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
                        title={t("tasksView.searchTitle")}
                    />}
                    sectionBody=
                    {<SectionBody content=
                        {<SearchTasks />}
                    />}
                />

                <Section
                    sectionHeader=
                    {<SectionHeader
                        title={t("tasksView.header")}
                        additionalAttribute="grid"
                        additionalContent=
                        {<ButtonsArea />}
                    />}
                    sectionBody=
                    {<SectionBody
                        content=
                        {<TaskList />}
                    />}
                />
            </Main>
        );
    } else {
        return (
            <Main>
                <Section
                    sectionHeader=
                    {<SectionHeader
                        title={t("viewTasks.exampleTasksErrorHeader")}
                    />}
                    sectionBody=
                    {<SectionBody content=
                        {t("viewTasks.exampleTasksErrorBody")}
                    />}
                />
            </Main>
        )
    }
}
export default TasksView;