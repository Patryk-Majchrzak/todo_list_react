import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  float: right;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.navBackground};

  ${DropdownContainer}:hover & {
    display: block;
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