import styled from "styled-components";

export const StyledButtonsArea = styled.div`
    display: flex;
    flex-wrap:wrap;
`

export const Button = styled.button`
    color: hsl(180, 53%, 32%);
    border:none;
    background: none;
    transition: color 0.4s;

    @media (max-width:992px){
        flex-basis: 100%;
        margin-bottom: 20px;
    }

    &:hover{
        cursor: pointer;
        color: hsl(238, 65%, 23%);
    }

    &:active{
        color: hsl(233, 91%, 9%);
    }

    &:disabled{
        color: #bbb;
    }
`