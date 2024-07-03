import "./style.css"

const Tasks = ({tasks, hideDone}) => (
    <ul>
        {tasks.map(task => (
            <li className={`list__item ${task.done && hideDone ? "list__item--hidden" : ""}`} key={task.id}>
                <button className="list__button list__button--toggleDone">
                    {task.done ? "✔" : ""} 
                </button>
                    <span className={task.done ? "list__item--done" : ""}>
                        {task.content}
                    </span>
                <button className="list__button list__button--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;