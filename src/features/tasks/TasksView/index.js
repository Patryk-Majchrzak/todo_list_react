import { useDispatch, useSelector } from "react-redux";
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
import { fetchExampleTasks, selectError, selectLanguage, selectLoading } from "../tasksSlice";
import SearchTasks from "./SearchTasks";
import { translations } from "../../../translations";

welcome();

function TasksView() {

    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    const language = useSelector(selectLanguage);
    const t = translations["tasksView"][language];

    if (!error) {
        return (
            <Main>
                <MainHeader title={t.header} />
                <Section
                    sectionHeader=
                    {<SectionHeader
                        title={t.formTitle}
                        additionalAttribute="grid"
                        additionalContent=
                        {<Button
                            onClick={() => dispatch(fetchExampleTasks())}
                            disabled={loading}
                        >
                            {loading ? t.loadingExampleTasks : t.downloadExampleTasks}
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
                        title={t.searchTitle}
                    />}
                    sectionBody=
                    {<SectionBody content=
                        {<SearchTasks />}
                    />}
                />

                <Section
                    sectionHeader=
                    {<SectionHeader
                        title={t.header}
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
                        title={t.exampleTasksErrorHeader}
                    />}
                    sectionBody=
                    {<SectionBody content=
                        {t.exampleTasksErrorBody}
                    />}
                />
            </Main>
        )
    }
}
export default TasksView;