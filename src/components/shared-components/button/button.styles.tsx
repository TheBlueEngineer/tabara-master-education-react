import styled, { css } from 'styled-components';
import { ButtonProps } from './button.component';

const variantStyles = {
  primary: css`
    background-color: blue;
    color: white;
    &:hover {
      background-color: darkblue;
    }
  `,
  secondary: css`
    background-color: gray;
    color: white;
    &:hover {
      background-color: darkgray;
    }
  `,
  tertiary: css`
    background-color: red;
    color: white;
    &:hover {
      background-color: darkred;
    }
  `,
};

const sizeStyles = {
  small: css`
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  `,
  medium: css`
    padding: 0.5rem 1rem;
    font-size: 1rem;
  `,
  large: css`
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
  `,
};

const shapeStyle = {
  default: css``,
  rounded: css`
    border-radius: 1rem;
  `,
  leaf: css`
    border-radius: 2rem 0rem 2rem 0rem;
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  ${(props) => variantStyles[props.variant || 'primary']};
  ${(props) => sizeStyles[props.size || 'medium']};
  ${(props) => shapeStyle[props.shape || 'default']};
`;
``;
