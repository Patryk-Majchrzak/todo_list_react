import { Input } from "../Input/styled";
import { useGetQueryParameter } from "../useGetQueryParameter";
// import { useSearchTasks } from "../useSearchTasks";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";

const SearchTasks = () => {

    const query = useGetQueryParameter().get("szukaj");
    // const filterTasks = useSearchTasks();
    const history = useHistory();
    const location = useLocation();
    const searchParameter = useGetQueryParameter();

    const onInputChange = ({ target }) => {

        if (target.value.trim() === "") {
            searchParameter.delete("szukaj")
        } else {
            searchParameter.set("szukaj", target.value)
        }

        history.push(`${location.pathname}?${searchParameter.toString()}`)
    }

    return (
        <Input
            placeholder="Szukaj zadania"
            value={query || ""}
            onChange={onInputChange}
        />
    )
}

export default SearchTasks;