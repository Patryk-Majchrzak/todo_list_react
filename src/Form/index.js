import { useState } from "react";
import { FormContainer, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        const newTaskTrimmed = newTaskContent.trim();
        const resetTaskContent = () => setNewTaskContent(newTaskContent => newTaskContent="")

        if(!newTaskTrimmed) {
            resetTaskContent();
            return;
        }

        addNewTask(newTaskTrimmed);
        resetTaskContent();
    };

    return (
        <FormContainer onSubmit={onFormSubmit}>
            <Input
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </FormContainer>
    );
};

export default Form;