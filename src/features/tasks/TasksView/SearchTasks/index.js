import { Input, ResetIcon } from "../Input/styled";
import { useGetQueryParameter } from "../useGetQueryParameter";
import { useSearchTasks } from "../useSearchTasks";
import { Container } from "./styled";

const SearchTasks = () => {

    const query = useGetQueryParameter().get("szukaj") || "";
    const searchTasks = useSearchTasks();

    const onInputChange = ({ target }) =>
        searchTasks(!!target.value ? target.value : undefined)

    const resetInput = () => {
        if (!!query) {
            searchTasks(undefined)
        }
    }

    return (
        <Container>
            <Input
                placeholder="Szukaj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
            <ResetIcon onClick={resetInput}>
                ✕
            </ResetIcon>
        </Container>
    )
}

export default SearchTasks;