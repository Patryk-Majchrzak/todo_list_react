import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { FormContainer, Input, FormButton } from "./styled";
import { addTasks } from "../tasksSlice";

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
            id: nanoid(),
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
            <FormButton>Dodaj zadanie</FormButton>
        </FormContainer>
    );
};

export default Form;