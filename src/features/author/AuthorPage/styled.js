import styled, { css } from "styled-components";

export const Paragraph = styled.p`
    line-height: 1.5;

  ${({ $centered }) => $centered && css`
    text-align:center;
  `}
`