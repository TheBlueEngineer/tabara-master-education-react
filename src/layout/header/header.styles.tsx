import { NavLink } from 'react-router-dom';
import { shadows, spacing, typography } from 'src/consts/template.const';
import styled from 'styled-components';

type HeaderContainerProps = {
  $isHidden: boolean;
};

export const HeaderContainer = styled.header<HeaderContainerProps>`
  display: flex;
  flex-direction: row;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  top: ${({ $isHidden }) => ($isHidden ? '-12%' : 0)};
  padding: 0 ${spacing['16px']};
  background-color: ${({ theme }) => theme.colors.gray50};
  z-index: 10;
  transition: top 500ms;
  box-shadow: ${shadows.elevation.md};
`;

export const Cell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > span {
    color: ${({ theme }) => theme.colors.blue600};
  }
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > h1 {
    ${typography.size.xl};
    ${typography.weight.black};
    background: ${({ theme }) =>
      `-webkit-linear-gradient(270deg, ${theme.colors.blue400},${theme.colors.blue600},${theme.colors.green700},${theme.colors.green900})`};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-left: ${spacing['8px']};

    @media (min-width: 1240px) {
      ${typography.size.xl2};
    }
  }

  & > img {
    position: relative;
    width: 2.5rem;
    height: 2.5rem;

    @media (min-width: 1240px) {
      width: 3rem;
      height: 3rem;
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.green800};
      mix-blend-mode: multiply;
    }
  }
`;
