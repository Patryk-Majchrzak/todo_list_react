import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./localStorage";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        loading: false,
        error: false,
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
        fetchExampleTasks: (state) => {
            state.loading = true;
          },
          fetchExampleTasksSuccess: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.loading = false;
          },
          fetchExampleTasksError: (state) => {
            state.loading = false;
          },
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
    fetchExampleTasksSuccess,
    fetchExampleTasksError,
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectLoading = state => selectTasksState(state).loading;
export const selectError = state => selectTasksState(state).error;

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