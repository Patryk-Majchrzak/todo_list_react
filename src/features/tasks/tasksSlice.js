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
        addTasks: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        hideDoneTasks: state => { state.hideDone = !state.hideDone },
        toggleTaskDone: ({tasks}, {payload}) => {
            const taskIndex = tasks.findIndex(task => task.id === payload)
            tasks[taskIndex].done = !tasks[taskIndex].done
        },
    },
});

export const { addTasks, hideDoneTasks, toggleTaskDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;