import { NavLink as NavigationLink } from 'react-router-dom';
import { border, shadows, spacing, typography } from '@consts/template.const';
import styled from 'styled-components';

export const navBarBreakpoint = '78rem';

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${navBarBreakpoint}) {
    background-color: transparent;
    flex-direction: row;
  }
`;

export const NavLink = styled(NavigationLink)`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  column-gap: ${spacing['8px']};
  padding: 0 ${spacing['24px']};
  color: ${({ theme }) => theme.colors.black};
  ${typography.weight.medium};
  ${typography.size.md};
  text-transform: uppercase;
  text-decoration: none;
  transition: color 200ms;

  &.active {
    color: ${({ theme }) => theme.colors.green700};
    ${typography.weight.semibold};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.green700};
  }

  & > svg {
    ${typography.size.md};
  }

  @media (min-width: ${navBarBreakpoint}) {
    & > svg {
      ${typography.size.lg};
    }
  }
`;

export const CTAButton = styled.button`
  ${typography.weight.semibold};
  ${typography.size.lg};
  padding: ${spacing['12px']} ${spacing['24px']};
  margin-left: ${spacing['16px']};
  cursor: pointer;
  box-shadow: ${shadows.elevation.md};
  border-radius: ${border.radius.xs} 0 ${border.radius.xs};
  color: ${({ theme }) => theme.colors.green50};
  background: ${({ theme }) =>
    `linear-gradient(${theme.colors.green700},${theme.colors.green800})`};

  position: relative;
  transition: box-shadow 300ms;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: inherit;
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 0;
    mix-blend-mode: add;
    z-index: 1;
    transition:
      opacity 300ms,
      box-shadow 300ms;
  }

  &:hover::after {
    opacity: 0.2;
  }
`;
