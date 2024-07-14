import { FC } from 'react';
import * as SC from './icon-card.styles';
import { IconType } from 'react-icons';
import Icon from '@components/shared-components/icons/icon.component';

type IconCardProps = {
  icon: IconType;
  title: string;
  description: string;
};

export const IconCard: FC<IconCardProps> = ({ icon, title, description }) => {
  return (
    <SC.IconCardContainer>
      <Icon IconComponent={icon} size={48} />
      <SC.Title>{title}</SC.Title>
      <SC.Description>{description}</SC.Description>
    </SC.IconCardContainer>
  );
};

export default IconCard;
