import { ButtonHTMLAttributes, FC } from 'react';
import * as SC from './button.styles';
import { IconType } from 'react-icons';
import Icon from '../icons/icon.component';

export type ButtonProps = {
  variant?: 'default' | 'primary' | 'contained' | 'outlined' | 'disabled';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  fullWidth?: boolean;
  startIcon: null | IconType;
  endIcon: null | IconType;
  onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  startIcon = null,
  endIcon = null,
  fullWidth = false,
  disabled = false,
  onClick,
  ...otherProps
}) => {
  return (
    <SC.StyledButton
      fullWidth={fullWidth}
      disabled={disabled}
      variant={variant}
      size={size}
      onClick={onClick}
      {...otherProps}
    >
      {startIcon && <Icon IconComponent={startIcon} />}
      {children}
      {endIcon && <Icon IconComponent={endIcon} />}
    </SC.StyledButton>
  );
};

export default Button;
