import { useTranslation } from "react-i18next";
import { Input } from "../Input/styled";
import { useGetQueryParameter } from "../useGetQueryParameter";
import { useReplaceQueryParameters } from "../useReplaceQueryParameters";
import { Container, ResetIcon } from "./styled";
import queryParameterName from "../searchQueryParameterName";

const SearchTasks = () => {

    const [t] = useTranslation("translation");

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
                placeholder={t("SearchTasks.placeholder")}
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