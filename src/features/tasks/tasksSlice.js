import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSliceZ({
    name:"tasks",
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
    {addTasks: ({tasks}, {payload}) => {
        tasks.push(payload)
    }}
})

export const {addTasks} = tasksSlice.action;
export const selectTasks =  state => state.tasks;
export default tasksSlice.reducer;