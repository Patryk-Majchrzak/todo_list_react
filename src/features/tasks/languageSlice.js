import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    initialState: {
        language: "pl",
        title: "Lista zadań w React.js"
    },
    reducers:
    {
        setLanguage: (state, {payload: language}) => {
            state.language = language
        },
        setTitle: (state, {payload: language}) => {
            state.title = language === "pl" ? "Lista zadań w React.js" : "Tasks list in React.js"
        }
    },
});

export const {
    setLanguage,
    setTitle
} = languageSlice.actions;

const selectLanguageState = state => state.language;

export const selectLanguage = state => selectLanguageState(state).language;
export const selectTitle = state => selectLanguageState(state).title;

export default languageSlice.reducer;