import styled, { css } from 'styled-components';
import { ThemeType } from 'src/consts/themes.const';
import { opacity, spacing, typography } from 'src/consts/template.const';
import { ButtonHTMLAttributes } from 'react';

type StyledButtonProps = {
  $variant?: 'default' | 'primary' | 'contained' | 'outlined' | 'disabled';
  $size?: 'small' | 'medium' | 'large';
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
    case 'default':
      return css`
        background-color: white;
        border: 2px solid black;
        color: black;
        border-radius: 1rem;
      `;
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
        padding: ${spacing['8px']} ${spacing['12px']};
        ${typography.size.base};
      `;
    case 'large':
      return css`
        padding: ${spacing['12px']} ${spacing['16px']};
        ${typography.size.base};
      `;
  }
};

export const StyledButton = styled.button<StyledButtonProps>`
  transition: background-color 400ms;
  cursor: pointer;
  ${({ theme, $variant }) => buttonVariants(theme, $variant || 'default')};
  ${({ $size }) => buttonSizes($size || 'medium')};
  ${({ $fullWidth }) => $fullWidth && 'width: 100%'};

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
