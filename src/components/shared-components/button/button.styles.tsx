import styled, { css } from 'styled-components';
import { ThemeType } from 'src/consts/themes.const';
import {
  border,
  opacity,
  spacing,
  typography,
} from 'src/consts/template.const';
import { ButtonHTMLAttributes } from 'react';

type StyledButtonProps = {
  $variant?: 'default' | 'primary' | 'contained' | 'outlined' | 'disabled';
  $size?: 'small' | 'medium' | 'large';
  $shape: 'leaf' | 'rounded' | 'rectangular';
  disabled?: boolean;
  $fullWidth?: boolean;
  onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const buttonVariants = (theme: ThemeType, variant: string) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${theme.colors.green700};
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
  transition: background-color 400ms;
  ${typography.weight.bold};
  font-family: 'Roboto Condensed', sans-serif;
  cursor: pointer;
  ${({ theme, $variant }) => buttonVariants(theme, $variant || 'default')};
  ${({ $size }) => buttonSizes($size || 'medium')};
  ${({ $fullWidth }) => $fullWidth && 'width: 100%'};
  ${({ $shape }) => buttonShape($shape || 'rectangular')};
  z-index: 1;

  &:hover {
    opacity: ${opacity[0.8]};
  }
`;

StyledButton.defaultProps = {
  $variant: 'default',
  $size: 'medium',
  disabled: false,
  $fullWidth: false,
};
