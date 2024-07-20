import { selectTasks, toggleTaskDone} from "../tasksSlice";
import { ListItem, Button, TaskContent, List } from "./styled";
import { useDispatch, useSelector } from "react-redux";

const Tasks = ({ removeTask }) => {
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
                    <Button $remove onClick={() => removeTask(task.id)}>
                        🗑
                    </Button>
                </ListItem>
            ))}
        </List>
    )
};

export default Tasks;