import { FC } from 'react';
import * as SC from './icon.styles';
import { IconType } from 'react-icons';

export type IconProps = {
  IconComponent: IconType;
  size?: number;
  color?: string | null;
};

const Icon: FC<IconProps> = ({ IconComponent, size = 16, color = null }) => {
  return (
    <SC.IconWrapper $color={color} $size={size}>
      <IconComponent />
    </SC.IconWrapper>
  );
};

export default Icon;
