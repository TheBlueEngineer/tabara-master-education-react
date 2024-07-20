import { NavLink as NavigationLink } from 'react-router-dom';
import {
  border,
  opacity,
  spacing,
  typography,
} from 'src/consts/template.const';
import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100%;
`;

export const NavLink = styled(NavigationLink)`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  color: ${({ theme }) => theme.colors.green800};
  text-decoration: none;
  height: 100%;
  padding: ${spacing['16px']};
  ${typography.weight.bold};
  ${typography.size.md};
  column-gap: ${spacing['4px']};
  transition: opacity 300ms;

  &.active {
    color: ${({ theme }) => theme.colors.green900};
    border-bottom: ${border.width.sm};
    border-bottom-color: ${({ theme }) => theme.colors.green900};
    border-bottom-style: solid;
    ${typography.weight.black};
  }

  &:hover {
    opacity: ${opacity['0.8']};
  }
`;

export const Text = styled.span`
  ${typography.size.md};
`;
