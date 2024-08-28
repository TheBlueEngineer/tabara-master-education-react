import { NavLink } from 'react-router-dom';
import { shadows, spacing, typography } from '@consts/template.const';
import styled, { css } from 'styled-components';
import { screens } from '@consts/media-queries.const';

export const Container = styled.header<{
  $changeStyle: boolean;
  $isUpperbarActive: boolean;
  $isBurgerMenuOpen: boolean;
}>`
  display: flex;
  width: 100%;
  position: fixed;
  flex-direction: column;
  z-index: 10;
  transition:
    background-color 300ms,
    top 300ms,
    translate 300ms;

  ${({ $isUpperbarActive }) =>
    $isUpperbarActive
      ? css`
          translate: 0 0;
        `
      : css`
          translate: 0 -42px;
        `};

  ${({ $changeStyle, $isBurgerMenuOpen, theme }) =>
    !$changeStyle || $isBurgerMenuOpen
      ? css`
          background-color: ${theme.colors.white};
          box-shadow: ${shadows.elevation.md};
        `
      : css`
          background-color: 'hsla(0, 0%, 0%, 0)';
          box-shadow: none;
        `};
`;

export const UpperBar = styled.div<{
  $changeStyle: boolean;
  $isBurgerMenuOpen: boolean;
}>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${spacing['8px']} ${spacing['32px']};
  transition: background-color 300ms;

  ${({ $changeStyle, $isBurgerMenuOpen }) => {
    if ($changeStyle || (!$changeStyle && $isBurgerMenuOpen)) {
      return css`
        background-color: transparent;
      `;
    } else if (!$changeStyle && !$isBurgerMenuOpen) {
      return css`
        background-color: green;
      `;
    }
  }};
  ${({ $isBurgerMenuOpen }) => {
    if ($isBurgerMenuOpen) {
      return css`
        color: black;
      `;
    } else {
      return css`
        color: white;
      `;
    }
  }};
`;

export const Group = styled.div`
  display: flex;
  column-gap: ${spacing['24px']};
`;

export const Cell = styled.div`
  display: flex;
  column-gap: ${spacing['8px']};
  align-items: center;
  ${typography.size.base};

  & > svg {
    ${typography.size.base};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0 ${spacing['32px']};

  @media ${screens.lg} {
    padding: ${spacing['8px']} ${spacing['32px']};

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ContentRow = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoLink = styled(NavLink)<{
  $changeStyle: boolean;
}>`
  display: flex;
  align-items: center;

  & > h1 {
    ${typography.size.xl};
    ${typography.weight.black};
    line-height: 1;
    margin-left: ${spacing['8px']};

    ${({ $changeStyle }) =>
      $changeStyle
        ? css`
            background: ${({ theme }) =>
              `-webkit-linear-gradient(270deg, ${theme.colors.blue200},${theme.colors.blue300},${theme.colors.green500},${theme.colors.green600})`};
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          `
        : css`
            background: ${({ theme }) =>
              `-webkit-linear-gradient(270deg, ${theme.colors.blue400},${theme.colors.blue500},${theme.colors.green700},${theme.colors.green800})`};
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          `}

    @media ${screens.xl} {
      ${typography.size.xl};
    }
  }

  & > img {
    position: relative;
    width: 2.5rem;
    height: 2.5rem;

    @media ${screens.xl} {
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
  display: none;
  flex-direction: column;
  justify-content: flex-start;

  ${({ $isOpen, theme }) =>
    $isOpen &&
    css`
      display: flex;
      padding-top: ${spacing['8px']};
      padding-bottom: ${spacing['32px']};
      width: 100%;
      border-top: 1px solid ${theme.colors.gray500};
    `}

  @media ${screens.lg} {
    flex-direction: row;
    display: flex;
  }
`;

export const BurgerMenu = styled.button<{
  $isOpen: boolean;
  $changeStyle: boolean;
}>`
  display: block;
  width: 4rem;
  height: 4rem;
  background: transparent;

  @media ${screens.lg} {
    display: none;
    position: relative;
    cursor: pointer;
  }

  & > svg {
    transition: color 300ms;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme, $isOpen, $changeStyle }) =>
      !$isOpen &&
      $changeStyle &&
      css`
        color: ${theme.colors.white};
      `};
    ${typography.size.xl3};
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
