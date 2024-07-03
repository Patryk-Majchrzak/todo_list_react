import "./style.css"

const ButtonsArea = ({ tasks, hideDone, hideDoneTasks, setAllDone}) => {
    if (!tasks.length) {
        return null;
    }

    return (
        <div className="buttonsArea">
            <button className="buttonsArea__button" onClick={hideDoneTasks}>
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                disabled={tasks.every(({ done }) => done)}
                className="buttonsArea__button"
                onClick={setAllDone}
            >
                Ukończ wszystkie
            </button>
        </div>
    );
};

export default ButtonsArea;