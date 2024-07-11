import styled, {css} from "styled-components"

export const Header = styled.header`
    border-bottom: 2px solid #ddd;
    padding: 5px;
    padding-left: 25px;

    ${({$additionalAttribute}) => $additionalAttribute="withButtons" && css`
        display: grid;
        grid-template-columns: 1fr auto;
        align-items:center;

        @media(max-width:992px){
            grid-template-columns: 1fr;
        }
    `}
`