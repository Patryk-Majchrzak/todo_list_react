import "./style.css"

const Tasks = ({tasks, hideDone}) => (
    <ul>
        {tasks.map(task => (
            <li className={`list__item ${task.done && hideDone ? "list__item--hidden" : ""}`}>
                <button className="list__button list__button--toggleDone" />
                    <span className={task.done ? "list__item--done" : ""}>
                        {task.content}
                    </span>
                <button className="list__button list__button--remove" />
            </li>
        ))};
    </ul>
);

export default Tasks;