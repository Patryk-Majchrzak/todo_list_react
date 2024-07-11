import { ListItem, Button, TaskContent, List } from "./styled";

const Tasks = ({tasks, hideDone, toggleTaskDone, removeTask}) => (
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
);

export default Tasks;