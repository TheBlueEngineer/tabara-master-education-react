import { NavLink as NavigationLink } from 'react-router-dom';
import { border, opacity, typography } from 'src/consts/template.const';
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
  align-items: flex-start;

  text-decoration: none;
  height: 100%;
  padding: ${({ theme }) => theme.spacing['16px']};

  ${({ theme }) => theme.typography.size.md};

  &.active {
    color: ${({ theme }) => theme.colors.tertiary};
    border-bottom: ${border.width.sm}
      ${({ theme }) => theme.colors.background.secondary} solid;
    ${typography.weight.bolder};
  }

  &:hover {
    opacity: ${opacity['0.8']};
  }
`;

export const Text = styled.span`
  ${({ theme }) => theme.typography.size.md};
`;
