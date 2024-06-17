import { FC } from 'react';
import * as SC from './icon.styles';
import { IconType } from 'react-icons';

export type IconProps = {
  IconComponent: IconType;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'framed';
};

const Icon: FC<IconProps> = ({
  IconComponent,
  size = 'small',
  variant = 'primary',
}) => {
  return (
    <SC.IconWrapper size={size} variant={variant}>
      <IconComponent />
    </SC.IconWrapper>
  );
};

export default Icon;
