import { selectTasks, toggleTaskDone, removeTask} from "../tasksSlice";
import { ListItem, Button, TaskContent, List } from "./styled";
import { useDispatch, useSelector } from "react-redux";

const Tasks = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <ListItem $hidden={task.done & hideDone} key={task.id}>
                    <Button $toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
                        {task.done ? "✔" : ""}
                    </Button>
                    <TaskContent $done={task.done}>
                        {task.content}
                    </TaskContent>
                    <Button $remove onClick={() => dispatch(removeTask(task.id))}>
                        🗑
                    </Button>
                </ListItem>
            ))}
        </List>
    )
};

export default Tasks;