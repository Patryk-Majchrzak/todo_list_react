import { selectTasks, hideDoneTasks, setAllDone, selectHideDone } from "../tasksSlice";
import { StyledButtonsArea } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../AppView/styled";

const ButtonsArea = () => {

    const { tasks } = useSelector(selectTasks);
    const { hideDone } = useSelector(selectHideDone)
    const dispatch = useDispatch();

    if (!tasks.length) {
        return null;
    }

    return (
        <StyledButtonsArea>
            <Button onClick={() => dispatch(hideDoneTasks())}>
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                disabled={tasks.every(({ done }) => done)}
                onClick={() => dispatch(setAllDone())}
            >
                Ukończ wszystkie
            </Button>
        </StyledButtonsArea>
    );
};

export default ButtonsArea;