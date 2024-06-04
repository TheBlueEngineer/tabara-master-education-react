import { ButtonHTMLAttributes, FC } from 'react';
import * as SC from './button.styles';

export type ButtonProps = {
  variant: 'primary' | 'secondary' | 'tertiary' | 'disabled';
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  ...otherProps
}) => {
  return (
    <SC.Button variant={variant} size={size} onClick={onClick} {...otherProps}>
      {children}
    </SC.Button>
  );
};

export default Button;
