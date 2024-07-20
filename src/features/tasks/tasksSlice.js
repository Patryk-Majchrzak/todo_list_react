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
        ]
    },
    reducers:
    {
        addTasks: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
    },
});

export const { addTasks } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;