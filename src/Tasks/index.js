import { ListItem, Button, TaskContent } from "./styled";

const Tasks = ({tasks, hideDone, toggleTaskDone, removeTask}) => (
    <ul>
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
    </ul>
);

export default Tasks;