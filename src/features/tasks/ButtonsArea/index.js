import { selectTasks } from "../tasksSlice";
import { StyledButtonsArea, Button } from "./styled";
import { useSelector } from "react-redux";

const ButtonsArea = ({ hideDone, hideDoneTasks, setAllDone }) => {

    const { tasks } = useSelector(selectTasks);

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