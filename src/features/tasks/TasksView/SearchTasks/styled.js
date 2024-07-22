import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
`

export const ResetIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  padding: 2px;
  border-radius: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background-color: ${({theme}) => theme.colors.resetIconBackground};
  color: ${({theme}) => theme.colors.ResetIcon};

  &:hover {
    background-color: ${({theme}) => theme.colors.resetIconBackgroundHover};
  }
`