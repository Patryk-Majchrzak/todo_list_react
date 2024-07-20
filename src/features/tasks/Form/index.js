import { useState, useRef } from "react";
import { FormContainer, Input, Button } from "./styled";
import { addTasks } from "../tasksSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        
        const newTaskTrimmed = newTaskContent.trim();
        const resetTaskContent = () => setNewTaskContent(newTaskContent => newTaskContent="");

        if(!newTaskTrimmed) {
            resetTaskContent();
            inputRef.current.focus()
            return;
        }

        dispatch(addTasks({
            content: newTaskTrimmed,
            done: false,
            id: nanoid,
        }));
        resetTaskContent();
        inputRef.current.focus()
    };

    return (
        <FormContainer onSubmit={onFormSubmit}>
            <Input
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputRef}
            />
            <Button>Dodaj zadanie</Button>
        </FormContainer>
    );
};

export default Form;