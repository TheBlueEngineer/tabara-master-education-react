import { Link } from 'react-router-dom';
import { shadows, spacing } from 'src/consts/template.const';
import styled from 'styled-components';

type HeaderContainerProps = {
  $isHidden: boolean;
};

export const HeaderContainer = styled.header<HeaderContainerProps>`
  background-color: ${({ theme }) => theme.colors.gray50};
  display: flex;
  flex-direction: row;
  position: fixed;
  top: ${({ $isHidden }) => ($isHidden ? '-12%' : 0)};
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${spacing['16px']};
  z-index: 10;
  transition: top 500ms;
  box-shadow: ${shadows.elevation.md};
`;

export const Logo = styled(Link)`
  display: flex;
`;

export const SearchBar = styled.div`
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
