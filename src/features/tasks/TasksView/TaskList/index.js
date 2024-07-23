import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getTaskByQuery, toggleTaskDone, removeTask, selectHideDone } from "../../tasksSlice";
import { ListItem, TaskContent, List, StyledLink } from "./styled";
import { TaskButton } from "../Buttons/styled";
import { useGetQueryParameter } from "../useGetQueryParameter";
import { toSingleTaskView } from "../../../../App/routing";

const TaskList = () => {
    const query = useGetQueryParameter().get("szukaj");
    const tasks = useSelector(state => getTaskByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    const [t] = useTranslation("translation");

    return (
        <List>
            {tasks.map(task => (
                <ListItem $hidden={task.done & hideDone} key={task.id}>
                    <TaskButton $toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
                        {task.done ? "✔" : ""}
                    </TaskButton>
                    <TaskContent $done={task.done}>
                        <StyledLink to={`${toSingleTaskView(t("Navigation.section_1"), {id: task.id})}`}>{task.content}</StyledLink>
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