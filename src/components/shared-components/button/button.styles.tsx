import styled, { css } from 'styled-components';
import { ThemeType } from '@consts/themes.const';
import {
  border,
  opacity,
  shadows,
  spacing,
  typography,
} from '@consts/template.const';
import { ButtonHTMLAttributes } from 'react';

type StyledButtonProps = {
  $variant?: 'default' | 'primary' | 'contained' | 'outlined' | 'disabled';
  $size?: 'small' | 'medium' | 'large';
  $shape: 'leaf' | 'rounded' | 'rectangular';
  $onHoverStyle: 'glow' | 'opaque' | 'default';
  disabled?: boolean;
  $fullWidth?: boolean;
  onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const buttonVariants = (theme: ThemeType, variant: string) => {
  switch (variant) {
    case 'primary':
      return css`
        background: linear-gradient(
          180deg,
          ${theme.colors.green700},
          ${theme.colors.green800}
        );
        color: ${theme.colors.gray50};
      `;
    case 'secondary':
      return css``;
    case 'tertiary:':
      return css``;
    default:
      return css`
        background-color: white;
        border: 2px solid black;
        color: black;
        border-radius: 1rem;
      `;
  }
};

const buttonShape = (variant: string) => {
  switch (variant) {
    case 'rounded':
      return css`
        border-radius: ${border.radius.md};
      `;
    case 'leaf':
      return css`
        border-top-left-radius: ${border.radius.sm};
        border-bottom-right-radius: ${border.radius.sm};
      `;
    case 'rectangular':
      break;
  }
};

const buttonHover = (variant: string) => {
  switch (variant) {
    case 'opaque':
      return css`
        opacity: ${opacity['0.8']};
        transition: opacity 300ms;
      `;
    case 'glow':
      return css`
        position: relative;
        transition: box-shadow 300ms;

        &:hover {
          box-shadow: ${shadows.elevation.lg};
        }

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
          opacity: 0.1;
        }
      `;
    case 'default':
      break;
  }
};

const buttonSizes = (size: string) => {
  switch (size) {
    case 'small':
      return css`
        padding: ${spacing['4px']} ${spacing['8px']};
        ${typography.size.base};
      `;
    case 'medium':
      return css`
        padding: ${spacing['8px']} ${spacing['16px']};
        ${typography.size.md};
      `;
    case 'large':
      return css`
        padding: ${spacing['16px']} ${spacing['32px']};
        ${typography.size.lg};
      `;
  }
};

export const StyledButton = styled.button<StyledButtonProps>`
  ${typography.weight.bold};
  font-family: 'Roboto Condensed', sans-serif;

  ${({ theme, $variant = 'default' }) => buttonVariants(theme, $variant)};
  ${({ $size = 'medium' }) => buttonSizes($size)};
  ${({ $fullWidth }) => $fullWidth && 'width: 100%'};
  ${({ $shape = 'rectangular' }) => buttonShape($shape)};
  ${({ $onHoverStyle = 'default' }) => buttonHover($onHoverStyle)}
  box-shadow: ${shadows.elevation.md};
  cursor: pointer;
  z-index: 1;
`;
