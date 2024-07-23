import { useDispatch, useSelector } from "react-redux";
import { selectTasks, hideDoneTasks, setAllDone, selectHideDone, selectLanguage } from "../../tasksSlice";
import { StyledButtonsArea } from "./styled";
import { Button } from "../Buttons/styled";
import { translations } from "../../../../App/LanguageSelector/translations";

const ButtonsArea = () => {

    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone)
    const dispatch = useDispatch();

    const language = useSelector(selectLanguage);
    const t = translations["ButtonsArea"][language];

    if (!tasks.length) {
        return null;
    }

    return (
        <StyledButtonsArea>
            <Button onClick={() => dispatch(hideDoneTasks())}>
                {hideDone ? t.show : t.hide} {t.done}
            </Button>
            <Button
                disabled={tasks.every(({ done }) => done)}
                onClick={() => dispatch(setAllDone())}
            >
                {t.markAllTasksDone}
            </Button>
        </StyledButtonsArea>
    );
};

export default ButtonsArea;