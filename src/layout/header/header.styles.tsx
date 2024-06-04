import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header<{ $isHidden: boolean }>`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: ${(props) => (props.$isHidden ? '-12%' : 0)};
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  z-index: 10;
  box-shadow: ${(props) =>
    props.$isHidden ? '0 3px 6px 0 rgba(0, 0, 0, 0.5)' : '0'};
  transition: top 500ms;
`;

export const Logo = styled(Link)`
  display: flex;
`;

export const SearchBar = styled.div`
  display: flex;
`;
