import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";

export const useSearchTasks = () => {
    const history = useHistory();
    const location = useLocation();

    return (value) => {
        const searchParameter = new URLSearchParams(location.search);

        if (value === undefined) {
            searchParameter.delete("szukaj")
        } else {
            searchParameter.set("szukaj", value)
        }

        history.push(`${location.pathname}?${searchParameter.toString()}`)
    }
}