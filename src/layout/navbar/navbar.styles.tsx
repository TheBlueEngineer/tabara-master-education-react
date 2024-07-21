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
  height: 100%;
  flex-direction: row;
  align-items: flex-start;
  padding: ${spacing['16px']};

  color: ${({ theme }) => theme.colors.green800};

  column-gap: ${spacing['4px']};

  text-decoration: none;
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

  & > svg {
    ${typography.size.sm};

    @media (min-width: 1240px) {
      ${typography.size.md};
    }
  }

  & > p {
    ${typography.size.sm};
    ${typography.weight.bold};
    color: inherit;

    @media (min-width: 1240px) {
      ${typography.size.md};
    }
  }
`;
