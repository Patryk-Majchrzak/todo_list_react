import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { selectTasks, hideDoneTasks, setAllDone, selectHideDone } from "../../tasksSlice";
import { StyledButtonsArea } from "./styled";
import { Button } from "../Buttons/styled";

const ButtonsArea = () => {

    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone)
    const dispatch = useDispatch();

    const [t] = useTranslation("translation");

    if (!tasks.length) {
        return null;
    }

    return (
        <StyledButtonsArea>
            <Button onClick={() => dispatch(hideDoneTasks())}>
                {hideDone ? t("ButtonsArea.show") : t("ButtonsArea.hide")} {t("ButtonsArea.done")}
            </Button>
            <Button
                disabled={tasks.every(({ done }) => done)}
                onClick={() => dispatch(setAllDone())}
            >
                {t("ButtonsArea.markAllTasksDone")}
            </Button>
        </StyledButtonsArea>
    );
};

export default ButtonsArea;