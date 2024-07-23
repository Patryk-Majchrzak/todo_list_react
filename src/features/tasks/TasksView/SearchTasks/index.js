import { useSelector } from "react-redux";
import { Input } from "../Input/styled";
import { useGetQueryParameter } from "../useGetQueryParameter";
import { useReplaceQueryParameters } from "../useReplaceQueryParameters";
import { Container, ResetIcon } from "./styled";
import queryParameterName from "../searchQueryParameterName";
import { selectLanguage } from "../../tasksSlice";
import { translations } from "../../../../translations";

const SearchTasks = () => {

    const language = useSelector(selectLanguage);
    const t = translations["SearchTasks"][language];

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
            ReplaceQueryParameters({
                key: queryParameterName,
                value: undefined,
            })
        }
    }

    return (
        <Container>
            <Input
                placeholder={t.placeholder}
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