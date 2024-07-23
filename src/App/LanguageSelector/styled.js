import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  float: right;
`;

export const DropdownContent = styled.div`
  opacity: 0;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.navBackground};
  transition: opacity 0.3s ease-in-out;

  ${DropdownContainer}:hover & {
    opacity: 1;
  }
`;

export const Option = styled.div`
  cursor: pointer;
`;

export const OptionImage = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`;