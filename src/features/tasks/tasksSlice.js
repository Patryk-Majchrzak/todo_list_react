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
        hideDoneTasks: (state) => {state.hideDone = !state.hideDone}
    },
});

export const { addTasks, hideDoneTasks } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;