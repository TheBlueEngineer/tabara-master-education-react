import { NavLink as NavigationLink } from 'react-router-dom';
import { border, shadows, spacing, typography } from '@consts/template.const';
import styled from 'styled-components';
import { screens } from '@consts/media-queries.const';

export const NavLink = styled(NavigationLink)`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  row-gap: ${spacing['2px']};
  padding: ${spacing['4px']} 0;
  ${typography.weight.medium};
  ${typography.size.xs};
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray900};
  transition:
    color 300ms,
    background-color 300ms;

  & > svg {
    ${typography.size.sm};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.green700};
  }

  &.active {
    color: ${({ theme }) => theme.colors.green700};
    ${typography.weight.semibold};
  }

  @media ${screens.lg} {
    padding: 0 ${spacing['24px']};
    column-gap: ${spacing['8px']};
    & > svg {
      ${typography.size.lg};
    }
  }
`;

export const Navbar = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: row;
  position: fixed;
  justify-content: space-around;
  top: 0;
  z-index: 10;
  background: white;

  button {
    background-color: ${({ theme }) => theme.colors.green700};
    border: 2px solid ${({ theme }) => theme.colors.green700};
  }
`;

export const CTAButton = styled.button`
  display: none;
  @media ${screens.sm} {
    display: flex;
    ${typography.weight.semibold};
    ${typography.size.lg};
    padding: ${spacing['12px']} ${spacing['24px']};
    margin-left: ${spacing['16px']};
    cursor: pointer;
    box-shadow: ${shadows.elevation.md};
    border-radius: ${border.radius.xs} 0 ${border.radius.xs};
    color: ${({ theme }) => theme.colors.white};
    align-self: center;
    position: relative;
    transition:
      box-shadow 300ms,
      color 300ms,
      border-color 300ms,
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
  }
`;
