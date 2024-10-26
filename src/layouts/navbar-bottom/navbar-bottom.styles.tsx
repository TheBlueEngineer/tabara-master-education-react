import styled from 'styled-components';
import { NavLink as NavigationLink } from 'react-router-dom';
import { border, spacing, typography } from '@consts/template.const';
import { screens } from '@consts/media-queries.const';

export const Navbar = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: row;
  position: fixed;
  justify-content: space-evenly;

  bottom: 0;
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
  padding: 0px ${spacing['8px']};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray900};
  ${typography.size.sm};

  & > svg {
    color: ${({ theme }) => theme.colors.gray800};
    ${typography.size.md};
  }
`;

export const CTAButton = styled(NavigationLink)`
  display: flex;
  aspect-ratio: 1 / 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${spacing['4px']} ${spacing['8px']};
  border-radius: ${border.radius.xs};
  background-color: #13af13;
  color: ${({ theme }) => theme.colors.gray50};
  ${typography.size.sm};
  cursor: pointer;

  & > svg {
    ${typography.size.md};
  }
`;
