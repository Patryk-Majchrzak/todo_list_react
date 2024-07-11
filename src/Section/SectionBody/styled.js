import styled, {css} from "styled-components";

export const SectionBodyContainer = styled.div`
    padding: 25px;

    ${({$additionalAtribute}) => $additionalAtribute==="withList" && css`
        padding-left: 0;
    `}
`