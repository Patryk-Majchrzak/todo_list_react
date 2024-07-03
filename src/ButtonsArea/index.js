import "./style.css"

const ButtonsArea = ({tasks, hideDone, hideDoneTasks}) => {
    if (!tasks.length) {
        return null;
    } 
        
    return (
        <div className="buttonsArea">
            <button className="buttonsArea__button" onClick={hideDoneTasks}>
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button disabled={tasks.every(({done}) => done)} className="buttonsArea__button">
                Ukończ wszystkie
            </button>
        </div>
    );
};

export default ButtonsArea;