import styled, { css } from 'styled-components';
import { ButtonProps } from './button.component';
import {
  borderRadius,
  elevation,
  fontSize,
  spacing,
} from 'src/consts/template.const';

const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.green['700']};
    color: white;
    &:hover {
      background-color: ${({ theme }) => theme.colors.green['900']};
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
    padding-left: ${spacing['0.5rem']};
    padding-right: ${spacing['0.5rem']};
    padding-top: ${spacing['0.25rem']};
    padding-bottom: ${spacing['0.25rem']};
    font-size: ${fontSize['1.125rem']};
  `,
  medium: css`
    padding-left: ${spacing['1.5rem']};
    padding-right: ${spacing['1.5rem']};
    padding-top: ${spacing['0.75rem']};
    padding-bottom: ${spacing['0.75rem']};
    font-size: ${fontSize['1.5rem']};
  `,
  large: css`
    padding: 0.75rem 1.5rem;
    font-size: ${fontSize['2rem']};
  `,
};

const shapeStyle = {
  default: css``,
  rounded: css`
    border-radius: ${borderRadius['1rem']};
  `,
  leaf: css`
    border-radius: 2rem 0rem 2rem 0rem;
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  box-shadow:
    ${elevation.far},
    0px ${spacing['0.25rem']} 0px inset hsla(0, 0%, 100%, 0.2);
  transition: background-color 400ms;
  cursor: pointer;
  ${(props) => variantStyles[props.variant || 'primary']};
  ${(props) => sizeStyles[props.size || 'medium']};
  ${(props) => shapeStyle[props.shape || 'default']};
`;
``;
