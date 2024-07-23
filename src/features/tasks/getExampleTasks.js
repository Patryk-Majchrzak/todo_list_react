import axios from "axios";
import i18next from "i18next";

export const getExampleTasks = async () => {
    try {
        const language = i18next.language
        const response = await axios.get(`/locales/${language}/exampleTasks.json`)
        return response
    } catch (error) {
        alert("Unexpected error occured, please try again later")
    }
}