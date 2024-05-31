import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 1rem 1rem;
  &:hover {
    text-decoration: underline;
  }
`;
