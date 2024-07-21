import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";

export const useReplaceQueryParameters = () => {
    const history = useHistory();
    const location = useLocation();

    return ({key, value}) => {
        const searchParameter = new URLSearchParams(location.search);

        if (value === undefined) {
            searchParameter.delete(key)
        } else {
            searchParameter.set(key, value)
        }

        history.push(`${location.pathname}?${searchParameter.toString()}`)
    }
}