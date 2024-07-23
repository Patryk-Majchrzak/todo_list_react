import { useDispatch, useSelector } from "react-redux";
import { getTaskByQuery, toggleTaskDone, removeTask, selectHideDone, selectLanguage } from "../../tasksSlice";
import { ListItem, TaskContent, List, StyledLink } from "./styled";
import { TaskButton } from "../Buttons/styled";
import { useGetQueryParameter } from "../useGetQueryParameter";
import { toSingleTaskView } from "../../../../App/routing";
import { translations } from "../../../../App/LanguageSelector/translations";

const TaskList = () => {
    const query = useGetQueryParameter().get("szukaj");
    const tasks = useSelector(state => getTaskByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    const language = useSelector(selectLanguage);
    const tNav = translations["Navigation"][language];

    return (
        <List>
            {tasks.map(task => (
                <ListItem $hidden={task.done & hideDone} key={task.id}>
                    <TaskButton $toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
                        {task.done ? "✔" : ""}
                    </TaskButton>
                    <TaskContent $done={task.done}>
                        <StyledLink to={`${toSingleTaskView(tNav.section_1, {id: task.id})}`}>{task.content}</StyledLink>
                    </TaskContent>
                    <TaskButton $remove onClick={() => dispatch(removeTask(task.id))}>
                        🗑
                    </TaskButton>
                </ListItem>
            ))}
        </List>
    )
};

export default TaskList;