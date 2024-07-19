import { selectTasks } from "../tasksSlice";
import { ListItem, Button, TaskContent, List } from "./styled";
import { useSelector } from "react-redux";

const Tasks = ({ hideDone, toggleTaskDone, removeTask }) => {
    const { tasks } = useSelector(selectTasks);

    return (
        <List>
            {tasks.map(task => (
                <ListItem $hidden={task.done & hideDone} key={task.id}>
                    <Button $toggleDone onClick={() => toggleTaskDone(task.id)}>
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