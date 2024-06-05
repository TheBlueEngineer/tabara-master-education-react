import { ButtonHTMLAttributes, FC } from 'react';
import * as SC from './button.styles';

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  shape?: 'default' | 'rounded' | 'leaf';
  onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  shape = 'default',
  children,
  onClick,
  ...otherProps
}) => {
  return (
    <SC.StyledButton
      variant={variant}
      size={size}
      shape={shape}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </SC.StyledButton>
  );
};

export default Button;
