import { NavLink as NavigationLink } from 'react-router-dom';
import {
  fontSize,
  fontWeight,
  opacity,
  spacing,
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
  align-items: flex-start;

  text-decoration: none;
  height: 100%;
  padding: ${spacing['1rem']};

  color: ${({ theme }) => theme.colors.gray['700']};
  font-weight: ${fontWeight[700]};

  &.active {
    color: ${({ theme }) => theme.colors.green['900']};
    border-bottom-width: ${spacing['0.25rem']};
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.colors.green['700']};
    font-weight: ${fontWeight['900']};
  }

  &:hover {
    opacity: ${opacity['0.7']};
  }
`;

export const Text = styled.span`
  font-size: ${fontSize['1.25rem']};
`;
