import { NavLink } from 'react-router-dom';
import { shadows, spacing, typography } from '@consts/template.const';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 100%;
  position: fixed;
  flex-direction: column;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Cell = styled.div`
  display: flex;
  column-gap: ${spacing['8px']};
  align-items: center;
  ${typography.size.base};
  color: ${({ theme }) => theme.colors.green50};

  & > svg {
    ${typography.size.base};
  }
`;

export const Group = styled.div`
  display: flex;
  column-gap: ${spacing['24px']};
`;

export const UpperBar = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding: ${spacing['4px']} ${spacing['32px']};

  background-color: ${({ theme }) => theme.colors.green800};
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing['8px']} ${spacing['32px']};
  background-color: ${({ theme }) => theme.colors.white};

  box-shadow: ${shadows.elevation.md};
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
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
      ${typography.size.xl};
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

export const Dropdown = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  transform: ${(props) =>
    props.$isOpen ? 'translateY(0)' : 'translateY(-200%)'};
  top: 100%;
  right: 0;

  @media (min-width: 1240px) {
    flex-direction: row;
    position: relative;
    transform: none;
  }
`;

export const BurgerMenu = styled.button<{ $isOpen: boolean }>`
  display: block;
  width: 4rem;
  height: 4rem;

  @media (min-width: 1240px) {
    display: none;
    position: relative;
    cursor: pointer;
  }

  & > svg {
    transition: color 300ms;
    color: ${({ theme, $isOpen }) =>
      $isOpen ? theme.colors.green700 : theme.colors.black};
    ${typography.size.xl3};
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
