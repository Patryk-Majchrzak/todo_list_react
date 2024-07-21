import { useDispatch, useSelector } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from "../tasksSlice";
import { ListItem, TaskContent, List } from "./styled";
import { TaskButton } from "../Buttons/styled";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Tasks = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <ListItem $hidden={task.done & hideDone} key={task.id}>
                    <TaskButton $toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
                        {task.done ? "✔" : ""}
                    </TaskButton>
                    <TaskContent $done={task.done}>
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
                    </TaskContent>
                    <TaskButton $remove onClick={() => dispatch(removeTask(task.id))}>
                        🗑
                    </TaskButton>
                </ListItem>
            ))}
        </List>
    )
};

export default Tasks;