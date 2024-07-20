import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [
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
        ],
        hideDone: false,
    },
    reducers:
    {
        addTasks: ({ tasks }, { payload: newTask }) => {
            tasks.push(newTask);
        },
        hideDoneTasks: state => { state.hideDone = !state.hideDone },
        toggleTaskDone: ({tasks}, {payload: taskId}) => {
            const taskIndex = tasks.findIndex(task => task.id === taskId)
            tasks[taskIndex].done = !tasks[taskIndex].done
        },
        removeTask: ({tasks}, {payload: taskId}) => {
            const taskIndex = tasks.findIndex(task => task.id === taskId)
            tasks.splice(taskIndex, 1)
        },
        setAllDone: ({tasks}) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
    },
});

export const { addTasks, hideDoneTasks, toggleTaskDone, removeTask, setAllDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;