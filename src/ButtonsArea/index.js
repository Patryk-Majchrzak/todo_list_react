import { StyledButtonsArea, Button } from "./styled";

const ButtonsArea = ({ tasks, hideDone, hideDoneTasks, setAllDone}) => {
    if (!tasks.length) {
        return null;
    }

    return (
        <StyledButtonsArea>
            <Button onClick={hideDoneTasks}>
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                disabled={tasks.every(({ done }) => done)}
                onClick={setAllDone}
            >
                Ukończ wszystkie
            </Button>
        </StyledButtonsArea>
    );
};

export default ButtonsArea;