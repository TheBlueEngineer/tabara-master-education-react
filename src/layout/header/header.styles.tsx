import { Link } from 'react-router-dom';
import { elevation, spacing } from 'src/consts/template.const';
import styled from 'styled-components';

type HeaderContainerProps = {
  $isHidden: boolean;
};

export const HeaderContainer = styled.header<HeaderContainerProps>`
  background-color: ${({ theme }) => theme.colors.gray['100']};
  display: flex;
  flex-direction: row;
  position: fixed;
  top: ${(props) => (props.$isHidden ? '-12%' : 0)};
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: ${spacing['0.5rem']};
  padding-right: ${spacing['0.5rem']};
  z-index: 10;
  transition: top 500ms;
  box-shadow: ${elevation.far};
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
