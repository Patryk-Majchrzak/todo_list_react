import { Input } from "../Input/styled";
import { useGetQueryParameter } from "../useGetQueryParameter";
import { useReplaceQueryParameters } from "../useReplaceQueryParameters";
import { Container, ResetIcon } from "./styled";
import queryParameterName from "../searchQueryParameterName";

const SearchTasks = () => {

    const query = useGetQueryParameter().get(queryParameterName) || "";
    const ReplaceQueryParameters = useReplaceQueryParameters();

    const onInputChange = ({ target }) => {
        ReplaceQueryParameters({
            key: queryParameterName,
            value: !!target.value ? target.value : undefined,
        })
    }

    const resetInput = () => {
        if (!!query) {
            ReplaceQueryParameters(undefined)
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