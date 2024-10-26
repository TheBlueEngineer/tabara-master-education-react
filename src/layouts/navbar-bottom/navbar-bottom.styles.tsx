import styled from 'styled-components';
import { NavLink as NavigationLink } from 'react-router-dom';
import { spacing, typography } from '@consts/template.const';
import { screens } from '@consts/media-queries.const';

export const Navbar = styled.nav`
  display: flex;
  width: 100%;
  position: sticky;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  bottom: 0;
  padding: 0 ${spacing['16px']};
  background-color: white;
  border-top: 2px solid ${({ theme }) => theme.colors.gray300};
  z-index: 10;

  @media ${screens.sm} {
    display: none;
  }
`;

export const NavLink = styled(NavigationLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${spacing['4px']} ${spacing['16px']};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray900};
  ${typography.size.sm};

  &:hover {
    color: ${({ theme }) => theme.colors.green700};
  }

  &.active {
    color: ${({ theme }) => theme.colors.green700};
    ${typography.weight.semibold};

    & > svg {
      color: ${({ theme }) => theme.colors.green700};
    }
  }

  & > svg {
    color: ${({ theme }) => theme.colors.gray800};
    ${typography.size.md};
  }
`;

export const CTAButton = styled(NavigationLink)`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${spacing['4px']} ${spacing['8px']};
  border-radius: 50%;
  background-color: #0f720f;
  color: ${({ theme }) => theme.colors.gray50};
  ${typography.size.sm};
  cursor: pointer;
  transition: color 300ms background-color 300ms;

  &:hover {
    color: ${({ theme }) => theme.colors.gray50};
  }

  & > svg {
    ${typography.size.md};
  }
`;
