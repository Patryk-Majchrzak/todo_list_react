import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { nanoid } from "@reduxjs/toolkit";
import { FormContainer } from "./styled";
import { addTasks } from "../../tasksSlice";
import { FormButton } from "../Buttons/styled";
import { Input } from "../Input/styled";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const [t] = useTranslation("translation");
    
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
                placeholder={t("Form.placeholder")}
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputRef}
            />
            <FormButton>{t("Form.addTaskButton")}</FormButton>
        </FormContainer>
    );
};

export default Form;