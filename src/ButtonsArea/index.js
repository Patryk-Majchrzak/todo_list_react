import "./style.css"

const ButtonsArea = ({tasks, hideDone}) => {
    if (!!tasks.length) {
        return (
        <div className="buttonsArea">
            <button className="buttonsArea__button">
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button disabled={tasks.every(({done}) => done)} className="buttonsArea__button">
                Ukończ wszystkie
            </button>
        </div>
        );
    };
};

export default ButtonsArea;