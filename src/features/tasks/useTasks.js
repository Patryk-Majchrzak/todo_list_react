import { useState, useEffect } from "react";

export const useTasks = () => {
    const defaultTasks = JSON.parse(localStorage.getItem("tasks")) || [
        {
            id: 1,
            content: "zrobić coś",
            done: false
        },
        {
            id: 2,
            content: "zrobić coś innego",
            done: true
        }
    ];
 
    const [tasks, setTasks] = useState(defaultTasks);

    const [hideDone, setHideDone] = useState(false);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

    const toggleTaskDone = (id) => {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            return task;
        }));
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const hideDoneTasks = () => {
        setHideDone(hideDone => !hideDone);
    };

    const setAllDone = () => {
        setTasks(tasks.map((task) => {
            return { ...task, done: true }
        }));
    };

    return{
        // tasks,
        hideDone,
        toggleTaskDone,
        removeTask,
        hideDoneTasks,
        setAllDone,
    }
};