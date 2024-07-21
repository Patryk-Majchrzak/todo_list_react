import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./localStorage";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
    },
    reducers:
    {
        addTasks: ({ tasks }, { payload: newTask }) => {
            tasks.push(newTask);
        },
        hideDoneTasks: state => {
            state.hideDone = !state.hideDone
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const taskIndex = tasks.findIndex(task => task.id === taskId)
            tasks[taskIndex].done = !tasks[taskIndex].done
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const taskIndex = tasks.findIndex(task => task.id === taskId)
            tasks.splice(taskIndex, 1)
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
        fetchExampleTasks: () => { },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks
        }
    },
});

export const {
    addTasks,
    hideDoneTasks,
    toggleTaskDone,
    removeTask,
    setAllDone,
    fetchExampleTasks,
    setTasks,
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const getTaskByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks
    } else {
        return (
            tasks.filter(({ content }) => content.toUpperCase().includes(query.toUpperCase().trim()))
        )
    }
};

export default tasksSlice.reducer;