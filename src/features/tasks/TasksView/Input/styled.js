import styled from "styled-components";

export const Input = styled.input`
    border: 2px solid ${({theme}) => theme.colors.borders};
    padding: 10px;
    padding-right: 30px;
`

export const ResetIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  padding: 2px;
  border-radius: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background-color: ${({theme}) => theme.colors.ResetIconBackground};
  color: ${({theme}) => theme.colors.ResetIcon};
  &:hover {
    background-color: ${({theme}) => theme.colors.ResetIconBackgroundHover};
  }
`