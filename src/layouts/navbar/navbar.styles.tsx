import { NavLink as NavigationLink } from 'react-router-dom';
import { border, shadows, spacing, typography } from '@consts/template.const';
import styled, { css } from 'styled-components';

export const navBarBreakpoint = '78rem';

export const Navbar = styled.nav<{ $changeStyle: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ $changeStyle }) =>
    $changeStyle
      ? css`
          a {
            color: ${({ theme }) => theme.colors.white};

            &.active {
              color: ${({ theme }) => theme.colors.green500};
              ${typography.weight.semibold};
            }

            &:hover {
              color: ${({ theme }) => theme.colors.green500};
            }
          }

          button {
            background-color: transparent;
            border: 2px solid white;
          }
        `
      : css`
          a {
            color: ${({ theme }) => theme.colors.black};

            &.active {
              color: ${({ theme }) => theme.colors.green700};
              ${typography.weight.semibold};
            }

            &:hover {
              color: ${({ theme }) => theme.colors.green700};
            }
          }

          button {
            background-color: ${({ theme }) => theme.colors.green700};
            border: 2px solid ${({ theme }) => theme.colors.green700};
          }
        `};

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
  ${typography.weight.medium};
  ${typography.size.md};
  text-transform: uppercase;
  text-decoration: none;

  transition:
    color 300ms,
    background-color 300ms;

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
  color: ${({ theme }) => theme.colors.white};

  position: relative;
  transition:
    box-shadow 300ms,
    color 300ms,
    background-color 300ms;

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
