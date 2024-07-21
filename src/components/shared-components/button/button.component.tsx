import { ButtonHTMLAttributes, FC } from 'react';
import * as SC from './button.styles';
import { IconType } from 'react-icons';

export type ButtonProps = {
  variant?: 'default' | 'primary' | 'contained' | 'outlined' | 'disabled';
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded' | 'leaf' | 'rectangular';
  onHoverStyle?: 'glow' | 'opaque' | 'default';
  disabled?: boolean;
  fullWidth?: boolean;
  StartIcon?: IconType;
  EndIcon?: IconType;
  onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  shape = 'rectangular',
  children,
  StartIcon,
  EndIcon,
  fullWidth = false,
  disabled = false,
  onHoverStyle = 'default',
  onClick,
  ...otherProps
}) => {
  return (
    <SC.StyledButton
      $fullWidth={fullWidth}
      disabled={disabled}
      $variant={variant}
      $size={size}
      $shape={shape}
      $onHoverStyle={onHoverStyle}
      onClick={onClick}
      {...otherProps}
    >
      {StartIcon && <StartIcon />}
      {children}
      {EndIcon && <EndIcon />}
    </SC.StyledButton>
  );
};

export default Button;
