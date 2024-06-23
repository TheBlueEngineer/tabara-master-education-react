import styled, { css } from 'styled-components';
import { ButtonProps } from './button.component';
import { ThemeType } from 'src/consts/themes.const';

type StyledButtonProps = Omit<ButtonProps, 'startIcon' | 'endIcon'>;

const buttonVariants = (theme: ThemeType, variant: string) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${theme.colors.background.primary};
        color: ${theme.colors.typography.primary};
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

const buttonSizes = (theme: ThemeType, size: string) => {
  switch (size) {
    case 'small':
      return css`
        padding: ${theme.spacing['4px']}, ${theme.spacing['8px']};
        font-size: ${theme.typography.size.base};
      `;
    case 'medium':
      return css`
        padding: ${theme.spacing['8px']}, ${theme.spacing['12px']};
        font-size: ${theme.typography.size.base};
      `;
    case 'large':
      return css`
        padding: ${theme.spacing['12px']}, ${theme.spacing['16px']};
        font-size: ${theme.typography.size.base};
      `;
  }
};

export const StyledButton = styled.button<StyledButtonProps>`
  transition: background-color 400ms;
  cursor: pointer;
  ${({ theme, variant }) => buttonVariants(theme, variant || 'default')};
  ${({ theme, size }) => buttonSizes(theme, size || 'medium')};
  ${({ fullWidth }) => fullWidth && 'width: 100%'};

  &:hover {
    opacity: ${({ theme }) => theme.opacity[0.8]};
  }
`;

StyledButton.defaultProps = {
  variant: 'default',
  size: 'medium',
  disabled: false,
  fullWidth: false,
};
