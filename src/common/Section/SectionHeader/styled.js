import styled, {css} from "styled-components"

export const Header = styled.header`
    border-bottom: 2px solid ${({theme}) => theme.colors.borders};
    padding: 5px;
    padding-left: 25px;

    ${({$additionalAttribute}) => $additionalAttribute==="grid" && css`
        display: grid;
        grid-template-columns: 1fr auto;
        align-items:center;

        @media(max-width:${({theme}) => theme.breakpoints.large}px){
            grid-template-columns: 1fr;
        }
    `}

     ${({$additionalAttribute}) => $additionalAttribute==="flex" && css`
        display: flex;
        align-items: center;
     `}

    ${({$additionalAttribute}) => $additionalAttribute==="centered" && css`
        text-align: center;
    `}
`

export const SectionTitle = styled.h2`

    @media(max-width:${({theme}) => theme.breakpoints.large}px){
        text-align:center
    }
 `