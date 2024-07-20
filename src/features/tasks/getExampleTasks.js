import axios from "axios";

export const getExampleTasks = async () => {
    try {
        const response = await axios.get("/todo_list_react/exampleTasks.json")
        return response
    } catch (error) {
        alert("Unexpected error occured, please try again later")
    }
}