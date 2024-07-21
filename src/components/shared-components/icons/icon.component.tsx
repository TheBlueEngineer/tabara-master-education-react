import { FC } from 'react';
import * as SC from './icon.styles';
import { IconType } from 'react-icons';

export type IconProps = {
  Icon: IconType;
  size?: number;
  color?: string | null;
};

const Icon: FC<IconProps> = ({ Icon, size = 16, color = null }) => {
  return (
    <SC.IconWrapper $color={color} $size={size}>
      <Icon />
    </SC.IconWrapper>
  );
};

export default Icon;
