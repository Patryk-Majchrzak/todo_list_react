import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { FormContainer } from "./styled";
import { addTasks, selectLanguage } from "../../tasksSlice";
import { FormButton } from "../Buttons/styled";
import { Input } from "../Input/styled";
import { translations } from "../../../../translations";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const language = useSelector(selectLanguage);
    const t = translations["Form"][language];
    
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
                placeholder={t.placeholder}
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputRef}
            />
            <FormButton>{t.addTaskButton}</FormButton>
        </FormContainer>
    );
};

export default Form;